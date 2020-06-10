# React

## State



**Dan Abramov, should I keep something in react component state?**
-> only use state that when a variable changes, you want to trigger a re-render

```js
function shouldIKeepSomethingInReactState(){
  if (canIcalcualteItFromProps()) {
    // dont't duplicate data from props in state.
    // Calculate what you can in render() method.
    return false;
  }
  if (!amIUsingItInRenderMethod()) {
    // don't keep it in state of you don't use it
    // for rendering. E.g., API subscriptions are 
    // better off as custom private fields or
    // variables in external modules
    return false;
  }
  // use react state for this!
  return true;
}
```

**Don't use this.state for derivations of props.** 
Constructor runs at the beginning, a change won't trigger a re-render. Instead, derive computed properties directly from the props themselves. put it in the render block or break it up into helper functions

`Get` lets you use a getter method WITHOUT the parentheses!

**Don't use this.state for things you are not going to render**

_________________

## Hooks



### useState

- also asynchronous

```js
const Counter =() => {
 
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  // this will have the counter stuck at 1
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // this will increase count to 3
  const increment = () => {
    setCount(c => c + 1 );
    setCount(c => c + 1 );
    setCount(c => c + 1 );
  }
  
  return (
  	// ...
  )
};

```

### useEffect

- if you don't give it any dependencies, it will run on every render
- when it sets any state, the state change will trigger a render, which triggers useEffect, which sets change,  and so on...
- generally speaking, you don't want an empty dependencies array

```js
const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)[value];
    return initialState;
  };
  
  const [value, setValue] = useState(get());
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({value}));
  });
  
  return [value, setValue];
};
```

### useReducer

comparing objects is tricky - if you mutate its contents/properties, it is still pointing to the same reference in memory -> will seem like the same object

so we return a brand new array, instead of pushing sth onto an existing array or adding a key to an existing object 

```js
import initialState from './initialState';

const Application = () => {
  const [grudges, setGrudges] = useState(initialState)
  
  const addGrudge = grudge => {
    grudge.id = id();
    grudge.forgiven = false;
    // returns new array with all elements from grudges 
		// spread out and the new grudge added onto front
    // returns a vrand new array with all the contents 
    // of the old one
    setGrudges([grudge, ...grudges]);
  };
  
  const toggleForgiveness = id => {
    setGrudges(
    	grudges.map(grudge => {
        if (grudge.is !== id) return grudge;
        // if we have found the item we were looking for.
        // return a NEW version of it
        return {...grudge, forgiven: !grudge.forgiven};
      })
    );
  };
};
```

a **reducer** is a function that takes in 2 arguments:

1. current state
2. an action (something that happened)

with these two pieces of data it figures out the NEW state of the world

The goal is to divorce the management of our state from the components that are rendering the state

makes unit testing easier by producing consistent output without having to mount all components

```jsx
import initialState from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

// state in this case are all the grudges
const reducer = (state, action) => {
  if (action.type === GRUDGE_ADD) {
    return [action.payload, ...state];
  }
  if (action.type === GRUDGE_FORGIVE) {
     return state.map(grudge => {
        if (grudge.id !== action.payload.id) return grudge;
        return {...grudge, forgiven: !grudge.forgiven};
      }
  }
  return state;
};

const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState);
  
  const addGrudge = ({person, reason}) => {
		dispatch({
      type: GRUDGE_ADD,
      payload: {
        person,
        reason,
        forgiven: false,
        id: id(),
      }
    });
  };
  
  const toggleForgiveness = id => {
    dispatch({
      type: GRUDGE_FORGIVE,
      payload: { id }
    });
  };
};

```

in order to avoid rendering a component with the same props, react.memo should be used to improve performance

```jsx
const NewGrudge = React.memo(({onSubmit}) => {
	const [person, setPerson] = useState('');
})
```

```jsx
const addGrudge = useCallback(
 ({const dispatch: (value: any) => void
  dispatch({
    type:GRUDGE_ADD,
    payload: {
      person,
      reason,
      forgiven: false,
      id: id()
    }
  })
  },[dispatch]
 );
);
```



## Data Fetching

a custom hook for dealing with data fetching:

```jsx
const useFetch = url => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  React.useEffect(() => {
    setLoading(true);
    setResponse(null);
    setError(null);
    
    fetch(url)
    	.then(response => response.json())
    	.then(response => {
      	setLoading(false);
      	setResponse(response);
    })
    .catch(error => {
      setLoading(false);
      setError(error);
    });
  }, []);
  
  return [response, loading, error]
};

const Component = () => {
  const [response, loading, error] = useFetch(endpoint + '/characters');
  const characters = (response && response.characters) || [];
  
  return {
    // ...
  }
}
```

Kinney prefers promise chaining over async requests; one reason is that you cannot pass async functions to useEffect directly, since async functions return promises. Example: 

```jsx
const useFetch = url => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  React.useEffect(() => {
    setLoading(true);
    setResponse(null);
    setError(null);
    
    const fetchUrl = async () => {
  		try {
    		const response = await fetch(url);
        const data = await response.json();
        setResponse(data);
		  } catch (error) {
      	setError(error);
      } finally {
        setLoading(false);
      }
    };   
    fetchUrl();
  }, []);
  
  return [response, loading, error]
};

const Component = () => {
  const [response, loading, error] = useFetch(endpoint + '/characters');
  const characters = (response && response.characters) || [];
  
  return {
    // ...
  }
}
```

#### custom reducer

with a reducer, you want to announce that things have happened, and separate that out.

```jsx
const initialState = {
  result: null,
  loading: true,
  error: null,
}

const fetchReducer = (state, action) => {  
  if (action.type === 'LOADING') {
    return initialState;
  }
  
  if (action.type === 'RESPONSE_COMPLETE') {
    return {
      result: action.payload.response,
  		loading: false,
  		error: null,
    }
  }
  
  if (action.type === 'ERROR') {
      return {
      result: null,
  		loading: false,
  		error: action.payload.error,
    }
  }
};

const useFetch = url => {
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  React.useEffect(() => {    
    dispatch({type: 'LOADING'});
    
    const fetchUrl = async () => {
      try {
    		const response = await fetch(url);
        const data = await response.json();
        dispatch({
          type: 'RESPONSE_COMPLETE', 
          payload: {data},
        });
		  } catch (error) {
      	dispatch({
          type: 'ERROR', 
          payload: {error},
        });
      }
    };
  }, []);
    
  return [state.result, state.loading, state.error];
};
```

### THUNK

```jsx
const initialState = {
  result: null,
  loading: true,
  error: null,
}

const fetchCharacters = (dispatch) => {
  dispatch({type: 'LOADING'})
  
  fetch(endpoint + '/characters')
  .then (response => response.json)
  .then (response => 
  	dispatch({
      type: 'RESPONSE_COMPLETE',
      payload: {characters: response.characters},
 		}),
  ).catch(error => dispatch ({
    type: 'ERROR',
    payload: {error}
  }))
};

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  
  const enhancedDispatch = React.useCallback(action => {
    // isFunction comes from lowdash, could use typeOf instead
    if (isFunction(action)) {
      action(dispatch);
    } else {
      dispatch(action);
    }
  }, [dispatch]);
  // this is the dispatch from useReducer
  
  return [state, enhancedDispatch];
};

const Component = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  
  const {characters} = state;
  
  useEffect(() => {
    dispatch (dispatch => {} )
  }, [ ])
  // if dispatch is listed in the array above, it would 
  // trigger many re-renders
  
  return {
    // ...
    <button 
      onClick={() => dispatch(fetchCharacters)}>
      Show
    </button>
  }
}

```

