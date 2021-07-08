import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function Navbar() {
  const [skill, setSkill] = useState("")

  useEffect(() => {
    let svgs = document.querySelectorAll(`[skill="${skill}"]`)
    svgs.forEach((e) => e.classList.add("activeSVG"))
    return () => {
      svgs.forEach((e) => e.classList.remove("activeSVG"))
    }
  }, [skill])
  return (
    <div className="skills__navbar">
      <span
        tabIndex="0"
        onMouseEnter={() => {
          setSkill("desen")
        }}
        onMouseLeave={() => setSkill("")}
        className="skills__navbar--p"
      >
        Desenvolvimento
      </span>
      <span
        tabIndex="0"
        onMouseEnter={() => {
          setSkill("design")
        }}
        onMouseLeave={() => setSkill("")}
        className="skills__navbar--p"
      >
        Design
      </span>
      <span
        tabIndex="0"
        onMouseEnter={() => {
          setSkill("tools")
        }}
        onMouseLeave={() => setSkill("")}
        className="skills__navbar--p"
      >
        Ferramentas
      </span>
    </div>
  )
}

export default Navbar

/// CAN I REFACTOR THIS BETTER?
//////////////////////////////////////////
/////////////////////////////////////////
