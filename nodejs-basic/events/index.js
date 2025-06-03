// [ TO DO 1 ]Buat atau import variabel EventEmitter dari modul 'events'
const EventEmitter = require('events'); 


const birthdayEventListener = (name) => {
    console.log(`Happy Birthday, ${name}!`);
};

// TO DO 2
const myEmitter = new EventEmitter();

// TO DO 3
myEmitter.on('birthdayz', birthdayEventListener);

// TO DO 4
myEmitter.emit('birthdayz', 'Dyroth');



