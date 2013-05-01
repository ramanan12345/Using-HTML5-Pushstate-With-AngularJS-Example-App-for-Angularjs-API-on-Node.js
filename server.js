var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));
app.use(app.router);
app.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || 'localhost');
app.get('/', function (req, res) { 
  res.set('content-type', 'text/html');
  res.send(fs.readFileSync(__dirname + '/index.html', 'utf8'));
});
app.get('/another/route', function (req, res) { 
  res.set('content-type', 'text/html');
  res.send(fs.readFileSync(__dirname + '/index.html', 'utf8'));
});
