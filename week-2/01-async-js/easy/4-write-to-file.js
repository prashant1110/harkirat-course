// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

function writeFile() {
  const fs = require("fs");

  fs.writeFile("a.txt", "Content change", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("saved");
  });
}
