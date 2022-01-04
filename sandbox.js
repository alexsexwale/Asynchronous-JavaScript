//// PART 6: Callback Hell ///

// Callback Hell is when we nest callbacks in another callback which makes the format messy and difficult to maintain.

// We want to make a new request after the previous request is complete, and we do this by nesting the callback function

const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    // Request change means that it is going through different phases of the request, there are 4 different phases
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            // This method takes in JSON string and converts it into JavaScript Objects so we can then have an array of JavaScript objects
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState === 4) {
            // We are stating what the error is in the first arguement and the second arguement we are making the data undefined
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

console.log(1);
console.log(2);

// We are going to request the data one at a time instead of all of them at the same time
getTodos('todos/bob.json',(err, data) => {
    console.log(data);
    getTodos('todos/lucia.json',(err, data) => {
        console.log(data);
        getTodos('todos/xolani.json',(err, data) => {
            console.log(data);
        });
    });
});

// The above is not the best way of how to write call which is why we call it Callback hell. 
// This can be fixed using promises which we will cover in PART 7

console.log(3);
console.log(4);