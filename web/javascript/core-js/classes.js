/* To complete the exercise, create 2 classes:
   Shape
     - Constructed with a colour parameter
     - Has a getColour function
     - Has a getArea function (this can return undefined)
   Square
     - Extends from shape
     - Constructed with 'colour' and 'sideLength'
     - Overrides getArea function to return correct result
*/

class Shape {
    constructor(colour){
        this.colour = colour;
    }
    getColour() {
        return this.colour;
    }

    getArea() {
        return undefined;
    }
}

class Square extends Shape {
    constructor(colour, sideLength) {
        super(colour);
        this.sideLength = sideLength;
    }

    getArea() {
        return this.sideLength * this.sideLength;
    }
}