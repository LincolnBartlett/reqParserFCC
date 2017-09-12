
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(express.static('public'));


app.get("/", function (req, res) {
  var output = req.
  
  res.send('index',{output : output});
});



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
