## JS Topics

### Arrays
- arr.length
---
### For loops
- for loop
- for in loop
- forEach loop => this method calls a function(a callback function) once for each array element
 - It takes 3 arguments
  - The item value
  - The item index
  - The array itself
- Avoid creating arrays using new Array()
- Array.isArray(fruits) //true if fruits is an array
- fruits instanceof Array // true if fruits is an array
- push
- pop
- shift
- unshift
- concat
- sort
- reverse
--- 
IMP Methods
- Splicing => Splice method is used to add new items to an array, but it can also be used to remove items from an array
 - 1st arg is the new element should be added/spliced in, or the element to be removed
 - 2nd arg is 0 if you want to add elements, or the number of elements you want to remove
 - 3rd onwards, give multiple elements to add
- Slicing
 - It slices out a piece of an array into a new array

---
- forEach => iterates over an array and calls a given func for each element => does not return anything
- map => creates a new array by performing a function on each array element
- filter => creates a new array with array elements that passes a given test