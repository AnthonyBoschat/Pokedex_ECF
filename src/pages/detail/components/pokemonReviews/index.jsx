import { ReviewAddInput } from "../reviewAddInput";
import { ReviewList } from "../reviewList";
import s from "./style.module.scss";

export function PokemonReviews(){


    return(
        <div className={s.container}>
            <h2>Reviews</h2>
            <ReviewAddInput/>
            <ReviewList reviews={[]}/>
        </div>
    )
}