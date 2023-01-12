#!/usr/bin/env node
const
port = (process.argv[2] || process.env.PORT || 3000),
http = require('http');
http.createServer((req, res) => {
    console.log(req.url);
    const nameArg = capitalize( req.url.replace(/[^\w.,-]/g, ' ').replace(/\s+/g, ' ').trim() || 'to all' );
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello ${ nameArg }!</h1>`);
}).listen(port);
console.log(`Server running at http://localhost:${ port }/`);
function capitalize(str) {
    return str
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    };
