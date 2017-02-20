# Things I learned

Here's a list of problems that I ran into - and how to solve them

## ReferenceError: regeneratorRuntime is not defined
This has to do with the fact that we are using EcmaScript 6 and then `babel` to compile it into the `dist` folder, with the `npm build` command.

Apparently, in order to get this to work, you need the package `npm install --save babel-polyfill` included among the dev-dependencies

## While running mocha: SyntaxError: Unexpected token import
This, again, has to do with the fact that we are using EcmaScript 6 code in our tests, which `mocha` doesn't understand natively. We need to instruct `mocha` to use babel compilers with the command:

```javascript
mocha ./src/**/*.test.js --compilers js:babel-core/register
```