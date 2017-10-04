/**
 * Created by joe on 04/10/17.
 */
const util = require('util');
const fs = require('fs');
const recursive = require("recursive-readdir");
const yaml = require('js-yaml');
const _ = require('lodash');
const loudRejection = require('loud-rejection');
loudRejection();

let base = 'apk/co/uk/getmondo/api/model/';

let swag = yaml.safeLoad(fs.readFileSync('swagger.yml'));

let endpoints = _.keys(swag.paths);

let usedends = [];

function filter(files, filter, filterend, filtername) {
    return files.map(f => {
        if (f.endpoint)
            return f;

        for (let endpoint of endpoints) {
            let changed = endpoint;
            if (filterend)
                changed = filterend(changed);
            changed = filter(changed).toLowerCase();

            let fname = f.name;
            if (filtername)
                fname = filtername(fname);
            fname = filter(fname).toLowerCase();

            if (changed == fname) {
                console.log(endpoint, changed, fname);
                f.endpoint = endpoint;

                _.pull(endpoints, endpoint);
            }
        }
        return f;
    });
}
(async () => {
    let files = await recursive(base);
    files = files.map(f => {
        let name = /model\/(.*)\.java/.exec(f);
        let c = /([a-zA-Z0-9]+)\.java$/.exec(f);

        return {
            path: f,
            name: name[1],
            'class': c[1],
            endpoint: null
        };
    })

    files = _.keyBy(files, 'name');
    files['ApiInitialTopupStatus']
    files['ApiPostcodeResponse']
    files['ApiProfile'].endpoint = '/profile';
    files['ApiToken'].endpoint = '/oauth2/token';
    files['ApiWaitlistPosition'].endpoint = '/waitlist';
    files['feed/ApiAttachment'].endpoint = '/waitlist';
    files['feed/ApiFeedItem'].endpoint = '/feed/{id}';
    files['feed/ApiTransaction'].endpoint = '/transactions/{transaction_id}';
    files['help/SearchQuery'].endpoint = '/help/content/search';
    files['help/Section'].endpoint = '/help/content/categories/{id}';
    files['topup/ApiThreeDsResponse'].endpoint = '/stripe/three_d_secure';
    files = _.values(files);

    console.log(files);

    //find "exact" matches (lowercase, no slashes, append Api on start)
    files = filter(files, item => item.replace(/[/\-]/g, '').replace(/{.*?}/g, ''),
        endpoint => endpoint.replace(/{.*?}/g, ''),
        path => path.replace(/api/gi, '')
    );

    //plurals
    files = filter(files, item => item.replace(/[/\-s]/gi, ''),
        endpoint => endpoint.replace(/{.*?}/g, ''),
        path => path.replace(/api/gi, '')
    );

    //"response" + plurals
    files = filter(files, item => item.replace(/[/\-s]/gi, '').replace(/{.*?}/g, '').replace(/api/gi, ''),
        endpoint => endpoint.replace(/{.*?}/g, ''),
        path => path.replace(/api/gi, '').replace(/(response|list)/gi, '')
    );

    // remove first dir
    files = filter(files, item => item.replace(/[/\-]/gi, '').replace(/{.*?}/g, '').replace(/api/gi, ''),
        endpoint => endpoint.replace(/{.*?}/g, ''),
        path => path.replace(/api/gi, '').replace(/(response|list)/gi, '').replace(/^.*\//g, '')
    );

    // remove dir + plurals
    files = filter(files, item => item.replace(/[/\-]/gi, '').replace(/{.*?}/g, '').replace(/api/gi, ''),
        endpoint => endpoint.replace(/{.*?}/g, ''),
        path => path.replace(/api/gi, '').replace(/(response|list)$/gi, '').replace(/^.*\//g, '')
    );

    // console.log(util.inspect(files, {colors: true}));

    // let mapping = _.keyBy(files, 'endpoint');
    //
    // console.log(mapping);
    for (let map of files) {
        if (!map.endpoint)
            continue;

        if (!swag.paths[map.endpoint]) {
            console.log('not found', map.endpoint)
        }

        let methods = swag.paths[map.endpoint];
        // console.log('m', methods);
        for (let method in methods) {
            swag.paths[map.endpoint][method].responses['200'].schema = {
                '$ref': '#definitions/' + map.class
            };
        }
    }
    fs.writeFileSync('swagger.yml', yaml.safeDump(swag))


})();
