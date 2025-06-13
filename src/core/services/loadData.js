import { ENDPOINTS } from "@constants/endpoints";
import { callBackend } from "./backend";


export class LoadData{

    static async loadPokemons(setState){
        const pokemons = await callBackend({url:ENDPOINTS.GET_POKEMONS})
        setState(pokemons)
    }
}