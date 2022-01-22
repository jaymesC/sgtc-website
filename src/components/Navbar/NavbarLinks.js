import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const NavIcon = styled(Link)`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  display: none;
  @media (max-width: 768px) {
   display: block;
  }
`

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
      <NavItem to="/about">About us</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/contact">Contact</NavItem>

      <NavIcon>
        <FaFacebookF style={{ marginRight: "20px" }} />
        <FaInstagram style={{ marginRight: "20px" }} />
        <FaTwitter style={{ marginRight: "20px" }} />
        <FaYoutube />
      </NavIcon>
    </>
  )
}

export default NavbarLinks
