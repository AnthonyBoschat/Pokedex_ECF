import { useParams } from "react-router";
import s from "./style.module.scss";
import { useEffect, useMemo, useState } from "react";
import { LoadData } from "@services/loadData";
import { PokemonImage } from "@components/pokemonImage";
import { PokemonStatistics } from "./components/pokemonStatistics";
import { PokemonReviews } from "./components/pokemonReviews";

export function DetailPage(){

    const {id:pokemonID} = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [reviews, setReviews] = useState([])
    const [ready, setReady]     = useState(false)
    const stats = useMemo(() => pokemon?.base, [pokemon])

    useEffect(() => {
        if(pokemonID){
            LoadData.loadPokemon(setPokemon, pokemonID)
            LoadData.loadPokemonReview(setReviews, pokemonID)
            setReady(true)
        }
    }, [pokemonID])

    useEffect(() => {
        console.log({
            pokemon,
            reviews
        })
    }, [pokemon, reviews])


    if(!ready) return
    return(
        <>
            <PokemonImage />
            <PokemonStatistics pokemon={pokemon} stats={stats}/>
            <PokemonReviews reviews={reviews}/>
        </>
    )
}