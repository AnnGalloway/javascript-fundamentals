const Pokedex = require('./pokedex');
const pokedex = new Pokedex();

describe('Test a pokedex class', () => {
    it('Tests an all method, returns an empty array', () => {
        expect(pokedex.all()).toEqual([]);
    });
    it('Tests a catch method, all returns pokemon names array in the pokedex', () => {
        return pokedex.catch('pikachu').then(() => {
            expect(pokedex.all()).toEqual(['pikachu']);
        });
    });
    it('Tests catching a second pokemon, this is reflected in #all.', () => {
        return pokedex.catch('jigglypuff').then(() => {
            expect(pokedex.all()).toEqual(['pikachu', 'jigglypuff']);
            
        });
    });
    it('Test #all returns an array of pokemon names', () => {
        expect(pokedex.all()).toEqual(['pikachu', 'jigglypuff']);
    });
});
