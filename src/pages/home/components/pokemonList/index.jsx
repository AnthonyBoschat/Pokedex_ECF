import { Error } from "@components/error";
import { PokemonCard } from "../pokemonCard";
import s from "./style.module.scss";

// The list of the pokemons
export function PokemonList({pokemons,filterInputValue}){


    return(
        <ul className={s.container}>
            {!pokemons.length
                ? <Error>No pokemon found with `{filterInputValue}`</Error>
                : pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                ))
            }
        </ul>
    )
}