//Theory is almost same as event loop in js. Refer notes.
//Example 01:
const { readFile } = require("fs");
console.log("Start this operation");

readFile("./8-path-module-method-test/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log("Starting the next task");
