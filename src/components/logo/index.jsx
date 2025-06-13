import s from "./style.module.scss";
import pokeball from "@assets/pokeball.png";
import pokedex from "@assets/pokedex.png";
import { ROUTES } from "@constants/routes";
import { Link } from "react-router";

// The logo of the application
export function Logo(){


    return(
        <Link to={ROUTES.HOME} className={s.container}>
            <img className={s.pokeball} src={pokeball} alt="" />
            <img className={s.pokedex} src={pokedex} alt="" />
        </Link>
    )
}