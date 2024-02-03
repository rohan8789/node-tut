const { readFile, writeFile } = require("fs");

console.log("Start code and understand asynchronous nature.");

readFile("./8-path-module-method-test/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./8-path-module-method-test/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./8-path-module-method-test/result-async.txt",
      `This is resultant file ${first + "\n" + second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log("Done with this task");
      }
    );
  });
});
console.log("Starting the new task");

//This is our famous callback hell.

/*
    This means that the moment we start read or write task. We offload this task and continue with our code. so that way, if user1 comes and want to access this functionality, node just offload this task for user1, and your application can keep serving the other users.

    This code looks very off as it has fewer functionality and still has lots of callback hell. Alternative approaches are using "promises" and "async-await".

    We mostly be using all this functionality for reading from the data base or writing to the database.
*/
