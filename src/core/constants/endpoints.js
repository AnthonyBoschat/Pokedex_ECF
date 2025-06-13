const BACKEND_URL = import.meta.env.VITE_BACKEND_URL



// J'ai vu que le GET_POKEMON et ADD_LIKE c'est le même chemin, c'est juste la méthode qui change, mais flemme infinie de factoriser ça. 
// Au pire, je peux dire que c'est plus stbale, au cas ou les routes changerais
export const ENDPOINTS = Object.freeze({
    GET_POKEMONS:`${BACKEND_URL}/pokemons`,
    GET_POKEMON:(pokemonID) => `${BACKEND_URL}/pokemons/${pokemonID}`,
    GET_POKEMON_REVIEW:(pokemonID) => `${BACKEND_URL}/reviews/?pokemonId=${pokemonID}`,
    GET_IMAGE:(pokemonID) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`,

    ADD_REVIEW:`${BACKEND_URL}/reviews/`,
    ADD_LIKE:(pokemonID) => `${BACKEND_URL}/pokemons/${pokemonID}`,
})


