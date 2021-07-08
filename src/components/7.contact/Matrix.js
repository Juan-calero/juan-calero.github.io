import React, { useEffect, useState } from "react"
import { matrixArr } from "../utils/utils"

function Matrix() {
  const [codeLine, setCodeLine] = useState(null)

  const matrixInterval = () => {
    setCodeLine(() => {
      const count = matrixArr[Math.floor(Math.random() * matrixArr.length)]
      return <p className="matrix__line">{count}</p>
    })
  }

  useEffect(() => {
    setInterval(matrixInterval, 350)
    return () => {
      clearInterval(matrixInterval, 350)
    }
  }, [])

  return <React.Fragment>{codeLine}</React.Fragment>
}

export default Matrix
