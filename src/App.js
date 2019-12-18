import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Body />
      </header>
    </div>
  );
}

export default App;
