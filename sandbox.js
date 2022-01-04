//// PART 7: Promises ///

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation

// A promise will have one of two outcomes
  // 1. It will be resolved meaning we get the data we want
  // 2. It will be rejected meaning we get an error

// REFERENCE: https://www.w3schools.com/js/js_promise.asp

const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        // Request change means that it is going through different phases of the request, there are 4 different phases
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4) {
                reject('error getting resource')
            }
        });
        request.open('GET', resource);
        request.send();
    });
};

console.log(1);
console.log(2);

// The above is not the best way of how to write call which is why we call it Callback hell. 
// This can be fixed using promises which we will cover in PART 7

console.log(3);
console.log(4);

getTodos('todos/bob.json').then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});


// Promise Example

const getImaginaryData = () => {
    //resolve and rejected are functions that are built into the promise API
    return new Promise((resolve, reject) => {
        // fetch data
        //resolve('imaginary data');
        //reject('imaginary error');
    });
};
// The first callback function only executes when the request is successful (uncomment resolve and comment reject to see the error)
getImaginaryData().then((data) => {
    console.log(data);
}, (err) => {
    // The second callback function only executes when the request is unsuccessful (uncomment reject and comment resolve to see the error)
    console.log(err);
});


// Here is a better way to write the above code
getImaginaryData().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});