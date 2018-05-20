var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var multer = require('multer');
var app = express();


var index = require('./routes/index');
var users = require('./routes/users')(passport);
var comments = require('./routes/comments');
require('./strategies/passport-local')(passport);
var bcrypt = require('bcryptjs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.set('view engine', 'ejs');
app.use('/users', users);
// app.use('/comments', comments);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

let localStorage = multer.diskStorage({
  
      destination: function (request, file, callback) {
          callback(null, __dirname + '/static/images/multerUploads');
      },
      filename: function (req, file, callback) {
          callback(null, Date.now() + file.originalname);
      }
  });
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
