import { ReviewItem } from "../reviewItem";
import s from "./style.module.scss";

export function ReviewList({reviews}){


    return(
        <ul className={s.container}>
            {reviews.map(review => (
                <ReviewItem key={review.id} review={review}/>
            ))}
        </ul>
    )
}