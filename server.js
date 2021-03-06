var http	= require('http'),
	fs		= require('fs'),
	express = require('express'),
	stylus  = require('stylus');

var app	   = express(),
	data   = fs.readFileSync('data.json');

var people   = JSON.parse(data);

// jade como motor de templates
app.set('view engine','jade');
app.set('views', __dirname + '/views');

// stylus como pre-procesador de estilos
app.use(stylus.middleware(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/people', function(req, res){
	res.send(people);
});

http.createServer(app).listen(3000, function(){
	console.log('\nApp running on port 3000\n');
});
