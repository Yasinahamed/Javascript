try {
    // Code that may throw an error
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    // Code to handle errors
    console.error("An error occurred:", error.message);
} finally {
    // Code that always runs
    console.log("Finally block always runs.");
}

// Function that throws an error
function riskyFunction() {
    throw new Error("This is a test error.");
}
