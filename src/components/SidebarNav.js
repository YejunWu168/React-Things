import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faInbox, faBriefcase, faStar } from "@fortawesome/fontawesome-free-solid";
import "../styles/SidebarNav.css";
import NavLink from "./NavLink.js";

const SidebarNav = props => (
  <nav>
    <ul className="nav-list">
      <NavLink to="/" className="inbox" todoCount={props.todoCount}>
        <FontAwesomeIcon icon={faInbox} className="inbox-icon" fixedWidth />
        Inbox
      </NavLink>
      <NavLink to="/today" todoCount={props.todoCount}>
        <FontAwesomeIcon icon={faStar} className="star-icon" fixedWidth />
        Today
      </NavLink>
      <NavLink to="/work" todoCount={props.todoCount}>
        <FontAwesomeIcon icon={faBriefcase} className="briefcase-icon" fixedWidth />
        Work
      </NavLink>
    </ul>
  </nav>
);

export default SidebarNav;
