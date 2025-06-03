const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const { method, url } = request;

    // if (method === 'GET') {
    //     response.end('<h1>Ini adalah Method GET!</h1>');
    // }

    // if (method === 'POST') {
        
    //     let body = [];

    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name } = JSON.parse(body);
    //         response.end(`<h1>Hai, ${name}</h1>`);
    //     });
        
    // }

    // if (method === 'PUT') {
    //     response.end('<h1>Ini adalah Method PUT!</h1>');
    // }

    // if (method === 'DELETE') {
    //     response.end('<h1>Ini adalah Method DELETE!</h1>');
    // }


    if (url === '/') {
        response.end('<h1>Selamat datang di halaman utama!</h1>');
        
    } else if (url === '/about') {
        response.end('<h1>Selamat datang di halaman about!</h1>');

    } else {
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan!</h1>');
        
    }

};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
});
