(function() {
    let message = "This is an IIFE";
    console.log(message); // Outputs: This is an IIFE
})();

// Trying to access 'message' outside IIFE will cause an error
// console.log(message); // Uncaught ReferenceError: message is not defined
