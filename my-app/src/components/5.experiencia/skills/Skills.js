import React from 'react'
import Ferramentas from './Ferramentas'
import Navbar from './navbar/Navbar'
import HtmlIcon from '../../../icons/html_logo.png'
import CssIcon from '../../../icons/css_logo.png'
import JsIcon from '../../../icons/js_logo.png'
import SassIcon from '../../../icons/1200px-Sass_Logo_Color.svg.png'
import ReactIcon from '../../../icons/react_logo.png'

function Skills() {
    return (
        <div className="skills">
            <h3>skills</h3>
            <div className="skills__content">
                <Navbar />
                <Ferramentas
                    icon1={HtmlIcon}
                    icon2={CssIcon}
                    icon3={JsIcon}
                    icon4={SassIcon}
                    icon5={ReactIcon}
                />
            </div>
        </div>
    )
}

export default Skills
