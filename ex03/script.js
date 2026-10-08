// State variable
let count = 0;

// Select DOM elements
const counterDisplay = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

// Function to update DOM text and dynamically alter text colors
function updateDisplay() {
    counterDisplay.textContent = count;
    
    // Green for positive, red for negative, default for zero
    if (count > 0) {
        counterDisplay.style.color = "green";
    } else if (count < 0) {
        counterDisplay.style.color = "red";
    } else {
        counterDisplay.style.color = "#333";
    }
}

// Event handler functions (passed as references)
function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function resetCounter() {
    count = 0;
    updateDisplay();
}

// Bind click events using addEventListener without inline HTML handlers
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", resetCounter);
