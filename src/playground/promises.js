const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');

        // resolve({
        //     name: 'Matt',
        //     age: 49
        // });

        reject('Something went wrong');

    }, 1500)
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('does this run?');
}).catch((error) => {
    console.log('error: ', error);
});

console.log('After');