import React from "react"
import MyLogo from "../../img/JCLOGO.png"
import leftSocial from "../utils/leftSocial"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"

function FixedLeft() {
  const mappedSocialIcons = leftSocial.map(({ target, href, src }, index) => {
    return (
      <a key={index} rel="noopener noreferrer" target={target} href={href}>
        <img src={src} alt="" />
      </a>
    )
  })

  return (
    <div className="fixed__left">
      <img src={MyLogo} alt="" className="left__jclogo" />
      <div className="fixed__social">
        <nav
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          className="left__social"
        >
          {mappedSocialIcons}
        </nav>
        <aside className="left__lines">
          <div className="left__lines--line1"></div>
          <div className="left__lines--line2"></div>
          <div className="left__lines--line3"></div>
        </aside>
      </div>
    </div>
  )
}

export default FixedLeft

/////NEEDS REFACTORING
