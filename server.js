
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get("/", function (req, res) {
  var output = req.headers['x-forwarded-for'];
  res.render('index',{output : output});
  console.log(req); 
});



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
