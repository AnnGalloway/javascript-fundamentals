const Sweet = require('./sweet')
const sweet = new Sweet('Mars', 4.99)

describe('unit tests for Sweet class', () => {
    it('tests sweet.getName()', () => {
        expect(sweet.getName()).toEqual('Mars');
    })
    it('tests sweet.getPrice()', () => {
        expect(sweet.getPrice()).toEqual(4.99);
    })
})