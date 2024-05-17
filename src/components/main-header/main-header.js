import Link from "next/link"

import Image from "next/image"
import logoImg from "@/assets/logo.png"

import classes from "./main-header.module.css"
import MainHeaderBackgound from "./main-header-background"

const MainHeader=() => {
    return (
        <>
        <MainHeaderBackgound/>    
        <header className={classes.header}>
            <Link className={classes.logo} href="/"      >
                <Image  src={logoImg} alt="logo" priority/>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">foodies community</Link>
                    </li>
                </ul>
            </nav>
            </header>
        </> 
    )
}

export default MainHeader