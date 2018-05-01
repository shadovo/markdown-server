const htmlGenerator = require('./src/htmlGenerator/htmlGenerator.js');
const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.get('/:file', async (req, res) => {
    htmlGenerator.getHtmlForFile(req.params.file)
        .then(content => res.render('main', {
            title: req.params.file,
            content
        }))
        .catch(() => res.status(404).send(''));
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));