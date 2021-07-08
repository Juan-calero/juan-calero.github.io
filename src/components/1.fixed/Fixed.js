import React from "react"
import FixedRight from "./FixedRight"
import FixedLeft from "./FixedLeft"
import Burger from "./Burger"

function Fixed() {
  return (
    <React.Fragment>
      <aside className="fixed__bg"></aside>
      <Burger />
      <FixedLeft />
      <FixedRight />
    </React.Fragment>
  )
}

export default Fixed

//NEEDS REFACTORING
