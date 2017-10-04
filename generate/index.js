/**
 * Created by joe on 03/10/17.
 */

const parser = require('java-parser');
const fs = require('fs');
const util = require('util');
const _ = require('lodash');
const yaml = require('js-yaml');

let generated = {};


function parse(path, ptags) {
    // console.log(path);
    let contents = fs.readFileSync(path, {encoding: 'utf8'});
    let ast = parser.parse(contents);

    for (let t of ast.types[0].bodyDeclarations) {
        //

        let req = _.find(t.modifiers, m => m.typeName && ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'].indexOf(m.typeName.identifier) !== -1);
        // console.log(req);
        if (!req)
            continue;

        // console.log(util.inspect(t, {colors: true, depth: null}));

        let method = req.typeName.identifier.toLowerCase();
        let url = JSON.parse(req.value.escapedValue);

        if (url.substr(0, 1) != '/')
            url = '/' + url;

        if (!(url in generated)) {
            generated[url] = {};
        }

        let params = [];
        for (let p of t.parameters) {
            let modifier = _.head(p.modifiers);
            let type = modifier.typeName.identifier.toLowerCase();
            if (type == 'fieldmap')
                continue;

            // console.log(p.type);

            let name = JSON.parse(modifier.value.escapedValue);

            if (type == 'field')
                type = 'formData';

            let param = {
                'in': type,
                name: name,
                type: ''
            };

            let subtype = '';
            if (p.type.primitiveTypeCode) {
                // int, long, boolean, etc
                // dtype = p.type.primitiveTypeCode.toLowerCase();
                if (p.type.primitiveTypeCode == 'boolean')
                    param.type = 'boolean';
                else
                    param.type = 'number';
            }
            else if (p.type.node == 'SimpleType') {
                // most likely, "String"
                param.type = 'string';
            }
            else if (p.type.node == 'ArrayType') {
                param.type = 'array';
                let sub = p.type.componentType
                if (sub.primitiveTypeCode) {
                    param.items = {
                        type: 'number'
                    };
                }
                else if (sub.node == 'SimpleType') {
                    param.items = {
                        type: 'string'
                    };
                }
            }

            // console.log(' - ', type, dtype, name);


            if (type == 'path')
                param.required = true;

            params.push(param);
        }

        // console.log(method, url, params);

        let inf = {
            produces: ['application/json'],
            consumes: [],
            tags: ptags,
            parameters: params,
            responses: {
                200: {
                    description: 'Success'
                }
            }
        };

        if (method == 'put' || method == 'post' || method == 'patch')
            inf.consumes.push('application/x-www-form-urlencoded')

        generated[url][method] = inf;
    }
}

parse('./apk/co/uk/getmondo/api/MonzoApi.java', ['MonzoApi']);
parse('./apk/co/uk/getmondo/api/MonzoSignUpApi.java', ['MonzoSignUpApi']);
parse('./apk/co/uk/getmondo/api/MonzoPaymentsApi.java', ['MonzoPaymentsApi']);
parse('./apk/co/uk/getmondo/api/MonzoIdentityVerificationApi.java', ['MonzoIdentityVerificationApi']);
// parse('./apk/co/uk/getmondo/api/MonzoAnalyticsApi.java', 'MonzoAnalyticsApi');
parse('./apk/co/uk/getmondo/api/HelpApi.java', ['HelpApi']);
parse('./apk/co/uk/getmondo/api/ServiceStatusApi.java', ['ServiceStatusApi']);


console.log(yaml.safeDump(
    {
        swagger: "2.0",
        info: {
            description: "",
            version: "1.0.0",
            title: "Monzo Undocumented API"
        },
        host: "api.monzo.com",
        basePath: "/",
        tags: [
            {
                name: "Account",
                description: ""
            },
            {
                name: "Topup",
                description: ""
            },
            {
                name: "user",
                description: ""
            },
        ],
        schemes: [
            "https"
        ],
        paths: _(generated).toPairs().sortBy(0).fromPairs().value(),
        securityDefinitions: {},
        definitions: {}
    }
));