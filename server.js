const fs = require('fs'),

    express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

let stringifyFile = "";

app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
        console.log('Otrzymałem żądanie GET do strony głównej')
    });
});

app.post('/updateNote/:note', (req, res) => {
    stringifyFile = req.params.note;
    fs.writeFile('./test.json', stringifyFile, (err) => {
        if (err) throw err;
        console.log('file updated');
    });
})

app.listen(3000);
