//Events Module
// Node.js has a built-in module, called "Events",
//where we can create-,fire-,and listen for- your own events.
//All objects that emit events are instances of the EventEmitter class
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("event",() =>{
    console.log("your name is pushpa");
});

event.on("event",() =>{
    console.log("your name is shiva");
});
event.on("event",() =>{
    console.log("your name is rajesh");
});
event.emit("event");

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');