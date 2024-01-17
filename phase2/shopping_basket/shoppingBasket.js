class ShoppingBasket{
    constructor(contents = []){
        this.contents = contents;
        this.discount = 0;
    }

    applyDiscount(discount){
        this.discount = discount;
    }

    getTotalPrice(){
        let totalPrice = 0;
        this.contents.forEach((sweet) => {
            totalPrice += sweet.getPrice();
        })
        return totalPrice - this.discount;
    }

    addItem(sweet){
        this.contents = this.contents.concat(sweet)
    }
}

module.exports = ShoppingBasket;