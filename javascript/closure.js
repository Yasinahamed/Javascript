
function makeCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3
