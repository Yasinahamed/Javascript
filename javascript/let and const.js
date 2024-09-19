// Using let
let x = 10;
console.log(x); // Outputs: 10

x = 20; // Reassigning
console.log(x); // Outputs: 20

// Using const
const y = 30;
console.log(y); // Outputs: 30

// y = 40; // Error: Assignment to constant variable

// const with objects
const car = { brand: "Toyota", model: "Camry" };
car.model = "Corolla"; // You can change properties of a const object
console.log(car.model); // Outputs: Corolla
