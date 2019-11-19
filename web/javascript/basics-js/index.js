console.log('Hello World');
const firstName = 'Tim';
console.log(firstName);
const lastName = 'Tim';

// reference types
// object
const person = {
    firstName: 'amach',
    lastName: 'fatima'
};

person.firstName = 'coanet';
person['firstName'] = 'mary';

console.log(person.firstName);

// array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';

console.log(selectedColors);

// function
function greet(name){
    console.log('Hello ' + name);
}

greet('Tim');

function square(number) {
    return number * number;
}

const result = square(2);
console.log(result);
