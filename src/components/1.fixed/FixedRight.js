import React from "react"
import { useState, useEffect } from "react"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"
import { sectionsArr } from "../utils/utils"

function FixedRight() {
  const [name, setName] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    sectionsArr.map((sectionName) => {
      const section = document.getElementById(sectionName)
      const sectionTop = section.getBoundingClientRect().top
      const dot = document.querySelector(`[dot=${sectionName}]`)

      sectionTop < 400 && sectionTop >= 400 - section.scrollHeight
        ? dot.classList.add("active")
        : dot.classList.remove("active")
    })
  }

  const mapped = sectionsArr.map((e, index) => {
    return (
      <div
        key={index}
        dot={e}
        onClick={() => {
          setName(e)
          window.location.replace(`/#${e}`)
        }}
        className={"fixed__right--dot" + (name === e ? " active" : "")}
      ></div>
    )
  })
  return (
    <aside
      className="fixed__right"
      onMouseEnter={cursorHoverBig}
      onMouseLeave={cursorHoverSmall}
    >
      {mapped}
    </aside>
  )
}

export default FixedRight

///////////////////////////////
//NEEDS REFACTORING
