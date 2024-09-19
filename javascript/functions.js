// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Outputs: Hello, Alice!

// Function expression
const sum = function(a, b) {
    return a + b;
};
console.log(sum(5, 3)); // Outputs: 8

// Arrow function (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Outputs: 20
