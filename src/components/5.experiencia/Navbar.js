import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function Navbar() {
  const [skill, setSkill] = useState(0)

  useEffect(() => {
    let svgs = document.querySelectorAll(`[skill="${skill}"]`)
    svgs.forEach((e) => e.classList.add("activeSVG"))
    return () => {
      svgs.forEach((e) => e.classList.remove("activeSVG"))
    }
  }, [skill])
  return (
    <div className="skills__navbar">
      <button
        tabIndex="0"
        onClick={() => {
          setSkill(0)
        }}
        className={!skill ? "skills__active" : "skills__navbar--p"}
      >
        Código
      </button>
      <button
        tabIndex="0"
        onClick={() => {
          setSkill(1)
        }}
        className={skill === 1 ? "skills__active" : "skills__navbar--p"}
      >
        Design
      </button>
      <button
        tabIndex="0"
        onClick={() => {
          setSkill(2)
        }}
        className={skill === 2 ? "skills__active" : "skills__navbar--p"}
      >
        Ferramentas
      </button>
    </div>
  )
}

export default Navbar
