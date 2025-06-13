import { Heart } from "lucide-react";
import s from "./style.module.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { callBackend } from "@services/backend";
import { ENDPOINTS } from "@constants/endpoints";

export function PokemonLike({pokemonLikeCount, addLike, pokemonID}){

    const animationDuration = 200
    const [liked, setLiked] = useState(false)

    const handleClick = async() => {
        const newLikeCount = pokemonLikeCount + 1
         const response = await callBackend({
            url:ENDPOINTS.ADD_LIKE(pokemonID),
            method:"PATCH",
            body:{
                like : newLikeCount
            },
            errorReturn:false
        })
        if(response){
            addLike(newLikeCount)
            setLiked(true)
        }else{
            toast.error("A problem occured, please try later")
        }
    }

    useEffect(() => {
        if(liked){
            setTimeout(() => {
                setLiked(false)
            }, animationDuration);
        }
    }, [liked])

    return(
        <div className={s.container}>
            {pokemonLikeCount}
            <Heart onClick={handleClick} className={`${s.button} ${liked ? s.liked : null}`} fill="red" stroke="black" />
        </div>
    )
}