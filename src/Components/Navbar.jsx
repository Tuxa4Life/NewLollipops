import React from "react";
import styles from "../Assets/Styles/Navbar.css"
import Link from "./Link"

const Navbar = () => {
    return (
        <nav style={styles}>
            <ul>
                <li><h1><Link href='/'>Lollipops</Link></h1></li>
                <li><Link href='/'>მთავარი</Link></li>
                <li><Link href='/photosessions'>ფოტოსესიები</Link></li>
                <li><Link href='/location'>მისამართი</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;