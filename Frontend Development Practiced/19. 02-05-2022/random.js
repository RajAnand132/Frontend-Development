// const d = new Date()
const obj = require("./jsonObject.json")
console.log(obj.address)

console.log(Math.random())

// returns a random number between [0,1)

// Get me a number between 1 and 10
// Math.floor(Math.random()*10+1)

// Returns a random number between min(included) and maximum(excluded)
function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min)) +min;
}

// Returns a random number between min(included) and maximum(included)
function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min+1)) +min;
}


