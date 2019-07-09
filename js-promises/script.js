const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.random() * 10;
        number < 5
            ? reject("Error!")
            : resolve("Success!")
    }, 1000);
});

promise.then(value => {
    console.log(value);
}).catch( error => {
    console.log(error);
})

const otherPromise = Promise.resolve("Promise!");

Promise.all([promise, otherPromise]).then( values => {
    console.log(values)
}).catch(errorValues => {
    console.log(errorValues);
});