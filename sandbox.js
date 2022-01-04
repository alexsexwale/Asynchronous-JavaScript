/// PART 1: How Asynchronous works ///
console.log(1);
console.log(2);

// We are waiting 2 seconds before the function executes
setTimeout(() => {
    console.log('callback function executed')
}, 2000);

console.log(3);
console.log(4);

