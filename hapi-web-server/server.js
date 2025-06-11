// console.log('Halo, kita akan belajar membuat server menggunakan Hapi');

// Contoh Membuat HTTP Server tanpa routes
// const Hapi = require('@hapi/hapi');

// const init = async () => {
//     const server = Hapi.server({
//         port: 5000,
//         host: 'localhost',
//     });

//     await server.start();
//     console.log(`Server berjalan pada ${server.info.uri}`);
// };

// init();


// Contoh Membuat HTTP Server dengan routes dan Hapi framework
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // Register routes
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();


