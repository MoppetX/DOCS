const log = console.log;

//
//    Let's get Circle to extend a common Ellipse class.
//
//    This is known as the Circle-Ellipse Problem.
//
//    It is the same and the Rectangle/Square one, but
//    hey you may prever rounder shapes :)
//
class Ellipse {
  constructor(axisX, axisY) {
    this._axisX = axisX;
    this._axisY = axisY;
  }

  //
  //    Where all the common methods go
  //
  set axisX(length) {
    this._axisX = length;
  }

  set axisY(length) {
    this._axisY = length;
  }

  get area() {
    return (this._axisX / 2) * (this._axisY / 2) * Math.PI;
  }
}

//
//    Now Circle is a special form of Ellipse...
//
class Circle extends Ellipse {
  constructor(radius) {
    super(radius, radius);

    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get _area() {
    return Math.pow(this._radius) * Math.PI;
  }
}

//
//    Run some examples...
//

//
//    Ellipse
//
const ellipse1 = new Ellipse(5, 3);
log(ellipse1);
log(ellipse1.area);

let circle1;

circle1 = new Circle(5);
log(circle1);
log(circle1.area);

let circle2;

circle2 = new Circle(7);
log(circle2);
log(circle2.area);

//
//    And let's just log all out created shapes
//
const logShapes = (shapes) =>
  shapes.forEach((shape) => {
    shape.axisX = 7; // but during logging I change the axisX value
    log(shape.area); // now the circle1 is busted because it should be what circle2 is
  });

log("");
log("Logging & Testing");
log("");

let shapes;

shapes = [ellipse1, circle1];
logShapes(shapes);
