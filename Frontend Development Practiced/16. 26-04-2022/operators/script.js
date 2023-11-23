let x = 6,
  y = 3;

if (x < 10 && y > 1) {
  console.log("true");
} else {
  console.log("false");
}

if (x == 5 || y == 5) {
  console.log("true");
} else {
  console.log("false");
}

if (!(x == y)) {
  console.log("x is not equal to y");
} else {
  console.log("x is equal to y");
}

let age = 19;
let canVote = age < 18 ? "Can't vote" : "Can vote";
// if(age<18){
//     canVote="Can't vote"
// }else{
//     canVote = "Can vote"
// }
console.log(canVote);

// let firstName = prompt("Please enter your first name")
// const lastName = prompt("Please enter your last name")

// let abc = "Hey" +16;
// console.log(abc)

// let abc2 = 16+4+"Hey"
// console.log(abc2)

// let abc3 = "Hey"+16+4;
// console.log(abc3);

const value = true;
const value2 = 5 === 3;
console.log(value, value2);

const cars = ["Volvo", "XUV 300", "Maruti"];
console.log(cars);
cars[1] = "XUV 500"
console.log(cars)
const junkData = [
  "Raj",
  18,
  ["Volvo", 25, 36, true],
  { firstName: "hey", lastName: "there" },
];
// 0 indexed

const person = {
  firstName: "Raj",
  lastName: "Anand",
  age: 18,
  phoneNumbers: ["9876543210", "9654321098"],
  address: {
      houseNo: 12,
      street: "Connaught Place",
      city: "Delhi",
      pinCode: 110045
  }
};

console.log(person)

let abc4;
var abc5;
console.log(typeof(abc4),abc4)
let abc6="Raj";
abc6=undefined;
console.log(abc6)

let car = "";
console.log(typeof(car))

let bool = 5==3
console.log(bool)

let xyz = null;

if(age<25){
    xyz = "can drink"
}else{
    xyz=null
}
