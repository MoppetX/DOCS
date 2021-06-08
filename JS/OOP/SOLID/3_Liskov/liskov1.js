const log = console.log;

//
//   Ok! Let's create a Rectangle class!
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
//    Let's create one.
//
const rect1 = new Rectangle(5, 3);

log(rect1);
log(rect1.area()); // old style call

//
//    Change the width... new area... all good.
//
rect1.width = 7;

log(rect1);
log(rect1.area());
