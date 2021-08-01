import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarItem({ item }) {
  return (
    <Nav.Link
      as={NavLink}
      href={`${item.to}`}
      className="nav-link"
      exact={item.exact}
      to={`${item.to}`}
      activeClassName="active"
    >
      {item.title}
    </Nav.Link>
  );
}

export default NavbarItem;
