//comment added in testing branch
var express = require('express');
var path = require('path');

var app = express();
var http = require('http').Server(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  
  res.render('index');

});

http.listen(4000, function(){
    console.log('listening on *:4000');
});


module.exports = app;
