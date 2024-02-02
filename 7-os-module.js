const { log } = require("console");
const os = require("os");
// console.log(os);

//Info about the current user.
const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds means the amount of time your computer has been running since it was last restarted.
console.log(`The minimum uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
