// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counterInterval() {
  let count = 0;
  setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
}

// (Hint: setTimeout);
