import { ReviewAddInput } from "../reviewAddInput";
import { ReviewList } from "../reviewList";
import s from "./style.module.scss";

export function PokemonReviews({reviews, pokemonID}){

    console.log(reviews)
    return(
        <div className={s.container}>
            <h2>Reviews</h2>
            <ReviewAddInput/>
            <ReviewList reviews={reviews}/>
        </div>
    )
}