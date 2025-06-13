import { useParams } from "react-router";
import s from "./style.module.scss";
import { useEffect, useMemo, useState } from "react";
import { LoadData } from "@services/loadData";

export function DetailPage(){

    const {id:pokemonID} = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [reviews, setReviews]  = useState([])
    const stats = useMemo(() => pokemon?.base, [pokemon])

    useEffect(() => {
        if(pokemonID){
            LoadData.loadPokemon(setPokemon, pokemonID)
            LoadData.loadPokemonReview(setReviews, pokemonID)
        }
    }, [pokemonID])

    useEffect(() => {
        console.log({
            pokemon,
            reviews
        })
    }, [pokemon, reviews])

    
    return(
        <>
            DetailPage {pokemonID}
        </>
    )
}