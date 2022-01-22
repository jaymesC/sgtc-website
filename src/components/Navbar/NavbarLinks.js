import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #af3277;
  display: inline-block;
  font-size: 18px;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #af3277;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: #af3277;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/404">About us</NavItem>
      <NavItem to="/">Blog</NavItem>
      <NavItem to="/404">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
