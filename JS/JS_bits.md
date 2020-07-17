# JS

## Bits



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

```
const {work, work: {job} } = person;
```

Now consider if the `work` property wasn’t available at all. In that case, you’d need to write the above destructuring expression in the following way:

```
const { work: { job = 'NA', salary = 'NA'} = {} } = person;
```