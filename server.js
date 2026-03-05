const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const ROOT_DIR = __dirname;

const server = http.createServer((req, res) => {
    let filePath = path.join(ROOT_DIR, req.url);

    if (req.url === '/') {
        filePath = path.join(ROOT_DIR, 'index.html');
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>404 - File Not Found</h1>');
            return;
        }

        let contentType = 'text/html';
        if (filePath.endsWith('.css')) contentType = 'text/css';
        if (filePath.endsWith('.js')) contentType = 'application/javascript';
        if (filePath.endsWith('.json')) contentType = 'application/json';
        if (filePath.endsWith('.png')) contentType = 'image/png';
        if (filePath.endsWith('.jpg')) contentType = 'image/jpeg';
        if (filePath.endsWith('.gif')) contentType = 'image/gif';

        res.writeHead(200, {'Content-Type': contentType});
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
