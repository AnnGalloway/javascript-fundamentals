const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('checks 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    })
    it('checks 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    })
    it('checks 8', () => {
        expect(fizzbuzz(8)).toBe(8);
    })
    it('checks 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    })
    it('checks 18', () => {
        expect(fizzbuzz(18)).toBe('Fizz');
    })
    it('checks 20', () => {
        expect(fizzbuzz(20)).toBe('Buzz');
    })
})