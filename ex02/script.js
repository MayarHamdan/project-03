const title = document.getElementById("title");
const status = document.querySelector("#status");
const button = document.getElementById("button");

title.textContent = "Welcome to the Live DOM Tree!";
status.textContent = "Status: Active";

title.style.color = "blue";
status.style.color = "green";

title.classList.add("active");
status.classList.add("active");
