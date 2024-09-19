// Implicit coercion
console.log("5" + 2); // Outputs: 52 (string concatenation)
console.log("5" - 2); // Outputs: 3 (string converted to number)

// Explicit coercion
console.log(Number("123")); // Outputs: 123 (string to number)
console.log(String(123)); // Outputs: "123" (number to string)
console.log(Boolean(0)); // Outputs: false (0 is falsy)
