# FreeCodeCamp

## Basic Data Structures



####arrays

**one-dimensional array** 

only has one level, or that it does not have any other arrays nested within it.



##### splice()

the first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.

`splice()` not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
```



##### slice()

`slice()`, rather than modifying an array, copies, or extracts, a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur **up to**, but **not including** the element at this index)



Iterate Through All an Array's Items Using For Loops