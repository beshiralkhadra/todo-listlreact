import React, { Component } from "react";
import "./App.css";
import ToDo from "./components/ToDo";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>To Do List</h1>
        <ToDo />
      </div>
    );
  }
}

export default App;
