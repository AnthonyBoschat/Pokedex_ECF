import { Heart } from "lucide-react";
import s from "./style.module.scss";
import { useEffect, useState } from "react";

export function PokemonLike({pokemonLikeCount, onLikeClick}){

    const animationDuration = 200
    const [liked, setLiked] = useState(false)

    const handleClick = async() => {
        const success = await onLikeClick(pokemonLikeCount + 1)
        if(success){
            setLiked(true)
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