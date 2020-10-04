const http = require('http');
const hostname = '127.0.0.1'; const port = 4000;

function clock(){
    var d = new Date();
    var hour = d.getHours().toString();
    var minute = d.getMinutes().toString();
    var second = d.getSeconds().toString();

    NOW += hour + ':' + minute + ':' + second ;
    
    return NOW;
}

const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end(clock());
});


server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});