import { stringNormalize } from "@services/normalize";
import s from "./style.module.scss";
import { MAX_STAT } from "@constants/stats";

// The statistic of a pokemon
export function PokemonStat({stat}){

    const statName      = stat[0]
    const statValue     = stat[1]
    const maxStatValue  = MAX_STAT[stringNormalize(statName)]

    const percentageOfStat = (statValue * 100) / maxStatValue
    const hue = 240 - (120 * (percentageOfStat / 100));

    return(
        <div className={s.container}>

            <div className={s.name}>{statName}</div>
            <div className={s.value}>{statValue}</div>
            <div className={s.bar}>
                <div style={{
                    width:`${percentageOfStat}%`,
                    backgroundColor: `hsl(${hue}, 60%, 50%)`
                }} className={s.level}></div>
            </div>
        </div>
    )
}