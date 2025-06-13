import { callBackend } from "@services/backend";
import s from "./style.module.scss";
import { ENDPOINTS } from "@constants/endpoints";

export function PokemonCard({pokemon}){

    return(
        <li className={s.container}>
            <div className={s.image_container}>
                <img src={ENDPOINTS.GET_IMAGE(pokemon.id)} alt={`image of ${pokemon.name}`} />
            </div>
            <span className={s.id_name}>#{pokemon.id} {pokemon.name}</span>

        </li>
    )
}