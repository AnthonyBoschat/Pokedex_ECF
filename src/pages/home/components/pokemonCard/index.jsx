
import s from "./style.module.scss";
import { ENDPOINTS } from "@constants/endpoints";
import { Link } from "react-router";
import { ROUTES } from "@constants/routes";
import { PokemonTypes } from "@components/pokemonTypes";
import { PokemonImage } from "@components/pokemonImage";

// A card of only one pokemon
export function PokemonCard({pokemon}){

    
    return(
        <Link to={ROUTES.DETAIL.replace(":id", pokemon.id)} className={s.container}>
            <div className={s.image_container}>
                <PokemonImage pokemon={pokemon}/>
            </div>
            <span className={s.id_name}>#{pokemon.id} {pokemon.name}</span>
            <PokemonTypes pokemonTypes={pokemon.types}/>
        </Link>
    )
}