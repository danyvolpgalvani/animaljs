const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
 res.render('index');
});

app.get('/api/album-animali', (req, res) => {
  res.sendfile(__dirname + '/public/json/demo-animals.json');
});

app.post('/api/animal', (req, res, next) => {
    res.send(JSON.stringify(req.body));
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});