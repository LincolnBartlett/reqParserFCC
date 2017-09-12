
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get("/", function (req, res) {
  var ip = req.headers['x-forwarded-for'].split(',');
  var lang = req.headers['accept-language'].split(',');
  var software= req.headers['user-agent'].split(',');
  var output = {
    "ip adress" : ip[0],
    "language" : lang[0],
    "software" : software
  };
  res.render('index',{output : output});
  console.log(software);  
});



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
