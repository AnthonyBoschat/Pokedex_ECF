import { Error } from "@components/error";
import { ReviewItem } from "../reviewItem";
import s from "./style.module.scss";

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