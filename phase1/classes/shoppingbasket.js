class ShoppingBasket {
    constructor(contents = []){
        this.contents = contents;
    }

    addItem(sweet) {
        this.contents = this.contents.concat(sweet);
    }

    getNames(){
        return this.contents.map((sweet) => sweet.getName());
    }

    getTotalPrice() {
        let sum = 0;
        this.contents.forEach((sweet) => {
            sum += sweet.getPrice();
        });
        return sum;
    }
}

module.exports = ShoppingBasket;