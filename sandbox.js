//// PART 9: Fetch API ////

// REFERENCE: https://www.w3schools.com/js/js_api_fetch.asp

// Fetch is the newer and better way of retrieving data over the server

// Please DON'T HATE ME!!!

// The reason you went through the other part is so you have a much greater understanding of what happens when you make these request 
// And understanding the history of where JavaScript started

// This is the easier way of retrieving data


// This will return a promise
fetch('todos/bob.json').then(response => {
    console.log('resolve', response);
    // This method get us the data and passes it so we can use it inside our code. This returns a promise which is asychronous so we cannot save this data in a variable, 
    // so we need to reuten it an create a .then method
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('resolve', err);
});

// Remember the three steps:
   // 1. We fetch the data
   // 2. We take the response
   // 3. We return response.json() that returns a promise so we can access the data in the .then function. We can also catch the error at the end.