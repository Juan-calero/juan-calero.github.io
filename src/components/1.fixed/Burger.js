import React, { useState, useEffect } from "react"
import useViewPort from "../utils/useViewPort"
import { sectionsArr } from "../utils/utils"

function Burger() {
  const [isToggled, setIsToggled] = useState(false)
  const { width } = useViewPort()
  const navItems = sectionsArr.map((e) => {
    return (
      <a className="burger__nav--item" href={`#${e}`}>
        {e.replaceAll("_", " ")}
      </a>
    )
  })
  useEffect(() => {
    const some = document.querySelector(".left__social").style
    some.visibility = !isToggled && width < 1200 ? "hidden" : "visible"
    some.transition = !isToggled && width < 1200 ? "all 0s" : "all 4s"
    some.opacity = !isToggled && width < 1200 ? "0" : "1"
  }, [width, isToggled])

  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      className={"burger__bg" + (isToggled ? " burger__active" : "")}
    >
      <aside className="burger__icon">
        <div className="burger__icon--line"></div>
        <div className="burger__icon--line"></div>
        <div className="burger__icon--line"></div>
      </aside>
      {isToggled && (
        <nav data-aos="fade" className="burger__nav">
          {navItems}
        </nav>
      )}
    </div>
  )
}

export default Burger

//SOLVED BUT VERBOSE!
/////////////////////
