var express = require('express');
var routes = require('./routes')
var fs = require('fs')
var app = express();
var morgan = require('morgan');
var path = require('path');
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

app.set('port', (process.env.PORT || 5000))
//set up template engine
app.set('view engine','ejs');
app.use(morgan('combined'))
//static files
app.use(express.static('./public'));

routes(app);
app.listen(app.get('port'));

console.log("listening to port "+app.get('port'));
