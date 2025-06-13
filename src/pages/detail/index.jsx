import { useParams } from "react-router";
import s from "./style.module.scss";
import { useEffect, useMemo, useState } from "react";
import { LoadData } from "@services/loadData";
import { PokemonImage } from "@components/pokemonImage";
import { PokemonDescription } from "./components/pokemonDescription";
import { PokemonReviews } from "./components/pokemonReviews";
import { SwitchPokemon } from "./components/pokemonSwitch";
import { callBackend } from "@services/backend";
import { ENDPOINTS } from "@constants/endpoints";
import { toast } from "react-toastify";

// The detail page of a pokemon
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

    const addLike = async(newLikeCount) => {
        const response = await callBackend({
            url:ENDPOINTS.ADD_LIKE(pokemon.id),
            method:"PATCH",
            body:{
                like:newLikeCount
            },
            errorReturn:false
        })
        if(response){
            setPokemon(current => ({...current, like:newLikeCount}))
            return true
        }else{
            toast.error("A problem occured, please try later")
        }
    }



    return(
        <>
            <div className={s.container}>
                <SwitchPokemon pokemonID={pokemonID}/>
                {pokemon && <PokemonImage pokemon={pokemon} />}
                {(stats && pokemon) && <PokemonDescription onLikeClick={addLike} pokemon={pokemon} stats={stats}/>}
                <PokemonReviews addReview={addReview} pokemonID={pokemonID} reviews={reviews}/>
            </div>
        </>
    )
}