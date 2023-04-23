import Coffee from "./coffee_class.js"
import SandwichClass from "./sandwich_class.js"
class YourCoffeeOrder extends Coffee {
    constructor(coffeeType, cupSize, quantity) {
        super(coffeeType, cupSize)
        this.quantity = quantity
    }
    calculateOrderPrice() {
        let orderPrice = this.quantity * this.calculatePrice()
        return orderPrice
    }
    showYourOrder() {
        let yourOrder = {'Menu item': this.coffeeType, Cup: this.cupSize, Quantity: this.quantity, 'Total USD': this.calculateOrderPrice()}
        return yourOrder
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
        let yourOrder = {'Menu item': `${this.mainTopping} sandwich`, Quantity: this.quantity, 'Total USD': this.calculateOrderPrice()}
        return yourOrder
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
        'Salami': 5,
        'Salmon': 6,
        'Cheese': 5.5,
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

let coffee1 = new YourCoffeeOrder('caPPuccino', 'big', 2)
let sandwich1 = new MakeOrderSandwich('cheese', 1)
let coffee2 = new YourCoffeeOrder('black cOffee', 'small', 2)
let sandwich2 = new MakeOrderSandwich('SALAMI', 3)

function calculateTotalCheck() {
    let check = [...arguments]
    return `\nTotal order price is: ${check.reduce((sum, el) => sum + el, 0)} USD`
}

function printTotalOrder() {
    let arrayOrders = [...arguments]
    console.log('\nYour total order:')
    for (let i = 0; i < arrayOrders.length; i++) {
        for (let key in arrayOrders[i]) {
            let newKey = key.padEnd(25, '.')
            console.log(newKey, arrayOrders[i][key])
        }
    }
}
printTotalOrder(coffee1.showYourOrder(), coffee2.showYourOrder(), sandwich1.showYourOrder(), sandwich2.showYourOrder())
console.log(calculateTotalCheck(coffee1.calculateOrderPrice(), coffee2.calculateOrderPrice(), sandwich1.calculateOrderPrice(), sandwich2.calculateOrderPrice()))

