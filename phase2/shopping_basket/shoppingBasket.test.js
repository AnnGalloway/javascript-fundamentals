const ShoppingBasket = require('./shoppingBasket')
const Sweet = require('./sweet')
const sweet = new Sweet('Mars', 4.99)
const basket = new ShoppingBasket()
const basket2 = new ShoppingBasket()

const sweetDouble1 = { getPrice: () => 4.99};
const sweetDouble2 = { getPrice: () => 3.99};

describe('ShoppingBasket integration tests', () => {
    it('getTotalPrice on empty basket = 0', () => {
        expect(basket.getTotalPrice()).toEqual(0);
    })
    it('addItem will result in total price being updated', () => {
        basket.addItem(sweet);
        expect(basket.getTotalPrice()).toEqual(4.99);
    })
    it('adding further items will result in total price being updated again', () => {
        basket.addItem(new Sweet('Skittle', 3.99));
        basket.addItem(new Sweet('Skittle', 3.99));
        expect(basket.getTotalPrice()).toEqual(12.97);
    })
    it('adding discount of 5 will reduce the total price', () => {
        basket.applyDiscount(5.0);
        expect(basket.getTotalPrice()).toEqual(7.97);
    })
})

describe('Shopping Basket Class unit tests', () => {
    it('getTotalPrice on empty basket = 0', () => {
        expect(basket2.getTotalPrice()).toEqual(0);
    })
    it('addItem will result in total price being updated', () => {
        basket2.addItem(sweetDouble1);
        expect(basket2.getTotalPrice()).toEqual(4.99);
    })
    it('adding further items will result in total price being updated again', () => {
        basket2.addItem(sweetDouble2);
        basket2.addItem(sweetDouble2);
        expect(basket2.getTotalPrice()).toEqual(12.97);
    })
})