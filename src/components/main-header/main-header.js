
import Link from "next/link"
import Image from "next/image"
import logoImg from "@/assets/logo.png"

import classes from "./main-header.module.css"
import MainHeaderBackgound from "./main-header-background"
import NavLink from "./nav-link"

const MainHeader = () => {
    


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
                            <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                        <li>
                            <NavLink href="/community">foodies community</NavLink>  
                    </li>
                </ul>
            </nav>
            </header>
        </> 
    )
}

export default MainHeader