import { ENDPOINTS } from "@constants/endpoints";
import s from "./style.module.scss";

export function PokemonImage({pokemon}){

    console.log("debug pokemon", pokemon)

    return(
        <img src={ENDPOINTS.GET_IMAGE(pokemon.id)} alt={`image of ${pokemon.name}`} />
    )
}