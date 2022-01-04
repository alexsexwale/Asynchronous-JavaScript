//// PART 5: Using JSON Data ///

// JSON stands for JavaScript Object Notation

// JSON data is string that looks like JavaScript Objects. Looks like an array of objects but we say they are strings

// JSON is used to send data between computers (from the server to the client)

// The difference between JSON and JavaScript objects is JSON has to use double quotations (NOT SINGLE) where JavaScript Objects we can use single quotes
//REFERENCE: https://www.w3schools.com/js/js_json_intro.asp

const getTodos = (callback) => {
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
    
    //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

    // We can access a JSON file in our file directory too
    request.open('GET', 'todos.json');
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