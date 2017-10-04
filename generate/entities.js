/**
 * Created by joe on 04/10/17.
 */

const util = require('util');
const fs = require('fs');
const recursive = require("recursive-readdir");
const yaml = require('js-yaml');
const _ = require('lodash');
const parser = require('java-parser');

let base = 'apk/co/uk/getmondo/api/model/';

(async () => {

    let swag = yaml.safeLoad(fs.readFileSync('../swagger.yaml'));

    let files = await recursive(base);
    files = files.map(f => {
        let name = /model\/(.*).java/.exec(f);
        return {
            path: f,
            name: name[1],
            endpoint: null
        };
    })

    let entities = {};

    for (let file of files) {
        console.log(file);
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

            let def = {
                type: matches[1]
            };

            //array, boolean, integer, null, number, object, string
            if (['float', 'double', 'short', 'long'].indexOf(matches[1])) {
                def.type = 'number';
            }
            else if (matches[1] == 'String') {
                def.type = 'string';
            }
            else if (matches[1] == 'boolean') {
                def.type = 'boolean';
            }
            else {
                def.type = 'object';
            }


            entity.properties[matches[2]] = def;
        }
        entities[file.name] = entity;
    }

    console.log(util.inspect(entities, {depth: null, colors: true}));

    swag.definitions = entities;

    fs.writeFileSync('swagger.yml', yaml.safeDump(swag))

})();