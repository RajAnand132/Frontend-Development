var aj= "no"

function sayHello(){
    aj = "hi"
}

console.log(aj)

const x = 1; //cannot redeclare/update const variables
// x=2; //not allowed
console.log(x)
//const is also block scoped
{
    const x = 3; // THIS IS NOT DECLARATION - BECAUSE for the computer, these two x's are diff
    console.log(x)
}
console.log(x)

//Object
const greeting = {
    message: "sayHi",
    times: 4
}
// greeting = {
//     message:"dont say hii",
//     times: 3
// }

console.log(greeting)
greeting.message = "don't say HI"
console.log(greeting)

// const declarations are also hoisted to the top but are not initialized.
// console.log(val)
// const val = "500" // gives reference error

document.write(aj)