const BACKEND_URL = import.meta.env.VITE_BACKEND_URL



export const ENDPOINTS = Object.freeze({
    GET_POKEMONS:`${BACKEND_URL}/pokemons`,
    GET_IMAGE:(pokemonID) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`
})


