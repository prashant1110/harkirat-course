// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter() {
  let count = 0;

  function incrementCounter() {
    count++;
    console.log(count); // Calls the callback with the updated count
    setTimeout(incrementCounter, 1000); // Schedule the next increment
  }

  incrementCounter(); // Start the counter
}