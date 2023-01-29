import { React, useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([])

  console.log("render");

  // useEffect(() => {
  //   console.log("resource type changed");
  // }, [resourceType]);  // whenever resourceType is changed useEffect takes place

  // useEffect(() => {
  //   console.log("onMount");
  // }, []);  // called once because an empty array never changes


  // useEffect(() => {
  //   console.log("onMount");
  // }, [1, 2, 3]);  // called once because the given array never changes

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default App;
