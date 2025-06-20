// console.log('Hallo kita akan membuat RESTful API Yuhuuuu');
// import { server as _server } from '@hapi/hapi';
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = _server({
        port: 5000,
        host: 'localhost',
        // eslint-disable-next-line linebreak-style
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();