console.log(myVar); // Output: undefined (due to hoisting)
var myVar = "Hoisted variable";

hoistedFunction(); // Output: Function is hoisted
function hoistedFunction() {
    console.log("Function is hoisted");
}

let anotherVar = "Let variable";
