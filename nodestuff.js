#! /usr/bin/env node
var fs = require('fs');
var net = require('net');

console.log("Just trying some node code:\n");

var server = net.createServer(function socket() {
  socket.on('data', function(data) {
    socket.write(data);
  });
});
server.listen(8888);
