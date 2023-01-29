import { React, useState, useEffect } from "react";

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div>{windowWidth}</div>
  )
}

export default App;
