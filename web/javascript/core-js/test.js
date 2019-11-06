const arr = ['one', 'two'];
const arr2 = new Array();
arr2.push('one');
arr2.push('two');
console.log(arr2);

const person = {
    lastName : 'amach',
    firstName : 'fatima',
    gender : 'female'
};

const fullName = person.lastName + '' + person['firstName'];

const result = function sum(a, b) {
    return a + b;
};

function sumWithCallBack(a, b, callback){
    const sum = a+b;
    callback(sum);
} //higher order function, a function takes another function

const printValue = function(value) {
  console.log(value);
};

sumWithCallBack(1, 2, printValue);

sumWithCallBack(1, 2, function(value) {
 console.log(value);
});

sumWithCallBack(1, 2, (value) => console.log(value)); //arrow function
sumWithCallBack(1, 2, value => value);


const numbers = [1, -1, 2, 3];
/*let sum = 0;

for(let n of numbers){
    sum += n;
}*/

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

