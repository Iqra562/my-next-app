
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import classes from '@/components/main-header/main-header.module.css'
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "./nav-link";
export default function MainHeader(){
    return   (
<>
<MainHeaderBackground/>

<header className={classes.header}>
        <Link href='/' className={classes.logo}>
        <img  src={logoImg.src}/>   
        A Next level of food   </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href='/meals'>Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href='/community' >Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header></>
    )
   
}