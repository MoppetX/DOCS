const log = console.log;

//
//    Let's get Rectangle and Square to extend
//    a common class.
//
class Shape {
  constructor() {
    this._color = "red"; // default
  }

  //
  //    Where all the common methods go
  //
  set color(color) {
    this._color = color;
  }

  display(area) {
    const whatAmI = this.constructor.name;

    log(`I am a ${whatAmI} and my area is ${area}`);
  }
}

//
//    Now Rectangle only has what it needs.
//
class Rectangle extends Shape {
  constructor(width, height) {
    super();

    this._width = width;
    this._height = height;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
  }

  get area() {
    return this._width * this._height;
  }
}

//
//    And Square too.
//
class Square extends Shape {
  constructor(length) {
    super();

    this._length = length;
  }

  set length(length) {
    this._length = length;
  }

  get area() {
    return this._length * this._length;
  }
}

//
//    Run some examples...
//

//
//    Rectangles
//
const rect1 = new Rectangle(5, 3);
log(rect1);
log(rect1.area);

rect1.width = 7;
log(rect1);
log(rect1.area);

//
//    Squares
//
const square1 = new Square(5);
log(square1);
log(square1.area);

let square2;

square2 = new Square(4);
log(square2);
log(square2.area);

square2.length = 7;
log(square2);
log(square2.area);

//
//    Now we can test any shape
//
function _testShapes(shapes) {
  shapes.forEach((shape) => {
    switch (shape.constructor.name) {
      case "Square":
        shape.length = 3;
      case "Rectangle":
        shape.width = 7;
        shape.height = 2;
    }

    let area = shape.area;
    shape.display(area);
  });
}

//
//    Open/Closed Principle!
//
function testShapes(shapes) {
  shapes.forEach((shape) => {
    // log(shape.constructor.name);

    shape.display(shape.area);

    log("");
  });
}

//
//    And let's just log all out created shapes
//
const logShapes = (shapes) =>
  shapes.forEach((shape) => shape.display(shape.area));

log("");
log("Logging & Testing");
log("");

let shapes;

shapes = [rect1, square1, square2];
logShapes(shapes);

shapes = [rect1, square1];
testShapes(shapes);

//
//    Triangles...
//
class IsoscelesTriangle extends Shape {
  constructor(base, height) {
    super();

    this._base = base;
    this._height = height;
  }

  set base(base) {
    this._base = base;
  }

  get area() {
    return (this._base / 2) * this._height;
  }
}

//
//    And testShapes() is perfectly happy!
//
let triangle1;
triangle1 = new IsoscelesTriangle(4, 7);

shapes = [triangle1];
testShapes(shapes);

triangle1.base = 10;
testShapes(shapes);
