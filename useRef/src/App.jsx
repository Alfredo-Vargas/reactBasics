import { React, useState, useEffect, useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  const prevName = useRef('')

  // Never do the following: (infinite loop!)
  // const [renderCount, setRenderCount] = useState(0)
  // useEffect(() => {
  //   setRenderCount(prevRenderCount => prevRenderCount + 1)
  // })

  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current = renderCount.current + 1
    prevName.current = name
  }, [name])

  function focus() {
    // console.log(inputRef.current)
    inputRef.current.focus()

  }

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it usedt to be {prevName.current}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App
