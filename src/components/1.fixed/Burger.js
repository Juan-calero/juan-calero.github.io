import React, { useState, useEffect } from "react"
import useViewPort from "../utils/useViewPort"
import { sectionsArr } from "../utils/utils"

function Burger() {
  const [isToggled, setIsToggled] = useState(false)
  const { width } = useViewPort(isToggled)
  const navItems = sectionsArr.map((e, index) => {
    return (
      <a className="burger__nav--item" key={index} href={`#${e}`}>
        {e.replaceAll("_", " ")}
      </a>
    )
  })
  useEffect(() => {
    const { style } = document.querySelector(".left__social")
    style.visibility = !isToggled && width < 1200 ? "hidden" : "visible"
    style.transition = !isToggled && width < 1200 ? "all 0s" : "all 4s"
    style.opacity = !isToggled && width < 1200 ? "0" : "1"
  }, [width, isToggled])

  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      className={`burger__bg ${isToggled && " burger__active"}`}
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
