// const http = require("http");

// // const server = http.createServer((req, res) => {
// //     res.end("welcome")
// // })

// const server = http.createServer();
// server.on("request", (req, res) => {
//   res.end("welcome");
// });

// server.listen(5000);

// const { readFileSync, writeFileSync } = require("fs");
// console.log("start");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}, ${second}`,
//   { flag: "a" }
// );
// console.log("done with this task");
// console.log("starting the next one");

var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
  const fileStream = fs.createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
});
