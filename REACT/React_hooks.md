# React

## Hooks



### conditional rendering

- a React component that returns null instead of JSX will render nothing.
- I suggest to use single if statements every time you want to guard your main return

```jsx
function LoadingIndicator({ isLoading }) {
  return <div>{isLoading && <p>Loading...</p>}</div>;
}
```

That's your way to go when you want to **return nothing or an element inside JSX**. It's also called short-circuit evaluation which makes it even more concise than a ternary operator.

## Effects Without Cleanup

Sometimes, we want to **run some additional code after React has updated the DOM.** Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them.

In React class components, the `render` method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects *after* React has updated the DOM.

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {    document.title = `You clicked ${this.state.count} times`;  }  componentDidUpdate() {    document.title = `You clicked ${this.state.count} times`;  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Note how **we have to duplicate the code between these two lifecycle methods in class.**

This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React class components don’t have a method like this. We could extract a separate method but we would still have to call it in two places.

Now let’s see how we can do the same with the `useEffect` Hook.

```
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {    document.title = `You clicked ${count} times`;  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**What does `useEffect` do?** By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

**Why is `useEffect` called inside a component?** Placing `useEffect` inside the component lets us access the `count` state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

**Does `useEffect` run after every render?** Yes! By default, it runs both after the first render *and* after every update. (We will later talk about [how to customize this](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects).) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

> TIP
>
> Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect. 

## Effects with Cleanup

Earlier, we looked at how to express side effects that don’t require any cleanup. However, some effects do. For example, **we might want to set up a subscription** to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak! Let’s compare how we can do it with classes and with Hooks.



### Is it safe to omit functions from the list of dependencies?

If you specify a [list of dependencies](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) as the last argument to `useEffect`, `useMemo`, `useCallback`, or `useImperativeHandle`, it must include all values that are used inside the callback and participate in the React data flow. That includes props, state, and anything derived from them.

It is **only** safe to omit a function from the dependency list if nothing in it (or the functions called by it) references props, state, or values derived from them. 

**If for some reason you \*can’t\* move a function inside an effect, there are a few more options:**

- **You can try moving that function outside of your component**. In that case, the function is guaranteed to not reference any props or state, and also doesn’t need to be in the list of dependencies.
- If the function you’re calling is a pure computation and is safe to call while rendering, you may **call it outside of the effect instead,** and make the effect depend on the returned value.
- As a last resort, you can **add a function to effect dependencies but \*wrap its definition\*** into the [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback)Hook. This ensures it doesn’t change on every render unless *its own* dependencies also change:

```
function ProductPage({ productId }) {
  // ✅ Wrap with useCallback to avoid change on every render  const fetchProduct = useCallback(() => {    // ... Does something with productId ...  }, [productId]); // ✅ All useCallback dependencies are specified
  return <ProductDetails fetchProduct={fetchProduct} />;
}

function ProductDetails({ fetchProduct }) {
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]); // ✅ All useEffect dependencies are specified
  // ...
}
```

Note that in the above example we **need** to keep the function in the dependencies list. This ensures that a change in the `productId` prop of `ProductPage` automatically triggers a refetch in the `ProductDetails` component.

_____________________________________

So far in our experience the issues caused by missing dependencies have been significantly worse than losing the quick “[] means mount” visual shortcut.

One thing I’ve noticed is that it’s often Redux users who complain about this. I think it’s likely because React Redux encourages the “action creator” pattern where you get a bunch of methods and then call them individually. Of course, declaring every method and thinking about them can get confusing if you have dozens.

You wouldn’t have this problem if you weren’t using the “action creator” pattern. For example, with `useReducer` our recommendation is to put `dispatch` itself on its own context. Then any effect that needs to dispatch something just needs `[dispatch]` as dependencies which is easy to read and remember it never changes in practice. This is not currently idiomatic in React Redux — but Hooks were primarily designed to be idiomatic in *React itself*. React Redux adjusted to past React idioms, and I ancitipate it can adjust to this too.

Finally, please remember nothing prevents you from creating your own `useMount` Hook that does what you want, and then calling it. The lint rule won’t check it. In that case you’re explicitly choosing to forgo checks because you consider the verbosity of how your chosen idioms (like React Redux) combines with Hooks worse than the stale props or state.



________

 To get productive, you need to “think in effects”, and their mental model is closer to implementing synchronization than to responding to lifecycle events.

**Question: How do I correctly fetch data inside `useEffect`? What is `[]`?**

[This article](https://www.robinwieruch.de/react-hooks-fetch-data/) is a good primer on data fetching with `useEffect`. Make sure to read it to the end! It’s not as long as this one. `[]` means the effect doesn’t use any value that participates in React data flow, and is for that reason safe to apply once. It is also a common source of bugs when the value actually *is* used. You’ll need to learn a few strategies (primarily `useReducer` and `useCallback`) that can *remove the need* for a dependency instead of incorrectly omitting it.

**Question: Do I need to specify functions as effect dependencies or not?**

The recommendation is to hoist functions that don’t need props or state *outside*of your component, and pull the ones that are used only by an effect *inside* of that effect. If after that your effect still ends up using functions in the render scope (including function from props), wrap them into `useCallback` where they’re defined, and repeat the process. Why does it matter? Functions can “see” values from props and state — so they participate in the data flow. There’s a [more detailed answer](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) in our FAQ.

**Note:** In the future, React Hooks are not be intended for data fetching in React. Instead, a feature called Suspense will be in charge for it. The following walkthrough is nonetheless a great way to learn more about state and effect hooks in React.

The key takeaway is that the `count` constant inside any particular render doesn’t change over time. It’s our component that’s called again — and each render “sees” its own `count` value that’s isolated between renders.

*It would be safe to think the same way about other values like objects too, but only if we agree to avoid mutating state. Calling `setSomething(newObj)` with a newly created object instead of mutating it is fine because state belonging to previous renders is intact.*

**every** function inside the component render (including event handlers, effects, timeouts or API calls inside them) captures the props and state of the render call that defined it.

Be aware that when you want to read the *future* props or state from a function in a *past* render, you’re swimming against the tide. It’s not *wrong* (and in some cases necessary) but it might look less “clean” to break out of the paradigm. This is an intentional consequence because it helps highlight which code is fragile and depends on timing. In classes, it’s less obvious when this happens.

You should think of effects in a similar way. **`useEffect` lets you \*synchronize\*things outside of the React tree according to our props and state.**

**If you’re trying to write an effect that behaves differently depending on whether the component renders for the first time or not, you’re swimming against the tide!** We’re failing at synchronizing if our result depends on the “journey” rather than the “destination”.

It shouldn’t matter whether we rendered with props A, B, and C, or if we rendered with C immediately. While there may be some temporary differences (e.g. while we’re fetching data), eventually the end result should be the same.



React sees two objects:

```jsx
const oldProps = {className: 'Greeting', children: 'Hello, Dan'};
const newProps = {className: 'Greeting', children: 'Hello, Yuzhi'};
```

It goes over each of their props and determine that `children` have changed and need a DOM update, but `className` did not. So it can just do:

```jsx
domNode.innerText = 'Hello, Yuzhi';
// No need to touch domNode.className
```

```jsx
useEffect(() => {
  function doSomething() {
    console.log('hello');
  }

  doSomething();
}, []); // ✅ OK in this example because we don't use *any* values from component scope
```

“But I only want to run it on mount!”, you’ll say. For now, remember: if you specify deps, ***all\* values from inside your component that are used by the effect \*must\* be there**. Including props, state, functions — anything in your component.

## Making Effects Self-Sufficient

We want to get rid of the `count` dependency in our effect.

```jsx
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);    }, 1000);
    return () => clearInterval(id);
  }, [count]);
