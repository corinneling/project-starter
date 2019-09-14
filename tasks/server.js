var express = require('express')
var http = require('http')
var path = require('path')
var reload = require('reload')

var app = express()
 
var publicDir = path.join(__dirname, '../src')
 
app.set('port', process.env.PORT || 3000)
 
app.get('/', function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'))
})

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(publicDir, 'style.css'));
});

app.get('/index.js', function(req, res) {
  res.sendFile(path.join(publicDir, 'index.js'));
});
 
var server = http.createServer(app)
 
reload(app).then(function (reloadReturned) { 
  server.listen(app.get('port'), function () {
    console.log(`Web server listening on port http://localhost:${app.get('port')}`)
  })
}).catch(function (err) {
  console.error('Reload could not start, could not start server/sample app', err)
})
