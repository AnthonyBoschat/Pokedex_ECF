import { useParams } from "react-router";
import s from "./style.module.scss";
import { useEffect, useMemo, useState } from "react";
import { LoadData } from "@services/loadData";
import { PokemonImage } from "@components/pokemonImage";
import { PokemonStatistics } from "./components/pokemonStatistics";
import { PokemonReviews } from "./components/pokemonReviews";
import { SwitchPokemon } from "./components/pokemonSwitch";

export function DetailPage(){

    const {id:pokemonID} = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [reviews, setReviews] = useState([])
    const stats = useMemo(() => pokemon?.base, [pokemon])

    useEffect(() => {
        if(pokemonID){
            LoadData.loadPokemon(setPokemon, pokemonID)
            LoadData.loadPokemonReview(setReviews, pokemonID)
        }
    }, [pokemonID])

    const addReview = (newReview) => {
        setReviews(current => [...current, newReview])
    }



    return(
        <>
            <div className={s.container}>
                <SwitchPokemon pokemonID={pokemonID}/>
                {pokemon && <PokemonImage pokemon={pokemon} />}
                {(stats && pokemon) && <PokemonStatistics pokemon={pokemon} stats={stats}/>}
                <PokemonReviews addReview={addReview} pokemonID={pokemonID} reviews={reviews}/>
            </div>
        </>
    )
}