
const http = require('http');
const axios = require('axios');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    const getData = async () => {
        try {
            var stargazers_count, forks_count, open_issues_count;
            const resource = await axios.get('https://api.github.com/repos/nodejs/node');
            ({stargazers_count, forks_count, open_issues_count}=resource.data);
            res.end(`Stargazer: ${stargazers_count}\nForks: ${forks_count}\nOpen Issues: ${open_issues_count}`);
            
        }catch (error){
            res.statusCode = 500;
            res.end("Internal error issued.");
        }
    };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    getData();

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});