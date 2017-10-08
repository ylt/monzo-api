/**
 * Created by joe on 04/10/17.
 */

const util = require('util');
const fs = require('fs');
const recursive = require("recursive-readdir");
const yaml = require('js-yaml');
const _ = require('lodash');
const parser = require('java-parser');

const loudRejection = require('loud-rejection');
loudRejection();

let base = 'apk/co/uk/getmondo/api/model/';

(async () => {

    let swag = yaml.safeLoad(fs.readFileSync('swagger.yml'));

    let files = await recursive(base);
    files = files.map(f => {
        let name = /model\/(.*)\.(java|kt)/.exec(f);
        let c = /([a-zA-Z0-9]+)\.(java|kt)$/.exec(f);

        return {
            path: f,
            name: name[1],
            'class': c[1],
            endpoint: null
        };
    })

    console.log(files);

    let byClass = _.keyBy(files, 'class');


    let entities = {};

    function resolveType(file, type, name) {
        let typematches;
        if (typematches = /(.*)<(.*)>/.exec(type)) {

            console.log('hmm', type, typematches);

            let def = resolveType(file, typematches[1], name);
            def.items = resolveType(file, typematches[2], name);
            return def;
        }
        else {
            return resolveBasicType(file, type, name);
        }

    }

    function resolveBasicType(file, type, name) {
        let ltype = type.toLowerCase();

        let def = {
            type: ltype
        };

        //array, boolean, integer, null, number, object, string
        if (['float', 'double'].indexOf(ltype) !== -1) {
            def.type = 'number';
            def.format = ltype;
        }
        else if (ltype == 'short') {
            def.type = 'integer';
            def.format = 'int16';
        }
        else if (['int', 'integer'].indexOf(ltype) !== -1) {
            def.type = 'integer';
            def.format = 'int32';
        }
        else if (ltype == 'long') {
            def.type = 'integer';
            def.format = 'int64';
        }
        else if (ltype == 'string') {
            def.type = 'string';
        }
        else if (ltype == 'boolean') {
            def.type = 'boolean';
        }
        else if (ltype == 'list') {
            def.type = 'array';
            def.items = {
                type: 'object'
            }
        }
        else if (['g', 'date'].indexOf(ltype) !== -1) {
            def.type = 'string';
            def.format = "date-time";
        }
        else {

            if (type.split('.')[0] == file['class']) {
                //this is a self reference, nothing we can do here, yet..
                def.type = 'object';
                def.description = '*TODO: inner class refs';
            }
            else {
                // def.obj = matches[1];
                if (byClass[type]) {
                    delete def.type;
                    def.$ref = '#/definitions/'+byClass[type].class
                }
                else {
                    def.type = 'object';
                    def.description = 'Unknown type: '+type;
                }
            }

        }
        return def;
    }

    for (let file of files) {
        // console.log(file);
        let contents = fs.readFileSync(file.path, {encoding: 'utf8'});
        // contents = contents.replace(/@Metadata\([\s\S]+^\)/m, '');
        // console.log(contents);
        //
        // let ast = parser.parse(contents);
        // fs.writeFileSync('cached/'+file.name+'.json', JSON.stringify(ast, null, ' '));
        // console.log(ast);

        let entity = {
            type: 'object',
            properties: {}
        };

        let re = /private final (.*) ([a-zA-Z0-9]+);/g;
        while (matches = re.exec(contents)) {
            // console.log(matches[1], matches[2]);

            def = resolveType(file, matches[1], matches[2]);



            entity.properties[matches[2]] = def;
        }
        entities[file.class] = entity;
    }

    console.log(util.inspect(entities, {depth: null, colors: true}));

    swag.definitions = entities;

    fs.writeFileSync('swagger.yml', yaml.safeDump(swag))

})();