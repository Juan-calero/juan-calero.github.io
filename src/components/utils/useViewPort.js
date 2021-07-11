import { useState, useEffect } from "react"

const useViewPort = () => {
  const [width, setWidth] = useState()
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return { width }
}

export default useViewPort
