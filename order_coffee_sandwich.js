import Coffee from "./coffee_class.js"
import SandwichClass from "./sandwich_class.js"
class YourCoffeeOrder extends Coffee {
    constructor (coffeeType, cupSize, quantity){
        super(coffeeType, cupSize)
        this.quantity = quantity
    }
    calculateOrderPrice(){
        let orderPrice = this.quantity * this.calculatePrice()
        return orderPrice
    }
    showYourOrder(){
        console.log('\nYour order is:')
        let yourOrder = { 'Coffee choice': this.coffeeType, Cup : this.cupSize, Quantity: this.quantity, 'Total USD': this.calculateOrderPrice() }
        for (let key in yourOrder) {
            let newKey = key.padEnd(25, '.')
            console.log(newKey, yourOrder[key])
        }
    }
}
class MakeOrderSandwich extends SandwichClass {
    constructor(mainTopping, quantity) {
        super(mainTopping)
        this.quantity = quantity
    }
    calculateOrderPrice() {
        let orderPrice = this.quantity * this.calculateSandwichPrice()
        return orderPrice
    }
    showYourOrder() {
        console.log('\nYour order is:')
        let yourOrder = { 'Sandwich with': this.mainTopping, Quantity: this.quantity, 'Total USD': this.calculateOrderPrice() }
        for (let key in yourOrder) {
            let newKey = key.padEnd(25, '.')
            console.log(newKey, yourOrder[key])
        }
    }
}
function personalisedWelcomeMessage(name) {
    console.log(`Dear ${name}, welcome to our coffee-sandwich Bar!\n`)
}
function printCoffeeMenu() {
    let coffeType1 = 'Black Coffee'
    let coffeType2 = 'Flat White Coffee'
    let coffeType3 = 'Cappuccino'
    console.log(`Here is our coffee menu:\n${coffeType1} \n${coffeType2} \n${coffeType3}\n`)
}
function printCupsAndPrices() {
    console.log('Cups & Prices USD:')
    let cupsAndPrices = { Small: 5, Medium: 7.5, Big: 8.5 }
    for (let key in cupsAndPrices) {
        let newKey = key.padEnd(25, '.')
        console.log(newKey, cupsAndPrices[key])
    }
}
function showSandwichesAndPrices() {
    console.log('\nWe offer sandwiches with below toppings (price in USD):')
    let menu = {
        'salami': 5,
        'salmon': 6,
        'cheese': 5.5,
    }
    for (let key in menu) {
        let keyNew = key.padEnd(25, '.')
        console.log(keyNew, menu[key])
    }
}

personalisedWelcomeMessage('Miro')
printCoffeeMenu()
printCupsAndPrices()
showSandwichesAndPrices()

let coffeeOrder1 = new YourCoffeeOrder('caPPuccino', 'big',2)
let sandwichOrder1 = new MakeOrderSandwich('cheese', 1)

