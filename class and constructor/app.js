class Bike{
    constructor(name){
        this.name = name
    }
}

let bikeObj = new Bike("Duccati")
console.log(bikeObj)
console.log(bikeObj.name)


// we can declare a class inside a function
// and also can return a class from a function
// let's have a look of this greate property of JS

function makeFoodClass(){
    console.log("\nHere we're going to make a fruit class")

    class Food{
        constructor(foodType, foodPrice){
            this.foodType = foodType
            this._foodPrice = foodPrice 
        }

        get updateFoodPrice(){
            return this.updatedPrice
        }

        set updateFoodPrice(updatedPrice){
            return this.updatedPrice = updatedPrice // this.updatedPrice is a private variable
        }
    }

    return Food
}

let foodCls = makeFoodClass();
let chineese = new foodCls("Chineese", 450)

console.log("This is object: " + chineese)
console.log("Food Type: " + chineese.foodType)

console.log("Previous price of this food: " + chineese._foodPrice) // previous price
chineese.updateFoodPrice = 300  // set method
let updatedPrice = chineese.updateFoodPrice  // get method
console.log("New price of this food: " + updatedPrice)

// get set method jokhon call korbo tokhon kono function hishebe call
// korbo na. class er property hishebe assign korbo


// that's it for now
// Tataaa
