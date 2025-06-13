import s from "./style.module.scss";

export function ReviewAddInput(){


    return(
        <form className={s.container}>
            <textarea name='content' className={s.textarea} type="text" placeholder="Add a review..." />
            <input className={s.submit} type="submit" />
        </form>
    )
}