import { PokemonCard } from "../pokemonCard";
import s from "./style.module.scss";

export function PokemonList({pokemons}){


    return(
        <ul className={s.container}>
            {pokemons.map(pokemon => (
                <PokemonCard pokemon={pokemon}/>
            ))}
        </ul>
    )
}