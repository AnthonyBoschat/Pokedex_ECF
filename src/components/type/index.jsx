import { TYPES } from "@constants/types";
import s from "./style.module.scss";
import { stringNormalize } from "@services/normalize";

// Show the name of the pokemon type and add color
export function Types({pokemonTypes}){

    return(
        <ul className={s.container}>
            {pokemonTypes.map(type => (
                <li key={type} style={{backgroundColor: TYPES[stringNormalize(type)]}}>{type}</li>
            ))}
        </ul>
    )
}