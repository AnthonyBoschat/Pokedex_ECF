import s from "./style.module.scss";

export function Error({children}){


    return(
        <span className={s.error}>
            {children}
        </span>
    )
}