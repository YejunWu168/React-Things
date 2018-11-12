import React, { Component } from "react";
import AppRouter from "./routers/AppRouter.js";

import { Provider } from "react-redux";
import store from './store';

class App extends Component {

  render() {
    return (
    <Provider store={ store }>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
    );
  }
}

export default App;
