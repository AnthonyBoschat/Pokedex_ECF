import { PokemonTypes } from "@components/pokemonTypes";
import s from "./style.module.scss";
import { PokemonStat } from "../pokemonStat";
import { PokemonLike } from "../pokemonLike";

// The description section of a pokemon
export function PokemonDescription({pokemon, stats, addLike}){

    return(
        <div className={s.container}>
            <PokemonLike addLike={addLike} pokemonLikeCount={pokemon.like} pokemonID={pokemon.id}/>
            <div className={s.name}>{pokemon.name}</div>
            <div className={s.type}><PokemonTypes pokemonTypes={pokemon.types}/></div>
            <ul className={s.stats}>
                {Object.entries(stats).map((stat) => (
                    <PokemonStat key={stat[0]} stat={stat}/>
                ))}
            </ul>
        </div>
    )
}