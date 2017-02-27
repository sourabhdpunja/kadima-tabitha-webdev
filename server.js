var express = require('express');
var app = express();

// install, load, and configure body parser module 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);
require("./assignment/app.js")(app); 

var port  = process.env.PORT || 3000;

app.listen(port);