## Intro to JavaScript


- Till now we've learnt 2 new things -
 - HTML
 - CSS

- Then we learnt bootstrap(library)

- JavaScript (backbone of web D, especially frontend)

- React(library) - written in JS

- Later when you learn backend, you'll see nodejs(backend runtime env) - written in JS


- With JS in frontend, we have 3 options
 1. Vanilla JavaScript - no external libraries or frameworks
 2. ReactJS - library
 3. Angular


### Where can I write JS?

1. Browser console
2. Any html file, inside script tag
3. Multiple script tags in a single html file are allowed
4. Link external script file

- window - the browser object model - it allows the JS to talk to the browser
- window.document or document
- document.getElementById("idname").innerHTML="yourcontent"
- Single line comments and multiline comments
- Variables and statements in JS
- Whitespaces

- In a js statement, we can have variables and literals
- literals are fixed values - numbers(10.5,1001), and strings

- let, var and const => let and var can be redefined, const cannot be.
- Variable names(also called identifiers)
  - They can start with A-Z or a-z, $, or _ , after this it can be any letters, digits, underscores or dollar signs

- #IMP => Javascript is case sensitive

## Ways to declare a javascript variables - 
 - using var
 - using let
 - using const
 - using nothing

## Var
- The scope of var variable is global when we define it outside a function. 
- The scope of var variable is function when it is declared inside a function.
- We can redefine var with/without using the var keyword again
<pre>
  var greeter = "say hello"
  var greeter = "say hello twice"

  greeter = "say hello thrice"
</pre>
- Hoisting  - It's a JS mechanism where variables and function declarations are moved to the top of their scope before code execution.
- Hoisting of var 
<pre>
console.log(sayHello)
var sayHello = "hey there"

// is interpreted as

var sayHello;
console.log(sayHello); // undefined
sayHello = "hey there"
</pre>

- For let, hoisting takes place as well, but in this case, let keyword is not initialized, therefore we get a Reference Error


