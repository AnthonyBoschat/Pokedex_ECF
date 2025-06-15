import { Link } from "react-router";
import s from "./style.module.scss";
import notfound from "@assets/notfound.png"
import { ROUTES } from "@constants/routes";

export function NotFound(){


    return(
        <div className={s.container}>
            <h1>404</h1>
            <h2>This page doesn't exist</h2>
            <Link to={ROUTES.HOME}>Comeback home</Link>
            <img src={notfound}/>
        </div>
    )
}