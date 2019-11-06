/* To complete the exercise, fill in the TODO sections using == or === */

// 'one' should be true
const one = (0 == false);

// 'two' should be false
const two = (0 === false);

// 'three' should be false
const three = (3 === '3');

// 'four' should be true
const four = (3 == '3');

// 'five' should be true
const five = (false == '');

// 'six' should be false
const six = (false === '');

// 'seven' should be false
const seven = (null === undefined);

// 'eight' should be true
const eight = (null == undefined);

/*

null is an assignment value. It can be assigned to a variable as a representation of no value.
Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.
Unassigned variables are initialized by JavaScript with a default value of undefined. JavaScript never sets a value to null. That must be done programmatically.
 */