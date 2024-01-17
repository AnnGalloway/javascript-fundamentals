const sweets = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
    ];

const searchSweets = require('./searchSweets')

describe('searchSweets', () => {
    it('searches Ma,10', () => {
        expect(searchSweets('Ma',10)).toEqual(['Mars', 'Maltesers']);
    })
    it('searches Ma,2', () => {
        expect(searchSweets('Ma',2)).toEqual(['Mars']);
    })
    it('searches S,10', () => {
        expect(searchSweets('S',10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    })
    it('searches S,4', () => {
        expect(searchSweets('S',4)).toEqual(['Skitties', 'Skittles']);
    })
    it('searches ma,10', () => {
        expect(searchSweets('ma',10)).toEqual(['Mars', 'Maltesers']);
    })
})