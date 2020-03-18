# FreeCodeCamp

##JS



###arrays

- `.pop()`is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, `.pop()`removes the last element from an array and **returns that element**.

  ```javascript
  var threeArr = [1, 4, 6];
  var oneDown = threeArr.pop();
  console.log(oneDown); // Returns 6
  ```


- `.unshift()`works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()`adds the element at the beginning of the array.
- `concat`

####comparison operators

- Like the equality operator, greater than operator will **convert data types** of values while comparing.



###OBJECTS

- We can delete properties from objects like this:

  `delete ourDog.bark;`
  
- pretty printing JSON (the number at the end is the indentation)
	`console.log(JSON.stringify(object, null, 2));`
  
- Prevent Object Mutation
  `Object.freeze(obj);`

##### bracket notation
```js
let userData = FCC_User['followers']
// userData equals 572
```
Notice that with bracket notation, we enclosed `followers`in quotes. This is because the brackets actually allow us to pass a variable in to be evaluated as a property name. Had we passed `followers` in without the quotes, the JavaScript engine would have attempted to evaluate it as a variable, and a `ReferenceError: followers is not defined` would have been thrown.

##### Check if an Object has a Property

JavaScript provides us with two different ways to do this. One uses the `hasOwnProperty()` method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:
```js
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
```

##### for...in Statement
Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:
```js
for (let user in users) {
  console.log(user);
};
```

 ####Constructors

follow a few conventions:

- `Constructors`are defined with a capitalized name to distinguish them from other functions that are not `constructors`.
- `Constructors`use the keyword `this`to set properties of the object they will create. Inside the `constructor`, `this`refers to the new object it will create.
- `Constructors`define properties and behaviors instead of returning a value as other functions might.

```js
function Bird(name) {
  this.name = name; //own property
}
Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

```

Notice that the `new`operator is used when calling a constructor. This tells JavaScript to create a new `instance`of `Bird`called `blueBird`. Without the `new` operator, `this` inside the constructor would not point to the newly created object, giving unexpected results.

#####instanceof operator
JavaScript gives a convenient way to compare an object to a constructor with the instanceof operator. It returns true or false based on whether or not that object was created with the constructor. 
`myHouse instanceof House;` -> TRUE

####Prototype Properties
A prototype is an object that is shared among ALL instances of an Object. `Own` properties are defined directly on the object instance itself. Prototype properties are defined on the prototype.
`Bird.prototype.numLegs = 2;`

Here is how you add `duck’s` `own`properties to the array `ownProps` and `prototype` properties to the array `prototypeProps`:

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
```

##### set the protoype

by setting the `prototype` to a new object that already contains the properties. This way, the properties are added all at once. Whenever a prototype is manually set to a new object, remember to define the __`constructor` property__.

```js
Bird.prototype = {
  constructor: Bird, // define the constructor property!!!
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

##### isPrototypeOf
duck inherits its prototype from the Bird constructor function. You can show this relationship with the `isPrototypeOf` method:
```js
Bird.prototype.isPrototypeOf(duck); // returns true
```

####Inherit Behaviors from a Supertype

```js
let animal = Object.create(Animal.prototype);

Bird.prototype = Object.create(Animal.prototype);
// set the prototype of the subtype to be an instance of Animal
```

`Object.create(obj)` creates a new object, and sets `obj`as the new object's `prototype`. Recall that the `prototype` is like the "recipe" for creating an object. By setting the `prototype` of `animal ` to be `Animal's` `prototype`, you are effectively giving the `animal`instance the same "recipe" as any other instance of `Animal`.

When an object inherits its `prototype`from another object, it also inherits the `supertype`'s constructor property.

But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object:
```js
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
```

#### Mixin
Behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

#### IIFE

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

An `immediately invoked function expression`(`IIFE`) is often used to group related functionality into a single object or `module`. 

```js
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked
```

The advantage of the `module` pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:
```js
motionModule.glideMixin(duck);
duck.glide();
```



###FUNCTIONS

- The `parseInt()`function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

- multiple `conditional operators`:
```js
  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
   }
```
#####return

- A function can include the `return`statement but it does not have to. In the case that the function doesn't have a `return`statement, when you call it, the function processes the inner code but the returned value is `undefined`.

##### implicitly return an object

wrap it in parentheses 

```js
const winners = contestants.map((contestant, index) => 
  ({
    name: contestant,
    place: index;
  })
);
```



##### defining functions within objects

With ES6, You can remove the function keyword and colon altogether when defining functions in objects. This is like writing `sayHello: function() …`, it is NOT an arrow funciton! Here's an example of this syntax:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

