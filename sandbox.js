//// PART 4: Callback Function ///

// A callback is a function passed as an argument to another function.

//REFERENCE: https://www.w3schools.com/js/js_callback.asp

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    // Request change means that it is going through different phases of the request, there are 4 different phases
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            
            callback(undefined, request.responseText);
        }
        else if(request.readyState === 4) {
            // We are stating what the error is in the first arguement and the second arguement we are making the data undefined
            callback('could not fetch data', undefined);
        }
    });
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

console.log(1);
console.log(2);

// We are creating the callback function here 
getTodos((err, data) => {
    console.log('callback executed');
    // If we have an error output the error
    if(err)
      console.log(err);
    // Otherwise output the data
    else
      console.log(data);
    
});

console.log(3);
console.log(4);