const htmlGenerator = require('./src/htmlGenerator/htmlGenerator.js');
const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main', {
        title: 'Articles by Shadovo',
        content: '<h1>Welcome traveler of the internet!</h1>'
    });
});

app.get('/a/:file', async (req, res) => {
    htmlGenerator.getHtmlForFile(req.params.file)
        .then(content => res.render('main', {
            title: `Articles by Shadovo: ${req.params.file}`,
            content
        }))
        .catch(() => res.status(404).send(''));
});

app.get('*', (req, res) => {
    res.status(404).render('main', {
        title: 'Woops!',
        content: '<h1>You seam to be lost traveler!</h1>'
    });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));