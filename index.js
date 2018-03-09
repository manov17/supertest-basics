'use strict';

var server = require('./server');
var port = process.env.PORT || 3003;

server.listen(port, function() {
  console.log('server running on port %d', port);
});