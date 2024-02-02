const path = require("path");
// console.log(path);
console.log(path.sep);

//returns whole file path as string
let filePath = path.join("/8-path-module-method-test", "test-join", "file.txt");
console.log(filePath);

//return file name if you provide file path
let base = path.basename(filePath);
console.log(base + "\n");

//returns absolute path from base folder to innermost folder.
let absolute = path.resolve(__dirname, "8-path-module-method-test", "test-join", "file.txt");
console.log(absolute);
