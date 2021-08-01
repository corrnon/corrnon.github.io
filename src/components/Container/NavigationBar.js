import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarItem from "./NavbarItem";
import getNavbarItems from "../../data/navigation-bar-items";
import logo from "../../assets/icon/logo-dark.png";
const items = getNavbarItems();
function NavigationBar(props) {
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY > 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  return (
    <Navbar
      className={navBar ? "active" : ""}
      collapseOnSelect
      fixed="top"
      expand="lg"
      variant="light"
    >
      <Container>
        <Navbar.Toggle
          className="border-0"
          aria-controls="responsive-navbar-nav"
          onClick={() => setNavBar(true)}
        />
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {items.map((item, idx) => (
              <NavbarItem key={idx} item={item} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
