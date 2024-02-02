const { readFileSync, writeFileSync } = require("fs");
console.log("Start code and understand synchronous nature.");
const first = readFileSync(
  "./8-path-module-method-test/first.txt",
  "utf-8"
);
const second = readFileSync(
  "./8-path-module-method-test/second.txt",
  "utf-8"
);
// console.log(`The result is: ${first + second}`);

writeFileSync(
  "./8-path-module-method-test/resultSync",
  `This is result of firstSync & secondSync: ${first + second}`,
  { flag: "a" }
);

//Flag is used to append to the file It is optional.

console.log("Done with this task");
console.log("Starting the new task");



/*

  Here, The code runs synchronously. First it will print start the code then, it will read and write the file. Once, it is done with reading and writing the file. It will print "done with this task" and "starting the new task."

  Suppose reading and writing as a very time consuming task. Imagine we have 10 users using our application all the time. If one user does one or both task i.e, read or write. and they take very long time which means that node will not be able to serve other users and this is a big issue.

  Notice, javascript is reading the code synchronously which means your code runs line by line. and if your read/write takes a long time means your application is down. Hence, No other user can use this application because one of the user is reading files or writing a new file
  .
*/