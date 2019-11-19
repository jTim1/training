function test() {
  for (var i = 0; i < 10; i++) {
    const name = 'dale';
    let output = `${name} ${i}`; // the same as output = name + ' ' + i;
    console.log(output);

   // name = 'steve'; // TypeError: Assignment to constant variable.
    output = `${name} ${i}`; 
    console.log(output);
  }

  console.log(i);
  //console.log(name); // ReferenceError: name is not defined
  console.log(output);
}