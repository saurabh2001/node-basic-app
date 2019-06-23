const http = require("http");
const logger = require('./logger');

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        logger.printMessage('/ called');
        res.write('/ called');
        res.end();
    }else if(req.url === '/ping'){

        logger.printMessage('Ping successful');
        res.write('Ping successful');
        res.end();
    }
});
server.listen(3000);
console.log('Server listening on port 3000...');

server.on('connection',()=>{
console.log('connection initiated');
});