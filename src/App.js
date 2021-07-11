import "./App.css"
import Fold from "./components/2.fold/Fold"
import Sobre from "./components/3.sobre/Sobre"
import Contact from "./components/7.contact/Contact"
import OQueFaco from "./components/4.oQueFaco/OQueFaco"
import Experiencia from "./components/5.experiencia/Experiencia"
import Projetos from "./components/6.projetos/Projetos"
import Fixed from "./components/1.fixed/Fixed"
import AOS from "aos"
import "aos/dist/aos.css"
import Cursor from "./components/utils/Cursor"
import React from "react"
import useViewPort from "./components/utils/useViewPort"

function App() {
  AOS.init({ duration: 1000, offset: 200 })
  const { width } = useViewPort()

  function handleMouse(e) {
    const { style } = document.querySelector(".cursor--center")
    style.left = `${e.pageX}px`
    style.top = `${e.pageY}px`
    setTimeout(() => {
      const { style } = document.querySelector(".cursor--ring")
      style.left = `${e.pageX}px`
      style.top = `${e.pageY}px`
    }, 20)
  }

  return (
    <div
      onMouseMove={(e) => {
        width > 1200 && handleMouse(e)
      }}
    >
      {width > 1200 && (
        <React.Fragment>
          <Cursor />
        </React.Fragment>
      )}
      <Fixed />
      <Fold />
      <Sobre />
      <OQueFaco />
      <Experiencia />
      <Projetos />
      <Contact />
    </div>
  )
}

export default App
