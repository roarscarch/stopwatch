// Select the timer display element using the querySelector method
let timerDisplay = document.querySelector(".timerDisplay");

// Select the start, stop, and reset buttons using the getElementById method
// Note that the dot (.) should be removed when selecting elements by ID
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

// Initialize variables to hold the values of milliseconds, seconds, and minutes
let msec = 0;
let secs = 0;
let mins = 0;

// Initialize the timer ID to null
let timerId = null;

// Add an event listener to the start button that starts the timer
startBtn.addEventListener("click", function () {
  // If the timer ID is not null, clear the interval to prevent multiple timers from running at the same time
  if (timerId !== null) {
    clearInterval(timerId);
  }
  // Set the timer ID to the ID of the interval, which calls the startTimer function every 10 milliseconds
  timerId = setInterval(startTimer, 10);
});

// Add an event listener to the stop button that stops the timer
stopBtn.addEventListener("click", function () {
  // Clear the interval using the timer ID
  clearInterval(timerId);
});

// Add an event listener to the reset button that resets the timer
resetBtn.addEventListener("click", function () {
  // Clear the interval using the timer ID
  clearInterval(timerId);
  // Reset the values of milliseconds, seconds, and minutes
  msec = 0;
  secs = 0;
  mins = 0;
  // Update the timer display to "00 : 00 : 00"
  timerDisplay.innerHTML = `00 : 00 : 00`;
});

// Define the startTimer function, which increments the milliseconds, seconds, and minutes
function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }
  // Convert the milliseconds, seconds, and minutes to strings with leading zeros if necessary
  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  // Display the timer in the timer display element
  timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
