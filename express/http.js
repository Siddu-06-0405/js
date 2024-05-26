var http = require('http');

http.createServer(function (req, res) {
    setTimeout(function () {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World');
        res.end();
    }, 2000);
}).listen(8000, function() {
    console.log('Server is listening on port 8000');
});