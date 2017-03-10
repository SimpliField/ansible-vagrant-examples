'use strict';

const http = require('http');
const { parse } = require('url');

const server = http.createServer((req, res) => {
  const { path } = parse(req.url)

  console.log(`[${req.method}] ${path}`);

  if('/shutdown' === path) {
    process.exit(1);
  }

  const body = JSON.stringify({
    server1: new Date()
  });

  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.writeHead(200);
  res.end(body);
});

server.listen(8000);
