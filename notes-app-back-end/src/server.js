// server.js

import { server as _server } from '@hapi/hapi';
// Ubah ini:
import routes from './routes.js'; // Tidak ada kurung kurawal, karena ini adalah default export

const init = async () => {
    const server = _server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();