import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <h1>Giphy  App</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home">Home</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Log In</NavBtnLink>
          
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;