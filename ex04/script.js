// State variables
let taskCount = 0;

// DOM Elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCountDisplay = document.getElementById("task-count");

// Update task counter display
function updateCounter() {
    taskCountDisplay.textContent = taskCount;
}

// Function to add a new task
function addTask() {
    const taskTextValue = taskInput.value.trim();
    
    // Validate input is not empty
    if (taskTextValue === "") {
        return;
    }

    // Create dynamic li element using document.createElement
    const li = document.createElement("li");

    // Span for task text (to allow clicking/marking as completed)
    const span = document.createElement("span");
    span.textContent = taskTextValue;
    span.className = "task-text";
    
    // Allow marking tasks as completed on click
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    
    // Handle task deletion and update counter
    deleteBtn.addEventListener("click", function() {
        li.remove();
        taskCount--;
        updateCounter();
    });

    // Append elements together
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Increment counter and update
    taskCount++;
    updateCounter();

    // Clear input field
    taskInput.value = "";
}

// Event listeners for adding tasks (button click & Enter key press)
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
