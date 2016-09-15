var express = require('express');
var http = require('http');
var https = require('https');
var url = require('url');
var fs = require('fs');
var ejs = require('ejs');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

// var mongoStore = require('connect-mongo')({session:expressSession});
// var mongoose = require('mongoose');
// require('./models/userInfo.js');
// var conn = mongoose.connect('mongodb://localhost/myApp')

var app = express();

app.engine('html', ejs.renderFile);
app.set('views', './views');
app.set('view engine', 'html')

var options = {
  host:'127.0.0.1',
  key:fs.readFileSync('ssl/server.pem'),
  cert:fs.readFileSync('ssl/server.crt')
};

app.use(bodyParser());
app.use(cookieParser());
// app.use(expressSession({
//   secret:'SECRET',
//   cookie:{maxAge:60*60*1000},
//   store:new mongoStore({
//     db:mongoose.connection.db,
//     cpllection:'sessions'
//   })
// }));

require('./routes.js')(app);

http.createServer(app).listen(8080);
https.createServer(options, app).listen(3333);
