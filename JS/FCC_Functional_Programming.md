# Functional Programming

Like mathematics, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.

- Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation 
  -> always declare your dependencies explicitly
- Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data
- Functions have minimal side effects in the program

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called `first class` functions. In JavaScript, all functions are `first class` functions.

The functions that take a function as an argument, or return a function as a return value are called `higher order` functions.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a `lambda`.

#### imperative vs. declarative programming

the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a `for`loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.



`mutation`: changing or altering things; `side effect`: outcome
`pure function`: does not cause side effects

###Currying and Partial Application

The `arity` of a function is the number of arguments it requires. `Currying`a function means to convert a function of N `arity`into N functions of `arity`1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

```js
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // Returns 3
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the `curried` function in the example above:

```js
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```
Similarly, `partial application` can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

```js
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```

