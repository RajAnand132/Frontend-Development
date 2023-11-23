const person = {
    "firstName":"Raj",
    "lastName": "Anand",
    "fullName": function(city, country){
        return `${this.firstName} ${this.lastName}. Lives in ${city},${country}`
        // return this.firstName + " " + this.lastName
    }
}


function xyz(){
    return 10
}

// console.log(person.fullName())

const abcd = {
    firstName:"ABC",
    lastName: "XYZ"
}

// const output = person.fullName.call(abcd)
const output = person.fullName.call(abcd,"bengaluru","karnataka")
console.log(output)

const output2 = person.fullName.apply(abcd,["bengaluru","karnataka"])
console.log(output2)

// Special use of apply

console.log(Math.max(1,2,3))
const arr = [45,4,9,16,25]
const maxVal = Math.max.apply(null,arr)
// const maxVal = Math.max.apply(null,[45,4,9,16,25])
console.log(maxVal)

const member = {
    firstName: "R",
    lastName: "D"
}

let fullName = person.fullName.bind(member)
console.log(fullName("agra","UP"))