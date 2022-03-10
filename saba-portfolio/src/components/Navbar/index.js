import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Sabhareesh</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="SignIn">SignIn</NavBtnLink>
            {/* <NavBtnLink to="SignUp">SignUp</NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
