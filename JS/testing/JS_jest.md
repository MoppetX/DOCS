# JS

## Testing with Kent C Dodds

`npm t`
same as `npm test`



**building our own very simple testing framework**

```js
function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`𐄂 ${title}`)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !=== expected) {
        throw new Error (`${actual} is not equal to ${expected}`)
      }
    }
  }
}

```




**Jest.fn()**
provides extra functionality, like keeping track of arguments passed

```js
test('returns winner', () => {
	const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)
  // jest will provide a bunch of useful properties, some used below
  
  const winner = thumbWar('Kent', 'Ken')
  expect(winner).toBe('Kent')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('Kent', 'Ken')
  // this is doing the same as above
  expect(utils.getWinner).toHaveBeenCalledWith(
  1,
  'Kent', 
  'Ken',
  )
  expect(utils.getWinner).toHaveBeenCalledWith(
   1,
  'Kent', 
  'Ken',
  )
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent', 'Ken'],
    ['Kent', 'Ken']
  ])
  
  // cleanup
  utils.getWinner = originalGetWinner
});
```



**Our faux implementation of jest.fn()**

```js
function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}
```

TODO : don't understand how mockFn.mock works? 



**jest.spyOn()**

```js
const utils = require('../utils')

test('returns winner', () => {
	jest.spyOn(utils, 'getWinner')
  // we no longer need to keep track of the original getWinner
  // spyOn provides a new method:
  utils.getWinner.mockImplementation = ((p1, p2) => p1)

  // ...

	// cleanup
  utils.getWinner.mockRestore ()
}
```



### JEST

Jest is simulating a browser environment in node, using a module called JS DOM

```js
// this will simulate a window object in node environment
console.log(window)
```



**Import CSS files with moduleNameMapper**

when you want to simply mock non-JS modules. ModuleNameMapper will create a mock version (change the .-ending) of the module so it can be **stubbed**



*In jest.config.js*

```javascript
module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
    // regex
		'\\.css$': require.resolve('./test/style-mock.js'),
	},
}
```

Test / *style-mock.js*:
`module.exports = {}`

