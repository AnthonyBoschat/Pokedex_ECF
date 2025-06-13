import { ArrowLeft, ArrowRight } from "lucide-react";
import s from "./style.module.scss";
import { useNavigate } from "react-router";
import { ROUTES } from "@constants/routes";

// The arrow than can switch pokemn currently visible in the detail Page
export function SwitchPokemon({pokemonID}){

    const navigate = useNavigate()
    
    const nextPokemonID         = parseInt(pokemonID) + 1
    const previousPokemonID     = parseInt(pokemonID) - 1
    const haveNextPokemon       = nextPokemonID <= 151
    const havePreviousPokemon   = previousPokemonID > 0
    
    return(
        <div className={s.container}>
            <ArrowLeft onClick={() => navigate(ROUTES.DETAIL.replace(":id", previousPokemonID))} size={30} className={`${s.arrow} ${havePreviousPokemon ? null : s.disabled}`} />
            <ArrowRight onClick={() => navigate(ROUTES.DETAIL.replace(":id", nextPokemonID))} size={30} className={`${s.arrow} ${haveNextPokemon ? null : s.disabled}`}  />
        </div>
    )
}