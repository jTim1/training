/*function sayHello(name){
    console.log('Hello ' + name); // global
}
sayHello('Tim');

console.log(module);*/
/*const logger = require('./logger');
logger.log('message');*/

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);
//console.log('Free Memory: ' + freeMemory);

// Template string
// ES6 / ES2015: ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else
    console.log('Result', files);
 });


const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

 // Register a listener
logger.on('messageLogged', (arg) => { //e, eventArg
    console.log('Listener called', arg);
});

logger.log('message');


// Raise : logging (data: message)


// http
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.ur === ''){
        res.writeJ(JSON.stringify[1, 2, 3]);
        res.end();
    }
});

/*server.on('connection', (socket) => {
    console.log('new connection ');
});*/

server.listen(3000);

console.log('Listening on port 3000...');

