// // Events
// const fs = require("fs");
// let rs = fs.createReadStream("./mynewfile3.txt");
// rs.on("open", function () {
//   console.log("File is Opened");
// });

// Events Module
const events = require("events");
const eventEmitter = new events.EventEmitter();

let myEventHandler = () => {
  console.log("I hear a Scream!");
};

eventEmitter.on("Scream", myEventHandler);

eventEmitter.emit("Scream");
