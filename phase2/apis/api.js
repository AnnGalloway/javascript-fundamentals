const getPokemon = (pokemonName) => {
    const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => createPokedexLog(data));

    return pokemon;
};

const createPokedexLog = (pokemonData) => {
    return {
        name: pokemonData.name,
        id: pokemonData.id,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types.map((pokemon) => pokemon.type.name),
    };
};

module.exports = getPokemon;
