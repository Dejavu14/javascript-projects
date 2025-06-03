// const http = require('http');
// const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
// const port = 3000;
// const requestHandler = (request, response) => {
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain');
//   response.end('Hello,World Yuhuuu!\n');
// };
// const server = http.createServer(requestHandler);
// server.listen(port, hostname, () => {
//   console.log(`Server berjalan pada http://${hostname}:${port}/`);
// });



// const memoryInformation = process.memoryUsage();
// console.log(`Memory Usage:`);

// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello, ${firstName} ${lastName}!`);

// const coffee = require("./lib/coffee");
// console.log(coffee);

const {firstName, lastName} = require("../nodejs-basic/lib/user");

console.log(firstName);
console.log(lastName);