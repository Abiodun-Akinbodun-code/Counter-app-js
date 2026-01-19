// STATE: the current value of the counter
let count = 0;

// DOM elements
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// EVENT LISTENERS
increaseBtn.addEventListener("click", () => {
  count++; // update state
  countDisplay.textContent = count; // update UI
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
