var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var orm = require('orm');
var ormConfig = require('./model');
var router = require('./routes/routes.js');


app.use(bodyParser.json());
app.use(express.static('static'));
app.use(orm.express("postgres://Loren1@localhost/fitness_app", ormConfig));
app.use(router);

app.get('/', function(req, res) {
  res.send("you've hit the api. good jorb");
});



var port = process.env.port || 8080;
console.log('ze magic is happening on 8080');
app.listen(port);
