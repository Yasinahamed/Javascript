// Advanced Functions - Closures
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

// Advanced Functions - Currying
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // Outputs: 10
console.log(multiplyBy2(10)); // Outputs: 20

// Advanced Functions - Partial Application
function multiply(a, b, c) {
    return a * b * c;
}

function partialMultiply(a) {
    return function(b, c) {
        return multiply(a, b, c);
    };
}

const m2 = partialMultiply(2);
console.log(m2(3, 4)); // Outputs: 24


// Advanced Functions - Function Composition
function add(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const addThenSquare = compose(square, add);
console.log(addThenSquare(2)); // Outputs: 9 (since (2 + 1)² = 9)

// Advanced Functions - Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

const memoizedFib = memoize(fib);
console.log(memoizedFib(40)); 

