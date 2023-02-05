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

/**
 * The forloop challange
 */

let powerfulcountry = ["USA", "CHINA", "UK", "FRANCE", "GERMAN"]

function Power() {
    console.log("The five most powerful countries in the World!")
    let i = 0
    do {
        console.log(powerfulcountry[i])
        i++
    }while(i < powerfulcountry.length)
}

Power()

/**
 * push(), pop(), shift(), unshift() methods
 */

let populuscountries = ["albama", "India", "USA", "conto", "Pakistan"]

populuscountries.pop()
populuscountries.pop()
populuscountries.push("AFRICA")
populuscountries.push("PAKISTANI")

populuscountries.shift()
populuscountries.unshift("CHINA")

function myPopulus() {
    console.log("These are the most populous nations in the World!")
    let i = 0
    while (i < populuscountries.length) {
        console.log("- " + populuscountries[i])
        i++
    }
}

myPopulus()


/**
 * operator
 */

let day = 21
let weekDay = "Friday"

function Week() {
    if (day === 21 && weekDay === "Friday") {
        console.log("Don't scare me please!")
    }
}

Week()

/**
 * The random challange
 */

let hand = ["rock", "paper", "scisor"]

function Game() {
    let random = Math.ceil(Math.random() * 3)
    if (random === 1) {
        console.log(hand[0])
    } else if (random === 2) {
        console.log(hand[1])
    } else {
        console.log(hand[2])
    }
}

Game()

/**
 * Another key implemtation without using the if else statment
 */

function theGame() {
    let random = Math.floor(Math.random() * 3)
    console.log( hand[random] )
}

theGame()

/**
 * The next challange
 */

let fruits = ["Orange", "Apple", "Orange", "Orange", "Apple"]

let oranges = document.getElementById("oranges")
let apples = document.getElementById("apples")

function myfruits() {
    let i = 0
    do {
        if (fruits[i] === "Orange") {
            oranges.textContent += " Orange "
        } else if (fruits[i] === "Apple") {
            apples.textContent += " Apples "
        }
        i++
    } while (i < fruits.length)
}

myfruits()