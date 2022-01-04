//// PART 8: Chaining Promises ////

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


// No longer get callback hell
getTodos('todos/bob.json').then(data => {
    console.log('promise 1 resolved:', data);
    // The parent of the function returns a promise, which will allow us to use a .then method again
    return getTodos('todos/lucia.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    // The parent of the function returns a promise, which will allow us to use a .then method again
    return getTodos('todos/xolani.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});