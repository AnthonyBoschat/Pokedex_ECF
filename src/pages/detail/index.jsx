import { useNavigate, useParams } from "react-router";
import s from "./style.module.scss";
import { useEffect, useMemo, useState } from "react";
import { LoadData } from "@services/loadData";
import { PokemonImage } from "@components/pokemonImage";
import { PokemonDescription } from "./components/pokemonDescription";
import { PokemonReviews } from "./components/pokemonReviews";
import { SwitchPokemon } from "./components/pokemonSwitch";
import { ROUTES } from "@constants/routes";

// The detail page of a pokemon
export function DetailPage(){

    const {id:pokemonID} = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [reviews, setReviews] = useState([])
    const stats = useMemo(() => pokemon?.base, [pokemon])
    const navigate = useNavigate()

    useEffect(() => {
        if(pokemonID){
            LoadData.loadPokemon(setPokemon, pokemonID, () => navigate(ROUTES.NOTFOUND))
            LoadData.loadPokemonReview(setReviews, pokemonID)
        }
    }, [pokemonID])

    const addReview = (newReview) => {
        setReviews(current => [...current, newReview])
    }

    const addLike = async(newLikeCount) => {
        setPokemon(current => ({...current, like:newLikeCount}))
    }



    return(
        <>
            <div className={s.container}>
                <SwitchPokemon pokemonID={pokemonID}/>
                {pokemon && <PokemonImage pokemon={pokemon} />}
                {(stats && pokemon) && <PokemonDescription addLike={addLike} pokemon={pokemon} stats={stats}/>}
                <PokemonReviews addReview={addReview} pokemonID={pokemonID} reviews={reviews}/>
            </div>
        </>
    )
}