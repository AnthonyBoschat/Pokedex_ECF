import s from "./style.module.scss";

export function FilterInput(){


    return(
        <div className={s.container}>
            <input placeholder="Filter the pokemon list, ex: Pikachu..." className={s.filter} type="text" />
        </div>
    )
}