import React from "react";
import { Circle } from "rc-progress";

const Header = props => (
  <header>
    <div className="progress-container">
      <Circle percent={props.progress} strokeWidth="7" trailWidth="7" strokeColor={props.progressColor()} />
    </div>
    <h1 className="title">{props.title}</h1>
  </header>
);

const mapStateToProps = state => {}
export default Header;
