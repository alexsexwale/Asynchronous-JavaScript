//// PART 3: Status Codes ///


// We will be working from https://jsonplaceholder.typicode.com

//We are creating an HTTP Request
const request = new XMLHttpRequest();

// Request change means that it is going through different phases of the request, there are 4 different phases
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
        // This is the data that we are getting back
        console.log(request, request.responseText);
    }
    else if(request.readyState === 4) {
        // This is the data that we are getting back
        console.log('could not fetch the data');
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

// Status: 404 - Bad status - cannot find the URL
// Status 200 - Successful request


// You can find the full list here

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
