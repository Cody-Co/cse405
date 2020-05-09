const http = require('http');

// Create server obnj
http.createServer((req, res) => {
    // write Response
    res.write('Hello World');
    res.end()
}).listen(5005, () => console.log('Server Running...'));
