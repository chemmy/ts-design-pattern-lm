import React from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search type="user" />
      <Search type="post" />
    </div>
  );
}

export default App;
