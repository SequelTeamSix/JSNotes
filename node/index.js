const { read } = require('fs');
const http = require('http');

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end('Hello Server!');
}

const server = http.createServer(requestListener);
server.listen(8081);