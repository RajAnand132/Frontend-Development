## Topics

### setTimeout
- This method calls a function after a given number of milliseconds
- This method is executed only once
- takes two arguments, first one is function to be called, and second is the number of milliseconds of delay
- use clearTimeout to clear a particular timeout

### clearInterval 
- This method calls a function periodically after every n milliseconds
- takes two arguments, first one is function to be called, and second is the number of milliseconds of interval
- use clearInterval to clear a particular interval


### Promises
- Promises a result after some time
- If promise object is pending, result is undefined
- If the promise object is fulfilled, the result is a value
- If a promise is rejected, the result is an error object

--- 
- async keyword before a function makes the function return a promise
- await keyword before a function makes the function wait for a promise
- IMP => await keyword can only be used inside an async function