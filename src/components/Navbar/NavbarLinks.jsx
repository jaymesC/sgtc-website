import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
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

const StyledIcon = styled.a`
  color: #af3277;
  margin-right: 10px;
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About us</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/contact">Contact</NavItem>

      <NavIcon>
        <StyledIcon href="/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </StyledIcon>
        <StyledIcon
          href="https://www.instagram.com/sovereigngracetabernacle/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </StyledIcon>
        <StyledIcon
          href="https://twitter.com/SovereignGraceT"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </StyledIcon>
        <StyledIcon
          href="https://www.youtube.com/channel/UChb-Qtqhn5PwNi2f7d4h68g"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </StyledIcon>
        <StyledIcon
          href="https://www.linkedin.com/in/sovereign-grace-tabernacle-37b0a8222/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </StyledIcon>
      </NavIcon>
    </>
  )
}

export default NavbarLinks
