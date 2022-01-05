//// PART 10: Async & Await ////

// Async and Await allow us to chain promises together in a clean and more readable way

// Async and Await is not support in Internet Explorer but works on all modern browsers

// By including the word async we are now making it an asynchronous function
const getTodos = async () => {
    // The await key word stops it from assigning  a value to this variable/constant until the promise has been resolved
    const response = await fetch('todos/bob.json');
    // We need to include the await because json() is an asynchronous function so we have to wait until the data has been retrieved
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);
getTodos().then(data => console.log('resolved:', data));
console.log(3);
console.log(4);