#### Strict

- Note the `"use strict"`. This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

#### const

- `const`has all the awesome features that `let`has, with the added bonus that variables declared using `const`are read-only. 

####rest operator

In order to help us create more flexible functions, ES6 introduces the rest operator for function parameters. With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
```js
function howMany(...args) {
 return "You have passed " + args.length + " arguments.";
 }
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); 
// You have passed 4 arguments.
```
The rest operator eliminates the need to check the `args` array and allows us to apply `map()`, `filter()`and `reduce()` on the parameters array.

####spread operator

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected. The spread operator makes this syntax much better to read and maintain.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```
`...arr` returns an unpacked array. In other words, it *spreads* the array.

####arguments

The `arguments` object is not an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). It is similar, but does not have any `Array` properties except [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length). Convert `arguments` to a real Array:
```js
var args = [].slice.call(arguments);
var args = Array.from(arguments);
var args = [...arguments];
```



###Destructuring Assignment

Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables. Consider the following ES5 code:
```
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```
Here's the same assignment statement with ES6 destructuring syntax:
```
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
```
If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that freedom as well.
```js
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
```
You may read it as "get the field x and copy the value into a," and so on.

We can similarly destructure *nested* objects into variables.
Consider the following code:

```js
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
```
another example for nested destructuring:
```
let { twitter, facebook } = person.links.social;
```



#####Assign Variables from Arrays

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:
```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```
The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```



##### with the Rest Operator to Reassign Array Elements

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:
```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```
Variables `a` and `b` take the first and second values from the array. After that, because of rest operator's presence, `arr` gets rest of the values in the form of an array.

The rest element only works correctly as the last variable in the list. As in, you cannot use the rest operator to catch a subarray that leaves out last element of the original array.



#####simple fields for object leteral declarations
ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood.

```JS
const getMousePosition = (x, y) => ({ x, y });
```





#### Constructor Functions


ES6 provides a new syntax to help create objects, using the keyword class.

This is to be noted, that the class syntax is just a syntax, and not a full-fledged class based implementation of object oriented paradigm, unlike in languages like Java, or Python, or Ruby etc.

In ES5, we usually define a constructor function, and use the new keyword to instantiate an object.
```
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```
The class syntax simply replaces the constructor function creation:
```js
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```
Notice that the class keyword declares a new function, and a constructor was added, which would be invoked when new is called - to create a new object.



#### import and require

In the past, the function `require()` would be used to import the functions and code in external files and modules. While handy, this presents a problem: some files and modules are rather large, and you may only need certain code from those external resources.

ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.

```js
import { function } from "file_path_goes_here"
// We can also import variables the same way!
```

##### export

The following is what we refer to as a named export. With this, we can import any code we export into another file with the import syntax you learned in the last lesson. Here's an example:
```js
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.
```
Alternatively, if you would like to compact all your export statements into one line, you can take this approach:
```js
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
```
Either approach is perfectly acceptable.



#####import all

Suppose you have a file that you wish to import all of its contents into the current file. This can be done with the import * syntax.

Here's an example where the contents of a file named "math_functions" are imported into a file in the same directory:
```js
import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```
You may use any name following the import * as portion of the statement. In order to utilize this method, it requires an object that receives the imported values. From here, you will use the dot notation to call your imported values.



##### export default

Besides a *named export*, there is another export syntax you need to know, known as *export default*. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Here is a quick example of export default:
```js
export default function add(x,y) {
  return x + y;
}
```
Note: Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const


####FUNCTIONS
```js
.replace
.reverse
.repeat
.concat
.every 
// works with arrays to check if EVERY element passes a particular test
.trim
.some

Object.fromEntries() 
// method transforms a list of key-value pairs into an object.

Object.getOwnPropertyNames() 
// returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

.hasOwnProperty() 
// returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

Object.values() 
// returns an array of a given object's own enumerable property values,
```

#### String functions
```js
.startsWith('string') // not case sensitive

.endsWith('string', 10) 
// checks for a string at the end of the first 10 letters

.includes('string') // not case sensitive

string.repeat(10) // good for spaces/left pads
```



### Module

```js
<script type="module" src="filename.js"></script>
```
A script that uses this `module` type can now use the `import` and `export` features you will learn about in the upcoming challenges.



### Promises

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. `Promise` is a constructor function, so you need to use the `new` keyword to create one. It takes a function, as its argument, with two parameters - `resolve` and `reject`. These are methods used to determine the outcome of the promise. The syntax looks like this:

```js
const myPromise = new Promise((resolve, reject) => {
});
```




