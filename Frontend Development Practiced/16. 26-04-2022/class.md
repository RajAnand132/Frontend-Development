## JavaScript Variables

### var, let and const
- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within it's scope.
- let variables can be updated but not re-declared
- const variables can never be updated nor re-declared.
- They are all hoisted to the top of their scope. But while var variables are intialized(gives undefined on printing), let and const variables are not intialized(gives reference error).
- While var and let can be declared without being initialized, const must be initalized during declaration.

## Arithmetic Operators
- +
- -
- *
- /
- %
- ++ (increment by 1)
- minus sign twice(--) (decrement by 1)
- ** exponentiation

## Assignment Operators
- =
- +=
- -=
- *=
- /=
- %=  x%=y => x = x%y
- **= 

## String Operators
- +(append)

## Strings and Numbers
- y="5"+5    =>  55
- y="5"*5    => 25
- y=5*"5"    => 25

## Comparison Operators
- == equal to
- === equal value and equal type
- != not equal
- !== not equal value or not equal type
- &gt; (>) greater than
- &lt; (<) less than
- &gt;= greater than or equal to
- &lt;= lesser than or equal to
- ? ternary (conditon ? if true : if false)

## Logical Operators
- && logical and 
- || logical or
- ! logical not

## Type Operators
- typeof

## Bitwise Operators
- & AND
- | OR
- ~ NOT
- ^ XOR
- << left shift
- &gt;&gt; right shift
- &gt;&gt;&gt; unsigned right shift

## Data Types
- Numbers
- String
- Boolean
- Array
- Objects
- undefined => A variable without a value

## undefined vs null
### Definition
- null is the intentional absence of the value. It is one of the primitive values of JS
- undefined means the value does not exist in the compiler.

### Type
- null: Object
- undefined: undefined

### Equality
- null == undefined // true
- null === undefined // false
- It means null is equal to undefined but not identical

### When we define a variable to be
- undefined then we are trying to convey that the variable does not exist.
- null then we are trying to convey that the variable is empty

- null is also referred as false

## Functions
- Invoking a function
 - When an event occurs(when a user clicks a button)
 - When it is invoked from JavaScript code
 - Automatically (self invoked)

## this keyword
- this keyword refers to an object
- which object? depends on how "this" is being invoked

- In an object method, "this" refers to the object
- Alone, "this" refers to the global object
- In a function, "this" refers to the global object
- In an event, "this" refers to the element that received the event.
- Methods like call(), apply(), bind() can refer "this" to any object.

### this is not a variable, you cannot change the value. It's a keyword

### If else, if else if
### Switch case