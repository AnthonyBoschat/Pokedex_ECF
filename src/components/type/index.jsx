import { TYPES } from "@constants/types";
import s from "./style.module.scss";
import { stringNormalize } from "@services/normalize";

// Show the name of the pokemon type and add color
export function Types({pokemonTypes}){

    const getTypeColor = (typeName) => {
        const objectColor = TYPES.find(type => stringNormalize(type.name) === stringNormalize(typeName))?.color
        return objectColor

    }
    return(
        <ul className={s.container}>
            {pokemonTypes.map(type => (
                <li key={type} style={{backgroundColor: getTypeColor(type)}}>{type}</li>
            ))}
        </ul>
    )
}