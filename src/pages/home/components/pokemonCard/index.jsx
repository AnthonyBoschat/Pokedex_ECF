import { Types } from "@components/type";
import s from "./style.module.scss";
import { ENDPOINTS } from "@constants/endpoints";
import { Link } from "react-router";
import { ROUTES } from "@constants/routes";

// A card of only one pokemon
export function PokemonCard({pokemon}){

    
    return(
        <Link to={ROUTES.DETAIL.replace(":id", pokemon.id)} className={s.container}>
            <div className={s.image_container}>
                <img src={ENDPOINTS.GET_IMAGE(pokemon.id)} alt={`image of ${pokemon.name}`} />
            </div>
            <span className={s.id_name}>#{pokemon.id} {pokemon.name}</span>
            <Types pokemonTypes={pokemon.types}/>
        </Link>
    )
}