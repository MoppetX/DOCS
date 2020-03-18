# JEST


```bash
$ **npm install --save-dev jest**

$ **npm i -D babel-jest @babel/core @babel/preset-env @babel/preset-typescript**

$ **npm i -D @testing-library/jest-dom**
```

```
**// babel.config.js**module.exports = {
presets: [
    [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current"
          }
        }
      ],
      "@babel/preset-typescript"
    ]
  ]
};
```

// package.json in scripts section...  we'll find a setup we like but for now...

```json
{
 "scripts": {
   **"test": "jest __tests__", 
   "test:watch": "jest --watch",
   "test:coverage": "jest --coverage",
   "test:live": "jest --watchAll", 
   "test:update": "NODE_ENV=test jest -u",**
 }
}
```
**// sum.js**function sum(a, b) {
  return a + b;
}
module.exports = sum;

**// sum.test.js**const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

**// OR __tests__/sum.js OR __tests__/sum.test.js**const sum = require('**../sum**');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});