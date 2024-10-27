// 1. Delayed Message with a Promise
// Write a function called delayedMessage that returns a promise. Inside the promise, use setTimeout to resolve the promise with the message "This message is delayed!" after a 2-second delay.
// When you call delayedMessage, use .then() to log the resolved message to the console.

const delayedMessage = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is message is delayed")
        }, 2000)
    })
}

delayedMessage()
    .then((message) => {
        console.log('Exercise 1:');
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })

// 2. Retrieve an Array with a Promise
// Write a function called getFruits that returns a promise. Inside the promise, use setTimeout to resolve with an array of fruit names like ["apple", "banana", "cherry"] after a 3-second delay.
// When you call getFruits, use .then() to iterate over each fruit and log each one to the console individually.

const getFruits = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["apple" , "banana" , "cherry"]);
        }, 3000);
    })
}


getFruits()
    .then((fruits) => {
        console.log('Exercise 2:');
        fruits.map((fruit) => {
            console.log(fruit);
        })
    })
    .catch((error) => {
        console.log(error);
    })

// 3. Random Delay Message
// Write a function called randomDelayMessage that returns a promise. Inside the promise, create a variable randomTime that generates a random delay between 1 to 5 seconds (1,000 to 5,000 ms).
// Use setTimeout to resolve the promise with the message "Resolved after a random delay!" after the randomTime delay.
// When you call randomDelayMessage, use .then() to log the resolved message to the console.
    
const randomDelayMessage = () => {

    let randomTime = Math.floor( Math.random() * 5000) + 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved after a random delay!")
        }, randomTime)
    })
}

randomDelayMessage()
    .then((message) => {
        console.log('Exercise 3:');
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })

// 4. Simulate an API Call with a Promise
// Write a function called fetchJoke that returns a promise. Inside the promise, use setTimeout to resolve the promise with a hardcoded joke (e.g., "Why don't scientists trust atoms? Because they make up everything!") after a 2-second delay.
// Call fetchJoke and use .then() to log the joke to the console. Include .catch() for potential error handling, even though it won't trigger in this example.


const fetchJoke = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Why don't scientists trust atoms? Because they make up everything!")
        }, 2000)
    })
}

fetchJoke()
    .then((joke) => {
        console.log("Exercise 4:")
        console.log(joke)
    })
    .catch((error) => {
        console.log(error)
    })

// 5. Promise Chain with Rejection
// Write three promises: promise1, promise2, and promise3. Set promise1 and promise2 to resolve with messages like "Promise 1 resolved!" and "Promise 2 resolved!", while promise3 should reject with an error message "Promise 3 rejected!".
// Chain these promises so that promise1 resolves first, then promise2, and finally promise3.
// Use .catch() at the end of the chain to handle the rejection from promise3 and log the error message to the console.

const promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 resolved!");
})


const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2 resolved!");;
})

const promise3 = new Promise((resolve, reject) => {
    reject("Promise 3 rejected");
})
    
promise1
    .then((message) => {
        console.log(message);
        return promise2;
    })
    .then((message) => {
        console.log(message);
        return promise3;
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise chain complete!");
    })
 