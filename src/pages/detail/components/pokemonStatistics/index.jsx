import { PokemonTypes } from "@components/pokemonTypes";
import s from "./style.module.scss";
import background from "@assets/pokeball_bg.svg"
import { PokemonStat } from "../pokemonStat";

export function PokemonStatistics({pokemon, stats}){

    return(
        <div className={s.container}>
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