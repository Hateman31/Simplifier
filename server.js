var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(__dirname + '/dist/static'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.post('/new',function(req,res){
	console.log('add new task')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
