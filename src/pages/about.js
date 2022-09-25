import React from "react";

import aboutStyles from "../styles/about.module.scss"

const About = () => {
    return (
        <div>
        <p className={aboutStyles.intro}>Hello I'm Carlos Lopez, 
            I love tech and learn about different
             technologies and programming languages like Python, JavaScript, 
             Golang and use them in different situations like using python 
             for data analysis or just webscrapping or  like right now use JavaScript it for web development.
        </p>
        <p className={aboutStyles.intro}> I have studied electronics 
             engineering but right now I am more 
             into web development and software 
             development. 
        </p>
        </div>
        
    )
}

export default About