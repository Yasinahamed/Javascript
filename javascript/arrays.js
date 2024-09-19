// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing array elements
console.log(fruits[0]); // Outputs: Apple

// Adding elements to an array
fruits.push("Orange");
console.log(fruits); // Outputs: ["Apple", "Banana", "Cherry", "Orange"]

// Removing the last element
fruits.pop();
console.log(fruits); // Outputs: ["Apple", "Banana", "Cherry"]

// Iterating through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Outputs each fruit in the array
}

// Array methods
console.log(fruits.join(", ")); // Outputs: Apple, Banana, Cherry
console.log(fruits.includes("Banana")); // Outputs: true
