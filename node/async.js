const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res)=>{
    try{
        const data = await fs.promises.readFile('./input.txt');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
    }catch{
        res.writeHead(500);
        res.end('Something went wrong');
    }
});

server.listen(3000, ()=> console.log('Server running on port 3000'));