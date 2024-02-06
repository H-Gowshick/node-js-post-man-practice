const { existsSync } = require("fs");

const fs = require("fs");

if (fs.existsSync("./text")) {
  fs.rmdir("./text", (err) => {
    if (err) throw err;
    console.log("removed");
  });
}
