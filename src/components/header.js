import React from "react";
import {Link} from "react-router-dom"
import headerStyle from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <h1><Link to="/about" className={headerStyle.title}>Carlos Lopez</Link></h1>
            
            <nav>
                <ul className={headerStyle.navlist}>
                   
                    <li>
                        <Link className={headerStyle.navitem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navitem} to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navitem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header