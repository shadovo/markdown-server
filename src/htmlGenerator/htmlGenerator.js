const markdownReader = require('../markdown-converter/markdown-reader.js');
const markdownConverter = require('../markdown-converter/markdown-converter.js');

function getHtmlForFile(file) {
    return Promise.resolve(file)
        .then(markdownReader.getMarkdownContent)
        .then(markdownConverter.convert)
        .catch(err => {
            console.error('ERROR generating HTML ---> ', err);
        });
}

module.exports = {
    getHtmlForFile
};