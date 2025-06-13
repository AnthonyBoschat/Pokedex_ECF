const BACKEND_URL = import.meta.env.VITE_BACKEND_URL



export const ENDPOINTS = Object.freeze({
    GET_POKEMONS:`${BACKEND_URL}/pokemons`,
    GET_POKEMON:(pokemonID) => `${BACKEND_URL}/pokemons/${pokemonID}`,
    GET_POKEMON_REVIEW:(pokemonID) => `${BACKEND_URL}/reviews/?pokemonId=${pokemonID}`,
    GET_IMAGE:(pokemonID) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`,

    ADD_REVIEW:`${BACKEND_URL}/reviews/`,
})


