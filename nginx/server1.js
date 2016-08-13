'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const body = JSON.stringify({
    server1: new Date()
  });

  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.writeHead(200);
  res.end(body);
});

server.listen(8000);
