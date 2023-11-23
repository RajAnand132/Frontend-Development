
function multiply(p1,p2){
    return p1*p2;
}

function divide(p1,p2){
    console.log(p1/p2);
}

function toCelsius(fahrenheit){
    return (5/9)*(fahrenheit-32);
}

let x = toCelsius(99)
document.write("The temperature is "+x+" deg Celsius")

// const car = "Fiat";

// const car = ["Mahindra","XUV300"]

const car = {
    company: "Mahindra",      model: "XUV 300"
}
console.log(car)
console.log(car.company)
console.log(car["company"])


const person = {
    firstName: "Raj",
    lastName: "Anand",
    age: 22,
    fullName: function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(person)
//printing a function
console.log(person.fullName)

//calling a function
console.log(person.fullName())


if(condition){

}

if(condition){

}else{

}

if(condition1){

}else if(conditon2){

}else if(condition3){

}else{

}

switch(expression){
    // stricy comparision(===)
    case x:
        //code block
        break;
    case y:
        //code block
        break;
        // no use of this code block
    case a:
    case b:
        //code block;
        break;
    default:
        //code block
}