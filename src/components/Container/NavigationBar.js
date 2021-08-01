import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarItem from "./NavbarItem";
import getNavbarItems from "../../data/navigation-bar-items";
import logo from "../../assets/icon/logo-dark.png";
const items = getNavbarItems();
function NavigationBar(props) {
  const [navBar, setNavBar] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, function () {
    if (expanded) setExpanded(false);
  });

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 50) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Navbar
      className={navBar ? "active" : ""}
      collapseOnSelect
      fixed="top"
      expand="lg"
      variant="light"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Toggle
          className="border-0"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" ref={wrapperRef}>
          <Nav className="ml-auto">
            {items.map((item, idx) => (
              <NavbarItem key={idx} item={item} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {expanded && <div class="backdrop backdrop-navbar"></div>}
    </Navbar>
  );
}
function useOutsideAlerter(ref, callBack) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callBack();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callBack]);
}
export default NavigationBar;
