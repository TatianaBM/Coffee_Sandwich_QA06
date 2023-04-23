export default class SandwichClass {
    constructor(mainTopping) {
        this.bread = 'brown bread'
        this.butter = 'butter'
        this.pickles = 'pickles'
        this.salad = 'salad'
        this.mainTopping = mainTopping
    }
    printRecipe() {
        let intro = '\nBelow are the steps to prepare your sandwich: '
        let step1 = `Spread ${this.butter} on the bottom slice of ${this.bread}.`
        let step2 = `Add ${this.pickles}.`
        let step3 = `Add ${this.salad}.`
        let step4 = `Add ${this.mainTopping}.`
        let step5 = `Spread another layer of ${this.butter} on the top slice of ${this.bread}.\n`
        let step6 = 'Your sandwich is ready!\n'
        let recipe = [intro, step1, step2, step3, step4, step5, step6]
        let orderRecipe = recipe.map((el, i) => i == 0 || i == recipe.length - 1 ? el : `${i}.${el}`).join('\n')
        console.log(orderRecipe)
    }
    calculateSandwichPrice() {
        let menu = {
            'salami': 5,
            'salmon': 6,
            'cheese': 5.5,
        }
        for (let key in menu) {
            if (this.mainTopping == key) return (menu[key])
        }
    }
}