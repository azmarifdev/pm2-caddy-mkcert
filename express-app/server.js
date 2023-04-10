'use strict';

var http = require('http');
var app = require('./app.js');

http.createServer(app).listen(process.env.PORT || 8080, function () {
    console.info('Listening on', this.address());
});
