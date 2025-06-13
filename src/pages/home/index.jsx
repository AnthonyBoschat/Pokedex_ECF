import { FilterInput } from "./components/filterInput";
import { PokemonList } from "./components/pokemonList";
import s from "./style.module.scss";

export function HomePage(){


    return(
        <div className={s.main_container}>
            
            <FilterInput/>
            <PokemonList pokemons={[]}/>
            
        </div>
    )
}