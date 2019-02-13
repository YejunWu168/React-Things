import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import './styles/main.scss';
import Root from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
registerServiceWorker();
