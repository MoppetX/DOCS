# JS

## Bits



 **&& operator** 

has this "feature" where if both values aren't truthy, it returns the value of the falsy one:

```javascript
10 && true // 0
2true && 0 // 0
3false && true // false
4true && '' // ''
```

**for-await-of loop**

```js
(async () => {
  const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ]  
  
  for await (let p of promises) {
    const val = await p;
    console.log(val);
  }
})();
```

**Map**

```js
// instead of this
const dict = {
  'foo': 1,
  'bar': 2
}
// you can use this
const dict = new Map([
  ['foo', 1],
  ['bar', 2]
])

console.log(dict.get('foo'));
dict.set('foo', 2);
dict.has('baz');
dict.keys();
// To get an iterator object with the keys of the Map . This means that we can loop through them with the for...of loop or convert it to an array with the spread operator.


```

We can also use other primitive values as keys. If we use objects, we can’t get the value back when we look them up since the lookup is done with the `===` operator which returns `false` is 2 objects that don’t have the same reference even if they have the same content.


**Spread Operator**

```js
const arr = [1, 2, 3, 4, 5];
const add = (...args) => args.reduce((a, b) => a + b, 0);
console.log(add(...arr));
```



**Filter**

we can do it slighty more elegant, by just passing the `Boolean` constructor function, respectively the `Number` constructor function to `.filter`:

```js
data = data.filter( Number );
```

That would do the job in this instance, to generally remove any *falsy* value, we would call

```js
data = data.filter( Boolean );
```



**destructuring**

```
const person = {
  name: 'Fred',
  age: 26,
  work: {
    job: 'Blogger'
  }
};const {work: {job} } = person;
console.log(job); //prints: Blogger
```

**Note:** In the above code, the `work` reference isn’t destructured. Only the last nested property is assigned to the variable — in our case `job`. To get the `work` nested property as well, we need to do:

```js
const {work, work: {job} } = person;
```

Now consider if the `work` property wasn’t available at all. In that case, you’d need to write the above destructuring expression in the following way:

```js
const { work: { job = 'NA', salary = 'NA'} = {} } = person;
```

It’s also possible to skip items in case you don’t want to assign them to local variables. We use the comma operator for this:

```js
//skips the 2nd element
const [first,,third] = arr;
```

Using the comma operator for a huge array might be a tedious task. Instead, we can use the object destructuring like syntax — by accessing elements with an index, as shown below:

```js
const arr = ['a','b','c','d'];const {0: first, 3: fourth} = arr;
console.log(fourth) //d
const {0: first, 3: fourth, 9: tenth = 'z'} = arr;
```

You can also access nested array elements in a fashion similar to objects:

```js
const arr = ['a', [1, 2, 3]]
const [first, [one, two, three]] = arr;
```

Up until now, we’ve seen and used static keys for destructuring. But for objects with dynamic keys, you need to use computed properties.

Computed properties are specified in square brackets, as shown below:

```js
const person = {
  name: 'Fred',
  work: {
    job: 'Blogger'
  }
};let name = 'name'const { [name] : username } = person;
console.log(username); //Fred
```