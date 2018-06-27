// const events = require('events');

// let emitter = new events.EventEmitter();

const emitter = require('./modules/sendEmail');

emitter.on('emailEvent', message => {
  console.log(` Email: `, message);
});

emitter.emit('emailEvent', 'send activation email to user after registration');
