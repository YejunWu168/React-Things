import React, { Component } from "react";
import "./styles/App.css";
import AppRouter from "./routers/AppRouter.js";

class App extends Component {
  state = {

  }

  
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
