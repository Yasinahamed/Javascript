// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to test rejection
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});

// Using the promise
myPromise
    .then((message) => {
        console.log(message); // Outputs: Promise resolved successfully!
    })
    .catch((message) => {
        console.error(message); // Outputs: Promise rejected.
    });
