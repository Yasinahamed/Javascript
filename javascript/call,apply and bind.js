// callApplyBind.js

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Using call
console.log(person.fullName.call({ firstName: "Jane", lastName: "Smith" })); // Outputs: Jane Smith

// Using apply
const numbers = [1, 2, 3];
function add(a, b, c) {
    return a + b + c;
}
console.log(add.apply(null, numbers)); // Outputs: 6

// Using bind
const boundFullName = person.fullName.bind({ firstName: "Alice", lastName: "Johnson" });
console.log(boundFullName()); // Outputs: Alice Johnson
