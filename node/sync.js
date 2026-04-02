const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const start = Date.now();
    while (Date.now() - start < 3000){}
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Done');
});

server.listen(3000, ()=> console.log('Server running on port 3000'));