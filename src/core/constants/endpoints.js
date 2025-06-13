const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
console.log(BACKEND_URL)
export const ENDPOINTS = Object.freeze({
    GET_POKEMONS:`${BACKEND_URL}/pokemons`
})


