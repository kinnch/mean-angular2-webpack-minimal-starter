var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var chalk = require('chalk');
require('dotenv').config();

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var port = process.env.APP_PORT;
app.listen(port, function () {
    console.log(chalk.green('App listening on port ' + port));
});

app.use(express.static('web/dist'));
app.get('/', function (req, res) {
    res.sendfile('./web/dist/index.html');
});

require('./server/main.api')(app, express);
module.exports = app;