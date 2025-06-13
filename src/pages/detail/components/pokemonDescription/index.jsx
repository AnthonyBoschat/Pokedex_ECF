import { PokemonTypes } from "@components/pokemonTypes";
import s from "./style.module.scss";
import background from "@assets/pokeball_bg.svg"
import { PokemonStat } from "../pokemonStat";
import { PokemonLike } from "../pokemonLike";

// The description section of a pokemon
export function PokemonDescription({pokemon, stats, onLikeClick}){

    return(
        <div className={s.container}>
            <PokemonLike onLikeClick={onLikeClick} pokemonLikeCount={pokemon.like}/>
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