```

To do this, we need to ask ourselves: **what are we using `count` for?** It seems like we only use it for the `setCount` call. In that case, we don’t actually need `count` in the scope at all. When we want to update state based on the previous state, we can use the [functional updater form](https://reactjs.org/docs/hooks-reference.html#functional-updates) of `setState`:

```jsx
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);    }, 1000);
    return () => clearInterval(id);
  }, []);
```

I like to think of these cases as “false dependencies”. Yes, `count` was a necessary dependency because we wrote `setCount(count + 1)` inside the effect. However, we only truly needed `count` to transform it into `count + 1`and “send it back” to React. But React *already knows* the current `count`. **All we needed to tell React is to increment the state — whatever it is right now.**

That’s exactly what `setCount(c => c + 1)` does. You can think of it as “sending an instruction” to React about how the state should change. This “updater form” also helps in other cases, like when you [batch multiple updates](https://overreacted.io/react-as-a-ui-runtime/#batching).

**Note that we actually \*did the work\* to remove the dependency. We didn’t cheat. Our effect doesn’t read the `counter` value from the render scope anymore:**

Encoding the *intent* (rather than the result)



## Decoupling Updates from Actions

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + step);    
    }, 1000);
    return () => clearInterval(id);
  }, [step]);
  return (
    <>
      <h1>{count}</h1>
      <input value={step} onChange={e => setStep(Number(e.target.value))} />
    </>
  );
}
```

The current behavior in this example is that changing the `step` restarts the interval — because it’s one of the dependencies. And in many cases, that is exactly what you want! There’s nothing wrong with tearing down an effect and setting it up anew, and we shouldn’t avoid that unless we have a good reason.

**When setting a state variable depends on the current value of another state variable, you might want to try replacing them both with `useReducer`.**

When you find yourself writing `setSomething(something => ...)`, it’s a good time to consider using a reducer instead. A reducer lets you **decouple expressing the “actions” that happened in your component from how the state updates in response to them**.

Let’s trade the `step` dependency for a `dispatch` dependency in our effect:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
const { count, step } = state;

useEffect(() => {
  const id = setInterval(() => {
    dispatch({ type: 'tick' }); // Instead of setCount(c => c + step);  }, 1000);
  return () => clearInterval(id);
}, [dispatch]);
```

You might ask me: “How is this any better?” The answer is that **React guarantees the `dispatch` function to be constant throughout the component lifetime. So the example above doesn’t ever need to resubscribe the interval.**

*(You may omit `dispatch`, `setState`, and `useRef` container values from the deps because React guarantees them to be static. But it also doesn’t hurt to specify them.)*

```jsx
const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  const { count, step } = state;
  if (action.type === 'tick') {    return { count: count + step, step };  } else if (action.type === 'step') {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
}
```

We’ve seen how to remove dependencies when an effect needs to set state based on previous state, or on another state variable. **But what if we need \*props\* to calculate the next state?** For example, maybe our API is `<Counter step={1} />`. Surely, in this case we can’t avoid specifying `props.step` as a dependency?

In fact, we can! We can put *the reducer itself* inside our component to read props:

```jsx
function Counter({ step }) {  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === 'tick') {
      return state + step;    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}
```

You may be wondering: how can this possibly work? How can the reducer “know” props when called from inside an effect that belongs to another render? The answer is that when you `dispatch`, React just remembers the action — but it will *call* your reducer during the next render. At that point the fresh props will be in scope, and you won’t be inside an effect.

**This is why I like to think of `useReducer` as the “cheat mode” of Hooks. It lets me decouple the update logic from describing what happened. This, in turn, helps me remove unnecessary dependencies from my effects and avoid re-running them more often than necessary.**





