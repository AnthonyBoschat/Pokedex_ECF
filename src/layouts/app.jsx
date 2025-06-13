import { Header } from "@containers/header";
import { Outlet } from "react-router";
import s from "./style.module.scss"

export function AppLayout(){


    return(
        <main className={s.main_container}>
            <Header/>
            <Outlet/>
        </main>
    )
}