import { React, useState } from "react";

// classes do not implement hook, they achieve the same thing differently

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");
  // const count = state.count
  // const theme = state.theme

  // const theme = state.theme
  // Gets called only once whenever we update the component
  // const [count, setCount] = useState(() => {
  //   console.log('run function')
  //   return 4
  // })
  function decrementCount() {
    setState((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setState((prevCount) => prevCount + 1);
    setTheme((prevTheme) => "red");
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
