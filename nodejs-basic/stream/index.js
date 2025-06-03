const fs = require('fs');

const readableStream = fs.createReadStream('stream/input.txt', {
  highWaterMark: 15,
  encoding: 'utf-8'
});


const writeableStream = fs.createWriteStream('stream/output.txt');


readableStream.on('readable', () => {
    let chunk;
    try {
        while ((chunk = readableStream.read()) !== null) {
            console.log(`[${chunk}]`);
            writeableStream.write(chunk + '\n');
        }
    } catch (error) {
        console.log('Error Reading',error);
    }
});

readableStream.on('end', () => {
    console.log('Done');
    writeableStream.end();
});