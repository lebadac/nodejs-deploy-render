const bodyparse = require('body-parser');
var express = require('express');
const methodOverride = require('method-override');

var app = express();

app.use(bodyparse.json({
    limit: '5mb'
}));

app.use(bodyparse.json({
    type: 'application/vnd.api+json'
}));

app.use(bodyparse .json({
    limit: '5mb',
    extended: true
}));

app.use(methodOverride('X-HTTP-Method-Override'));

require('./routes')(app);

let server = require('http').createServer(app);

app.get('/', function(req, res){
    res.send('Hello World');
});

server.listen(3000, function(){
    console.log('Sever app running on port 3000!');
});

