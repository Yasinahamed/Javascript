// Object with properties
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};

// Accessing object properties
console.log(car.brand); // Outputs: Toyota
console.log(car["model"]); // Outputs: Corolla

// Adding a new property
car.color = "red";
console.log(car.color); // Outputs: red

// Updating a property
car.year = 2021;
console.log(car.year); // Outputs: 2021

// Deleting a property
delete car.model;
console.log(car.model); // Outputs: undefined
