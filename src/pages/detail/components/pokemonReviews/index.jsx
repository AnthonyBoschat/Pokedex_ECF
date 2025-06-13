import { ReviewAddInput } from "../reviewAddInput";
import { ReviewList } from "../reviewList";
import s from "./style.module.scss";

// The reviews section of a pokemon
export function PokemonReviews({reviews, pokemonID, addReview}){

    return(
        <div className={s.container}>
            <h2>Reviews</h2>
            <ReviewAddInput pokemonID={pokemonID} addReview={addReview}/>
            <ReviewList reviews={reviews}/>
        </div>
    )
}