const fs = require('fs');

const fileReadCallBack = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

fs.readFile('filesystem/notes.txt', 'utf-8', fileReadCallBack);