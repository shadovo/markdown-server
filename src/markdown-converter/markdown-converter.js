const md = require('markdown-it')();

function convert (content) {
    return md.render(content);
}

module.exports = {
    convert
};