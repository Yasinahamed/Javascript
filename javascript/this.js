const obj = {
    name: "Object",
    getName: function() {
        return this.name;
    }
};

console.log(obj.getName()); // Outputs: Object

function showThis() {
    console.log(this);
}
showThis(); // Outputs: Window (in browsers) or global object (in Node.js)

// `this` in arrow functions
const arrowFunction = () => {
    console.log(this);
};
arrowFunction(); // Outputs: Window (in browsers) or global object (in Node.js)
