const getPokemon = require('./api');

describe('test getPokemon function', () => {
    it('when I call getPokemon, I get pokemon name back', (done) => {
        getPokemon('charizard').then((pokemon) => {
            expect(pokemon).toEqual({
                name: 'charizard',
                id: 6,
                height: 17,
                weight: 905,
                types: ['fire', 'flying'],
            });
            done();
        });
    });
});
