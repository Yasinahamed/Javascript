// Changing text content
document.getElementById("myDiv").textContent = "New text content";

// Changing style
document.getElementById("myDiv").style.color = "blue";

// Creating and appending new elements
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.body.appendChild(newElement);
