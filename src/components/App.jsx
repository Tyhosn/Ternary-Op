import React from "react";
import Login from "./Login";

var loggedIn = true;

function App() {
  return (
    <div className="container">{loggedIn ? <h1>Hello</h1> : <Login />} </div>
  );
}

export default App;
