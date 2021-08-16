const EventsEmitter = require('events');
const emitter = new EventsEmitter();
const fs = require('fs');
const path = require('path');

emitter.on('log', (message) => {
  //console.log(message)
  fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
    if (err) throw err
  })
});


function log(message) {
  emitter.emit('log', message)
}

module.exports = log;