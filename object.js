/**
 * Objects implementation
 */

let castle = {
    status: true,
    cost: 910,
    place: "London",
    rooms: 8,
    weather: ["cold", 8, "hot"]
}

console.log(castle.place)
console.log(castle["cost"])
console.log(castle.weather)

/**
 * Object challange
 */

let dancer = {
    name: "Okello Thomas",
    salary: 90022
}

let theDancer = document.getElementById("dancer")
theDancer.textContent = dancer.name + ": $" + dancer.salary 

/**
 * function object challange
 */
let country = {
    name: "Okello",
    country: "Kenya",
    age: 26
}

function logData() {
    console.log( country.name + " is " + country.age + " old and lives in " + country.country )
}

logData()

/**
 * else if challange
 */

var myAge = 30

function Age() {
  if (myAge < 6) {
        console.log("Free travel")
    } else if (myAge >= 6 && myAge <= 17) {
        console.log("Child discount")
    } else if (myAge >= 18 && myAge <= 26) {
        console.log("student discount")
    } else if (myAge >= 27 && myAge <= 66) {
        console.log("Full price")
    } else {
        console.log("Senior citizen Discount")
    }  
}

Age()


