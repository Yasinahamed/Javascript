// Traditional function
function add(x, y) {
    return x + y;
}

// Arrow function
const addArrow = (x, y) => x + y;

console.log(add(2, 3)); // Outputs: 5
console.log(addArrow(2, 3)); // Outputs: 5

// Arrow function with a single parameter (parentheses are optional)
const square = x => x * x;
console.log(square(4)); // Outputs: 16
