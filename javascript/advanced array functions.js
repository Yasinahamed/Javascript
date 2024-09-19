
// Original array
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

// Filtering even numbers
const mixedNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4, 6]

// Reducing an array to the sum of its elements
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Outputs: 15

// Logging each element to the console
const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));
// Outputs: 
// red
// green
// blue


// Finding the first number greater than 3
const numbersArray = [1, 2, 3, 4, 5];
const firstGreaterThanThree = numbersArray.find(num => num > 3);
console.log(firstGreaterThanThree); // Outputs: 4
