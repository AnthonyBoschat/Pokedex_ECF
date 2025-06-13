import { useEffect, useMemo, useState } from "react";
import { FilterInput } from "./components/filterInput";
import { PokemonList } from "./components/pokemonList";
import s from "./style.module.scss";
import { LoadData } from "@services/loadData";
import { stringNormalize } from "@services/normalize";


// The home page of the application, contains the list of the pokemon and a filterInput
export function HomePage(){

    const isMatchingFilterInput = (pokemonName, pokemonTypes) => {
        const normalizedInput = stringNormalize(filterInputValue)
        if (stringNormalize(pokemonName).includes(normalizedInput)) {
            return true
        }
        return pokemonTypes.some(type =>
            stringNormalize(type).includes(normalizedInput)
        )
    }
    
    const [pokemons, setPokemons] = useState([])
    const [filterInputValue, setFilterInputValue] = useState("")
    const filteredPokemons = useMemo(() => pokemons.filter(pokemon => isMatchingFilterInput(pokemon.name, pokemon.types)),[filterInputValue, pokemons])

    useEffect(() => {
        LoadData.loadPokemons(setPokemons)
    }, [])

    

    return(
        <div className={s.main_container}>
            
            <FilterInput inputValue={filterInputValue} handleChange={value => setFilterInputValue(value)}/>
            <PokemonList pokemons={filteredPokemons} filterInputValue={filterInputValue}/>
            
            
        </div>
    )
}