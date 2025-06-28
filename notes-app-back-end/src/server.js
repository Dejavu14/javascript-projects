import Hapi from '@hapi/hapi';
import routes from './routes.js'; // Import routes dari file routes.js
 
const init = async () => {
const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'], // Izinkan akses dari semua originn
    },
  },
});
 
server.route(routes);
 
await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();