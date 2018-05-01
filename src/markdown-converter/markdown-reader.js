const fs = require('fs/promises');

const BASE_PATH = `${__dirname}/../markdown`;

const cache = {};

function fileExists(name) {
    return fs.lstat(`${BASE_PATH}/${name}.md`)
        .then(stat => stat.isFile())
        .catch(() => false);
}

function fileContent(name) {
    return fs.readFile(`${BASE_PATH}/${name}.md`, 'utf8')
        .catch(err => {
            console.error('ERROR reading file ---> ', err);
        });
}

function getMarkdownContent(name) {
    return new Promise(async (resolve, reject) => {
        
        if (cache[name]) return resolve(cache[name]);

        if (!await fileExists(name)) return reject();

        cache[name] = await fileContent(name);
        return resolve(cache[name]);
    });
}

module.exports = {
    getMarkdownContent
};