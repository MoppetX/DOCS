# Redux 101



**Impure functions** can mutate things from outside of their scope or have side effects.



- An action is a plain object that contains all information necessary to do that action.
- An action creator is a function that creates an action object.
- A reducer is a pure function that takes state and action as parameters and returns the new state.

Object.keys → figure out what lives on an object



[**ao link**](https://www.mobile.de/finanzierung/antrag/ao/?id=133325&duration=60&downPayment=0&finalInstallment=false)

[**df link**](https://www.mobile.de/finanzierung/antrag/df/?id=133325&duration=60&downPayment=0&finalInstallment=false)

[**dfao link**](https://www.mobile.de/finanzierung/antrag/df/?id=133325&duration=60&downPayment=0&finalInstallment=false)

Redux Store functions, store.:

- dispatch
- subscribe
- getState
- replaceReducer



standard redux functions: 

``` js
const {
	createStore, 
	combineReducers, 
	compose, 
	bindActionCreators, 
	applyMiddleware
} = Redux;
```

- compose

  ```js
  const makeLouderAndBoldAndRepeat3Times = compose(makelouder, reapeatThreeTimes, embolden);
  ```

  

- bindActioncreators
  ```js
  const dispatchAdd = bindActioncreators({object full of actions}, store.dispatch)
  ```

	binds them to the same dispatch

