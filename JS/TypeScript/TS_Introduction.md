# TypeScript Introduction

[FrontendMasters](https://frontendmasters.com/courses/typescript-v2/introduction/)

_____

## Checklist 
-	[ ] 
- [ ] what is JSDoc?
- [ ] compilerOptions
- [ ] 

_________



- TypeScript is a **typed, syntactic superset** of JS, developed by Microsoft
- compiles to readable JS (not extra cost at run time)
- has 3 parts: **Language**, **Language Server** and **Compiler**



### why add types?

- encode constraints and assumptions, as part of developer intent
- catch common mistakes (i.e. incomplete refactors)
- move some runtime errors to compile time



### tsconfig.js 

```json
{
  // HOW do we want to compile?
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "outDir": "lib"
  },
  // WHAT do we want to compile?
  "include": ["src"]
}
```

```json
{
"compilerOptions": {
  "jsx": "react",
  "strict": true, // should always be true
  "sourceMap": true,
  "noImplicitAny": true,
  "strictNullChecks": true, // check & compile JS
  "allowJs": true,
  "types": [],
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "moduleResolution": "node",
  "target": "es2015",
},
```



- using babel with TypeScript reduces TS to the checker, not the output → let TS put out very modern JS and then have babel take it the rest of the way ("target": "esNext")
- you don't need to type everything in your app - often type inference is enough
- Const: will be typed to the <u>**exact**</u> string that is was at initialisation: called a **'string literal type'**
- **any**: top type; default; most flexible
- **never**: bottom type
- **tuples**: not really type safe
- TS uses terms "wide" and "narrow" to describe a level of specificity
  Wide: **any** → Narrow: **never**
- in functions: **specifically state a return type**; it will keep you honest within all branches of a function -> make sure what you are returning is intentional



### Defining Lexical Scope

The **this** in the function signature does not mean you have to supply an argument called this

```js
function sendMessage(
  this: HasEmail & HasPhoneNumber,
  preferredMethod: 'phone' | 'email'
) {
  if (preferredMethod === 'email') {
    console.log('sendEmail');
    sendEmail(this);
  } else {
    console.log('sendTextMessage');
    sendTextMessage(this);
  }
}
```



## Interfaces & Type Aliases

### Types

- *type alias*: a type with a name; this is the ONLY time you'll see a type on the right hand side of assignment; will compile to NO JS at all
- type aliases are *eager*, interfaces are *lazy*

### Interfaces

- `extends` is used for inheritance of **like** things (interfaces extend from interfaces, classes from classes)
- `interfaces` describe **objects**, **functions** and **arrays**, but not primitive types; deals exclusively with JS values that extend from the JS `object` type
- classes are `new-able`
- constructor signatures can be described as well

**index signatures** 

```js
interface PhoneNumberDict {
  // arr[0],  foo['myProp']
  [numberName: string]:
  // by adding undefined you're forcing a check
    | undefined
    | {
        areaCode: number;
        num: number;
      };
}
const d: PhoneNumberDict = {};
if (d.abc) {
  d.abc
}

```

- interfaces are "open", meaning any declarations of the same name are merged



## Classes

```js
export class Contact implements HasEmail {
  email: string;
  name: string;
  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}
```

- classes that `implement` an interface have to explicitly have to have the properties that conform to that interfaces stated up front
- adding an access modifier keyword before our constructor's arguments typescript lets you create an equivalent setup tp what we had before: **PARAMETER PROPERTIES**

```js
class ParamPropContact implements HasEmail {
  constructor(
   public name: string, 
   public email: string = 'no email'
   ) {
    // nothing needed
  }
}
```

- **Definite Assignment Operator**: `!`
- Abstract classes are like half-class, half-interface hybrids



## Converting to TypeScript

Three step process, can be done incrementally:

**What not to do:**

- make functional changes at the same time
- Attempt it with low test coverage
- let the perfect be the enemy of the good
- forget to add tests for your types
- publish types for consumer use while they're in a 'weak' state
  



### Recipe

#### 1. Compiling in "loose mode"

- Start with tests passing
- Rename all .js to .ts, allowing implicit any
- fix only things that are not type-checking, or causing compile errors
- be careful to avoid changing behaviour
- get tests passing again



### 2. Explicit "Any"

- Start with tests passing

- ban implicit any (`"noImplicitAny": true`)

- where possible, provide a specific and appropriate type

  - import types for dependencies from DefinitelyTyped (open source project that provides ambient type information); npm package `@types` , import the type information you'll need for external libraries
  - otherwise *explicit* any

- Get tests passing again

  

### 3. Squash explicit anys, enable strict mode

- incrementally, in small chunks...

  - enable strict mode

    ``` json
    "strictNullChecks": true,
    // if set to false, NULL fits anywhere; 
    // set to true: only NULL can hold NULL
    "strict": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true
    // set to false: you basically lose all type safety by going through these functions
    // set to true: makes sure that the arguments passed to bind/call/apply AND the lexical scope all type check appropiately
    ```

  - replace explicit anys with more appropiate types

  - try really hard to avoid unsafe casts: `SomeType as string`

    

