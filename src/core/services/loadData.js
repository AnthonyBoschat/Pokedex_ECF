import { ENDPOINTS } from "@constants/endpoints";
import { callBackend } from "./backend";


export class LoadData{

    static async loadPokemons(setState){
        const pokemons = await callBackend({url:ENDPOINTS.GET_POKEMONS})
        setState(pokemons)
    }

    static async loadPokemon(setState, pokemonID){
        const pokemon = await callBackend({url:ENDPOINTS.GET_POKEMON(pokemonID)})
        setState(pokemon)
    }

    static async loadPokemonReview(setState, pokemonID){
        const pokemon = await callBackend({url:ENDPOINTS.GET_POKEMON_REVIEW(pokemonID)})
        setState(pokemon)
    }


}