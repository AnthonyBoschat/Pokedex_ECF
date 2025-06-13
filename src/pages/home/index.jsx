import { useEffect, useState } from "react";
import { FilterInput } from "./components/filterInput";
import { PokemonList } from "./components/pokemonList";
import s from "./style.module.scss";
import { callBackend } from "@services/backend";
import { ENDPOINTS } from "@constants/endpoints";
import { LoadData } from "@services/loadData";

export function HomePage(){

    
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        LoadData.loadPokemons(setPokemons)
    }, [])

    return(
        <div className={s.main_container}>
            
            <FilterInput/>
            <PokemonList pokemons={pokemons}/>
            
        </div>
    )
}