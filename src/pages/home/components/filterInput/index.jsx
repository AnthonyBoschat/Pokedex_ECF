import s from "./style.module.scss";

// The input who can filter the list of the pokemons
export function FilterInput({inputValue, handleChange}){


    return(
        <div className={s.container}>
            <input value={inputValue} onChange={(e) => handleChange(e.target.value)} placeholder="Filter the pokemon list, ex: Pikachu..." className={s.filter} type="text" />
        </div>
    )
}