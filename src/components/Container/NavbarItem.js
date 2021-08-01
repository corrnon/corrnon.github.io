import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarItem({ item }) {
  return (
    <NavLink
      className="nav-link"
      exact={item.exact}
      to={`${item.to}`}
      activeClassName="active"
    >
      {item.title}
    </NavLink>
  );
}

export default NavbarItem;
