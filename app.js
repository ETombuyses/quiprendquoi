const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', function(req, res) {
  console.log('params sent', req.body);

  axios
  .post(`${process.env.API_URL}/party`, req.body)
  .then(({data}) => console.log(data))
  .catch((err) => console.error(err));
});

app.get('/party/:id', function(req, res) {
  res.render('party', { title: 'Qui prend quoi ?' });
});


app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));

app.set('view engine', 'pug');