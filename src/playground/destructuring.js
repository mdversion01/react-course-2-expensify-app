// const person = {
//     name: 'Matt',
//     age: 50,
//     location: {
//         city: 'Reston',
//         temp: 95
//     }
// }

// ES6 Deconstructing an object

// // const name = person.name;
// // const age = person.age;

// // you can set default for the name if there is one in the object above.
// // you can also change the name of the object 'name' to the somthing else like 'firstName'

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {temp: temperature, city} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array destructing
//

// const address = ['1234 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147'];

// // You can skip or not use items in the array by putting in the comma for it's position or leaving it off on the end.
// // You can also set defaults, see state = 'New York' below.
// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, ,md] = item;

console.log(`A medium ${itemName} costs ${md}.`);