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
        let name = /model\/(.*)\.java/.exec(f);
        let c = /([a-zA-Z0-9]+)\.java$/.exec(f);

        return {
            path: f,
            name: name[1],
            'class': c[1],
            endpoint: null
        };
    })

    let byClass = _.keyBy(files, 'class');

    let entities = {};

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

            let def = {
                type: matches[1]
            };

            //array, boolean, integer, null, number, object, string
            if (['float', 'double', 'short', 'long'].indexOf(matches[1].toLowerCase()) !== -1) {
                def.type = 'number';
            }
            else if (matches[1].toLowerCase() == 'integer') {
                def.type = 'integer';
            }
            else if (matches[1].toLowerCase() == 'string') {
                def.type = 'string';
            }
            else if (matches[1].toLowerCase() == 'boolean') {
                def.type = 'boolean';
            }
            else if (matches[1] == 'List') {
                def.type = 'array';
                def.items = {
                    type: 'object'
                }
            }
            else {
                def.type = 'object';

                console.log(matches[1], matches[1].split('.')[0], file['class']);
                if (matches[1].split('.')[0] == file['class']) {
                    //this is a self reference, nothing we can do here, yet..
                }
                else {
                    // def.obj = matches[1];
                    if (byClass[matches[1]]) {
                        def.$ref = '#definitions/'+byClass[matches[1]].class
                    }
                }

            }


            entity.properties[matches[2]] = def;
        }
        entities[file.class] = entity;
    }

    console.log(util.inspect(entities, {depth: null, colors: true}));

    swag.definitions = entities;

    fs.writeFileSync('swagger.yml', yaml.safeDump(swag))

})();