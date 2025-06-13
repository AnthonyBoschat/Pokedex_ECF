import s from "./style.module.scss";

export function HomePage(){


    return(
        <div className={s.main_container}>
            
            <input className={s.filter} type="text" />

            <ul className={s.pokemon_list}>
                <li>aaa</li>
            </ul>
        </div>
    )
}