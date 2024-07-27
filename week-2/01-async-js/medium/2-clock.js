// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
  setInterval(() => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let test = hour > 12 ? "PM" : "AM";
    let time = hour + ":" + minute + ":" + second + test;
    console.log(time);
  }, 1000);

  // setTimeout(clock,1000)
}
