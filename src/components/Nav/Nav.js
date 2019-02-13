import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faInbox, faBriefcase, faStar } from "@fortawesome/fontawesome-free-solid";
import NavLink from "./NavLink.js";

const Nav = props => (
  <nav>
    <ul className="nav-list">
      <NavLink to="/inbox" className="inbox">
        <FontAwesomeIcon icon={faInbox} className="inbox-icon" fixedWidth />
        Inbox
      </NavLink>
      <NavLink to="/today">
        <FontAwesomeIcon icon={faStar} className="star-icon" fixedWidth />
        Today
      </NavLink>
      <NavLink to="/work">
        <FontAwesomeIcon icon={faBriefcase} className="briefcase-icon" fixedWidth />
        Work
      </NavLink>
    </ul>
  </nav>
);

export default Nav;
