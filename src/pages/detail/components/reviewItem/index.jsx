import s from "./style.module.scss";

export function ReviewItem({review}){


    return(
        <div className={s.container}>
            <span className={s.content}>{review.content}</span>
            <span className={s.author}>Posted by : {review.author}</span>
        </div>
    )
}