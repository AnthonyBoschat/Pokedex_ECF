import { Error } from "@components/error";
import { ReviewItem } from "../reviewItem";
import s from "./style.module.scss";

// Display the list of review about a pokemon
export function ReviewList({reviews}){


    return(
        <ul className={s.container}>
            {!reviews.length 
            
                ? <Error>(No review yet)</Error>
                : reviews.map(review => (
                    <ReviewItem key={review.id} review={review}/>
                ))
                
            }
            
        </ul>
    )
}