// const welcome = (name) => {
//     console.log(`welcome ${name}`);
// }

// welcome("John");


const initialMemory = process.memoryUsage().heapUsed;
const yourName = process.argv[2] || 'Guest';
const environment = process.env.NODE_ENV || 'development';

for (let i = 0; i < 10000; i++) {
    
}


const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai: ${yourName}!`);
console.log(`Mode Environtment: ${environment}!`);
console.log(`Penggunaan Memori dari : ${initialMemory} naik ke : ${currentMemoryUsage} bytes.`);
