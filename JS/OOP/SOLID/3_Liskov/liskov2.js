const log = console.log;

//
//    Just the class we had before.
//
class Rectangle {
  constructor(width, height) {
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

  area() {
    return this._height * this._width;
  }
}

//
//    But a Square is like a specialised Rectangle,
//    so let's avoid duplicating some code and extend
//    Rectangle.
//
class Square extends Rectangle {

  constructor(side) {
    super(side, side); // pass the same value in twice
  }

   set width(width) {
    this._height = width;
    this._width = width;
  }

  set height(height) {
    this._height = height;
    this._width = height;
  }
}

//
//    Run some examples...
//

//
//    Rectangle as before
//
const rect1 = new Rectangle(5, 3);

log(rect1);
log(rect1.area());

rect1.width = 7;

log(rect1);
log(rect1.area());

//
//    Square
//
const square1 = new Square(5);

log(square1);
log(square1.area());

square1.width = 7;

log(square1);
log(square1.area());

//
//    But we should test these
//
const testShape = (shape) => {
  shape.width = 6;
  shape.height = 4;

  return shape.area() === 24;
};

log("Testing testing... 1 2 3");
log("");

log(testShape(square1));
log("__________");

//
//    But this test breaks! :(
//
//    What works for Rectangle, breaks for Square
//    and the Liskov Substitution Principle says we should be able
//    to supply Square to wherever we supply Rectangle.
//
//    """
//    As the name suggests, Liskov Substitution Principle prescribes
//    substitutability of a class by its subclass.
//
//    Broadly put, a class can be replaced by its subclass in
//    all practical usage scenarios.
//    """
//
//    How to fix this?
//
//    We make Rectangle and Square SIBLINGS.
//
//    We introduce the 'interface' Shape to bundle common methods.
//
//    See liskov3.js
//
log(testShape(square1));
