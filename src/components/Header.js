import React from "react";
import { Circle } from "rc-progress";
import "../styles/Header.css";

const Header = props => (
  <header>
    <div className="progress-container">
      <Circle percent={props.progress} strokeWidth="7" trailWidth="7" strokeColor={props.progressColor()} />
    </div>
    <h1 className="title">{props.title}</h1>
  </header>
);

export default Header;
