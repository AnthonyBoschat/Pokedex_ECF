import { Logo } from "@components/logo";
import s from "./style.module.scss";

export function Header(){


    return(
        <header className={s.container}>
            <Logo/>
        </header>
    )
}