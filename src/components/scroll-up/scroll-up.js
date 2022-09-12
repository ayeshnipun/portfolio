import React, { useEffect, useState } from "react"

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toogleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility)

    return () => {
      window.removeEventListener("scroll", toogleVisibility)
    }
  }, [])

  return (
    <>{isVisible ? <button className="scroll-up" onClick={scrollToTop}>^</button> : <span></span>}</>
  )
}

export default ScrollUp
