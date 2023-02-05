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