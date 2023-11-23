function myFunction (a,b){
    return a*b
}

const myFunction2 = (a,b) => {
    return a*b
}

let myFunction3 = (a,b) => a*b
const myFunction4 = (a,b) => (a*b)

function hello(){
    return "Hello World"
}

const hello1 = () => "Hello World"

function helloVal(val){
    return "Hello "+val
}

const helloVal1 = (val) => "Hello "+val
const helloVal2 = val => "Hello "+val

function noreturn(a,b){
    console.log(a+b)
}

const noreturnarrow = (a,b) =>{
    console.log(a+b)
}

const noreturnarrow1 = (a,b) => console.log(a+b) // i am return console.log

noreturnarrow1(2,3)
