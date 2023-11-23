### JS Events

- HTML events are "things" that happen to HTML elements
- When JS is used in HTML pages, it can "react" on these events.

### HTML Events
- HTML web page finished loading - onload
- HTML input field was changed - onchange
- HTML button was clicked - onclick
- onmouseover - user moves the mouse over an HTML element
- onmouseout - The user moves the mouse away from an html element
- onkeydown - user pushes a keyboard key

## Comparing two javascript objects always return false


## String Methods
- length

### Extracting String Parts
- slice(start, end) => slice extracts a part of a string and returns the extracted part in a new string, end position is not included
- substring(start, end) => Similar to slice, but substring cannot accept negative values
- substr(start, length) => Similar to slice, but substr's second argument is the length

### String Methods cont.
- replace
  - replace() method does not change the string it is called on
  - replace() method returns a new string
  - replace() method only replaces the first match
- toUpperCase()
- toLowerCase()
- concat()
- trim()
- String Padding
 - padStart()
 - padEnd()
- charAt()
- IMP split() => converts string to array
- - - 
- All string methods return a new string, they don't modify the original string.
- Strings are immutable: Strings cannot be changed, only replaced

--- 
- Template Literals

## Number Methods
- toString()
- toExponential()
- toFixed() => how many digits after decimal
- toPrecision(n) => returns a string with a number written with a specified length(n)
- Number() => converts javascript variables to numbers, returns NaN if number cannot be converted.