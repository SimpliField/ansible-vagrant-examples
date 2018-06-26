'use strict';

const http = require('http');
const lookup = require('dns').lookup;
const hostname = require('os').hostname();

lookup(hostname, (err, ip) => {
  const server = http.createServer((req, res) => {
    const body = JSON.stringify({
      serrver1: new Date(),
      ip,
      hostname,
    });

    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.writeHead(200);
    res.end(body);
  });

  server.listen(8000);
});
