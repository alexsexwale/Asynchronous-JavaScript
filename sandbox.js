//// PART 2: Making our first HTTP Request ///


// We will be working from https://jsonplaceholder.typicode.com

//We are creating an HTTP Request
const request = new XMLHttpRequest();

// Request change means that it is going through different phases of the request, there are 4 different phases
request.addEventListener('readystatechange', () => {
    // This get us the state that the current request is in
    //console.log(request, request.readyState);
    if(request.readyState === 4) {
        // This is the data that we are getting back
        console.log(request.responseText);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
});

// GET allows us to fetch data. We are telling the browser where to get the data from by inserting the URL.
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //**This is the FIRST phase**//
// We are send the request in other words at this point we tell the server that we want to access you now
request.send(); //**This is the SECOND phase**//
// open up the browser and open the Network section so we can see the request

//(Other HTTP request are POST which sends data, PUT which allows us to update data and Delete which allows us to delete data)
