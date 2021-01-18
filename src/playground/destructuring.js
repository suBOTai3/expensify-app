// const person = {
//     name: 'andries',
//     age: 40,
//     location : {
//         city: 'Cape Town',
//         temperature: 28
//     }
// }

// const {name, age} = person;
// console.log(`${name} is ${age}`)

// const { city, temperature: temp } = person.location;
// console.log(`Its ${temp} in ${city}`)


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName)

const address = ['2 Alf str', 'Cape Town', 'Western Cape', '8000'];

const [,, state] = address;

console.log(`You are in ${state}`)


const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75']

const [ itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)