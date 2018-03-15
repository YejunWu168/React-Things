import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/fonts.css";
import "./styles/index.css";
import AppRouter from "./routers/AppRouter";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
