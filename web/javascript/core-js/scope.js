/*
  Create a SimpleCalculator class
  It should have a function delayedSquare, which waits two seconds and then squares an input value
  Call this function with a value of 6 on a SimpleCalculator instance
  Assign the squared value to a globally-accessible variable called 'finalResult'
  'finalResult' should be set to null initially
*/

class SimpleCalculator {
    delayedSquare(value) {
        setTimeout( () => {
            finalResult =  value * value;
        }, 2000);
    }
}
let finalResult = null;
const calculator = new SimpleCalculator();
calculator.delayedSquare(6);


class SimpleCalculator2
{
  delayedSquare(input, callback)
  {
    setTimeout(() => callback(input * input), 2000);
  }
}

var finalResult2 = null;

const calc = new SimpleCalculator2();
calc.delayedSquare(6, x => finalResult2 = x);
