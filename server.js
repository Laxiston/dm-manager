var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './client')));

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
// app.use(require('morgan')('combined'));
// app.use(require('cookie-parser')());
// app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
var bodyParser = require("body-parser");

// Allows post data to be JSON
app.use(bodyParser.json());

// Allows post or get data to be urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// DB & Model Handler
require('./server/config/mongoose.js');

// Passport
// var passport = require('./server/config/passport.js')(app);

// Route handler.
require('./server/config/routes.js')(app);

app.listen(process.env.PORT || 3333, function(){
  console.log('listening on port %d, in %s mode', this.address().port, app.settings.env);
});