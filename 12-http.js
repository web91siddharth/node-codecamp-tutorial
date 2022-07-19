const http = require('http');

const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        response.end('Welcome to the homepage');
    }
    else if(request.url === '/about'){
        response.end('About');
    } else {
        response.end('404');
    }
});

server.listen(5050);