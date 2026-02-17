// src/components/Navbar.jsx
import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #1B1B1B;
  color: #FFB085;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  li {
    cursor: pointer;
    transition: 0.3s;
  }

  li:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    right: 50px;
    background: #1B1B1B;
    width: 75%;
    padding: 2rem 1.5rem;
    border-left: 2px solid #FFB085;
    align-items: flex-start;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close menu after click (for mobile)
    }
  };

  return (
    <Nav>
      <Logo>Gautam</Logo>
      <MenuToggle onClick={() => setOpen(!open)}>☰</MenuToggle>
      <NavLinks open={open}>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("skills")}>Skills</li>
        <li onClick={() => handleScroll("projects")}>Projects</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
