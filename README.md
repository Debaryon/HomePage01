# HomePage01
Bjorn and Mats Webpage

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
When function is defined by a single expression this:
```typescript
const f = (x: string): number => {
    return x.length;
};
```
can be simplefied into this:
```typescript
const f = (x: string): number => x.length;
```