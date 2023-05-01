export default class Coffee {
    constructor(coffeeType, cupSize) {
        this.coffeeType = coffeeType.charAt(0).toUpperCase() + coffeeType.slice(1,coffeeType.length).toLocaleLowerCase()
        this.cupSize = cupSize.charAt(0).toUpperCase() + cupSize.slice(1,cupSize.length).toLocaleLowerCase()
    }
    printCoffeeRecipe() {
        let ingredient1 = 'coffee beans'
        let ingredient2 = 'water'
        let ingredient3 = 'sugar'
        let ingredient4 = 'milk'
        let intro = '\nBelow are the steps to prepare your coffee: '
        let step1 = `Grind ${ingredient1}`
        let step2 = `Prepare hot ${ingredient2}`
        let step3 = `Add ground ${ingredient1} to the pot`
        let step4 = `Pour hot ${ingredient2} into the pot`
        let step5 = `Gently stir`
        let step6 = `Let ${ingredient2} extract from the ground ${ingredient1} for 2 minutes`
        let step7 = `Press the plunger down slowly`
        let step8 = `You can now pour the coffee into the cup`
        let step9 = `Add hot ${ingredient4}`
        let step10 = `Add frothing ${ingredient4}`
        let step11 = `Add ${ingredient3} to your liking\n`
        let result = `Your coffee is ready!\n`
        let recipe = [intro,step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, step11, result]
        let newRecipe = recipe.slice()        // create copy of recipe
        let recipeCoffee
        if (this.coffeeType == 'Black coffee') {
            newRecipe.splice(9, 2)
            recipeCoffee =newRecipe.map((el,i) => i == 0 || i == newRecipe.length-1 ? el : `${i}.${el}`).join('\n')
            }
        else if (this.coffeeType == 'Flat white coffee') {
            newRecipe.splice(10, 1)
            recipeCoffee =newRecipe.map((el,i) => i == 0 || i == newRecipe.length-1 ? el : `${i}.${el}`).join('\n')
                    }
        else if (this.coffeeType == 'Cappuccino') {
            newRecipe.splice(9, 1)
            recipeCoffee =newRecipe.map((el,i) => i == 0 || i == newRecipe.length-1 ? el : `${i}.${el}`).join('\n')
                    }
        else return ('Oops..Something is wrong. Please enter correct data')
        return (recipeCoffee)
    }
    calculatePrice(){
        let cupsAndPrices = {Small: 5, Medium: 7.5, Big: 8.5 }
        for (let key in cupsAndPrices){
            if (key == this.cupSize) {
                return cupsAndPrices[key]
            }
        }
    }
}