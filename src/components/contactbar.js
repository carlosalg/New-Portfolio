import React from "react";

import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

import contactStyles from "./contactbar.module.scss"

const contactBar = () => {
    return (
        <nav>
            <ul className={contactStyles.itemblock}>
                <li className={contactStyles.item}>
                    <a className={contactStyles.linker} href="https://twitter.com/carloos15lcc" target="_blank" rel="noreferrer"><FaTwitter/> Carlos Lopez</a>
                </li>
                <li className={contactStyles.item}>
                    <a className={contactStyles.linker} href="https://www.linkedin.com/in/carlos-lopez-486a1923a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEQZEQiefSwWo4xux7%2BXYRQ%3D%3D" target="_blank" rel="noreferrer"><FaLinkedin/> Carlos Lopez</a>
                </li>
                <li className={contactStyles.item}>
                    <a className={contactStyles.linker} href="https://github.com/carlosalg" target="_blank" rel="noreferrer"><FaGithub/> Carlos Lopez</a>
                </li>
                <li className={contactStyles.item}>
                    <a className={contactStyles.linker} href="mailto:carloos15lcc@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope/> Carlos Lopez</a>
                </li>
            </ul>
        </nav>
    )
}

export default contactBar

