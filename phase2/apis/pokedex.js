class Pokedex {
    constructor() {
        this.contents = [];
    }

    catch(pokemonName) {
        const pokemon = fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        )
            .then((response) => response.json())
            .then((data) => {
                let pokemonData = createPokedexLog(data);
                this.contents = this.contents.concat(pokemonData);
                console.log('line 14');
                return pokemonData;
            });
        // .then((pokemon) => console.log(pokemon.name));
        // .then((data) => console.log(data))
        // .then((data) => (this.contents = this.contents.concat(data)))
        // .then((data) => console.log(this.contents));
        // this.contents = this.contents.concat(pokemon);
        return pokemon;
    }

    all() {
        console.log(this.contents);
        return this.contents.map((pokemon) => pokemon.name);
    }
}

const createPokedexLog = (pokemonData) => {
    return {
        name: pokemonData.name,
        id: pokemonData.id,
        height: pokemonData.height,
        weight: pokemonData.weight,
        //types: pokemonData.types.map((pokemon) => pokemon.type.name),
    };
};

module.exports = Pokedex;
