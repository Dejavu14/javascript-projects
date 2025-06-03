const fs = require('fs');

const readableStream = fs.createReadStream('ReadableStream/article.txt', {
  highWaterMark: 16
});


readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        
    }
});


readableStream.on('end', () => {
    console.log('Done');
});