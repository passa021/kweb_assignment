
const http = require('http');
const axios = require('axios');

const hostname = '127.0.0.1';
const port = 3000;

const getData = async () => {
    try {
        const resource = axios.get('https://api.github.com/repos/nodejs/node');
        console.log(resource);
    }catch (error){
        console.error(error);
    }
};

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Conteßt-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});