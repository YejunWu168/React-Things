import React from "react";
import { Route, Link } from "react-router-dom";

const NavLink = ({ to, children, className, todoCount }) => (
  <Route
    exact
    path={to}
    children={({ match }) => (
      <li className={match ? `${className ? className : ""} active` : className}>
        <Link to={to}>
          {children}
          <span className="todo-count">{match ? todoCount : ""}</span>
        </Link>
      </li>
    )}
  />
);

export default NavLink;
