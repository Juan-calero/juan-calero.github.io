import React, { useEffect, useState } from "react"
import { matrixArr } from "../utils/utils"

function Matrix() {
  const [codeLine, setCodeLine] = useState([])
  let count = 0

  const matrixInterval = () => {
    setCodeLine(matrixArr[count % 4])
    count++
  }
  const map = codeLine.map((e, index) => {
    return (
      <p key={index} className="matrix__box--line">
        {e}
      </p>
    )
  })
  useEffect(() => {
    setInterval(matrixInterval, 350)
  }, [])

  return <div className="matrix__box">{map}</div>
}

export default Matrix
