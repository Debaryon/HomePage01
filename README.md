# HomePage01
Bjorn and Mats Webpage
---
## Libraries used
- [React](https://www.npmjs.com/package/react)
- [React-Redux](https://www.npmjs.com/package/react-redux)
- [ReactDOM](https://www.npmjs.com/package/react-dom)
- [Redux](https://www.npmjs.com/package/redux)
- [Mocha](https://www.npmjs.com/package/mocha) and [Chai](https://www.npmjs.com/package/chai)
- [ReactTransitionGroup](https://www.npmjs.com/package/react-transition-group)
- [ReactRouter](https://www.npmjs.com/package/react-router)

## Technologies
- [Typescript](https://www.npmjs.com/package/typescript)
- [TSLint](https://www.npmjs.com/package/tslint)
- [WebPack](https://www.npmjs.com/package/webpack)
- [Node](https://docs.npmjs.com/getting-started/what-is-npm) server run with [Express](https://www.npmjs.com/package/express)

---
## Instructions
### Prebuild project
Before building or running project, download dependencies by running following command in project root folder:
```
npm i
```

### Build project
Before running project, compile and bundle source code with following command in project root folder:
```
npm run build
```

### Run project
Run project by running following command in project root folder:
```
npm start
```
This starts the server. Navigate to `localhost:8000` in favorite web browser to view the page.
### Run unit tests for project
Run unit tests with following command in project root folder:
```
npm test
```

---
## Useful code snippets
#### Function no body return
When function is defined by a single expression is this:
```typescript
const f = (x: string): number => {
    return x.length;
};
```
can be simplefied into this:
```typescript
const f = (x: string): number => x.length;
```
#### Normal function shortened
A normal function with body
```typescript
function f() {

}
```
can be simplefied into this:
```typescript
const f = () => {

}
```
#### Basic Unit Testing 
Typescript file `maintest.spec.ts` with following code
```typescript
import { expect } from "chai";
import { f } from "./main";

describe("f", () => {
    it("Should return string length 5", () => {
        const actual = f("Bjorn");
        const expected = 5;

        expect(actual).to.equal(expected);
    });
});
```
... runs code from file `main.ts`:
```typescript
export const f = (x: string): number => 4;
```

#### Object spread operator
```typescript
const obj = { a: 1, b: "hej", c: true };
// copy obj to obj2:
const obj2 = { a: obj.a, b: obj.b; c: obj.c };
```
can be simplified with the `...` operator (the "spread" operator):
```typescript
const obj = { a: 1, b: "hej", c: true };
// copy obj to obj2:
const obj2 = { ...obj };
```

#### Object field initialization shorthand
```typescript
const x = 5;
const obj = { x: x };
```
can be simplified with shorthand notation when field has the same name as the variable:
```typescript
const x = 5;
const obj = { x };
```

#### Object destructuring
```typescript
const obj = { a: 0, b: 1, c: 2 };
const a = obj.a;
const b = obj.b;
```
can be simplified into this:
```typescript
const obj = {a: 0, b: 1, c: 2 };
const { a, b } = obj;
```
#### Object destructuring with function parameter
```typescript
type MyObj = { a: number, b: number };
const f = (obj: MyObj): number => obj.a + obj.b;
```
can be simplified into this:
```typescript
type MyObj = { a: number, b: number };
const f = ({ a, b }: MyObj): number => a + b;
```

#### Sum type (algebraic types):

```typescript
type ChildrenName = "Bjorn" | "Nanna" | "Alice" | "Elsie";
const f = (s: ChildrenName): void => {};
// Will not even compile:
f("knatte");
// Compiles correctly:
f("Nanna");
```

#### Type narrowing with sum types:
```typescript
type MyType = {
    a: "knatte";
} | {
    a: "fnatte";
    b: number;
} | {
    a: "tjatte";
    b: string;
};

const obj: MyType = // ... some implementation

// switch with common occuring field:
switch (obj.a) {
    case "knatte":
        // Will not even compile:
        console.log(obj.b) // we can't get to this point with 'b'
        break;
    case "fnatte":
        // Type of obj has been "narrowed" to { a: "fnatte", b: number }
        console.log(obj.b) // prints out a number
        break;
    case "tjatte":
        // Type of obj has been "narrowed" to { a: "tjatte", b: string }
        console.log(obj.b) // prints out a string
        break;
}
```
