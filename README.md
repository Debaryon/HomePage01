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

describe("f", ()=> {
    it("Should return string length 5", ()=> {
        const actual = f("Bjorn");
        const expected = 5;

        expect(actual).to.equal(expected);
    });
});
```
...run from file `main.ts` with following code
```typescript
export const f = (x:string): number => 4;
```