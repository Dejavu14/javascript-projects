// routes.js

// 1. Ubah 'require' menjadi 'import'
import { addNoteHandler } from './handler.js'; // Penting: Tambahkan '.js' di sini juga!

const routes = [
    {
        method: 'POST',
        path: '/notes',
        // 2. Perbaiki handler: 'handler' langsung merujuk ke fungsi, bukan arrow function kosong
        handler: addNoteHandler,
    },
];

// 3. Ubah 'module.exports' menjadi 'export default'
export default routes;