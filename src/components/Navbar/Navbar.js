import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"
// import Logo from "./Logo"

const Navigation = styled.nav`
  height: 9vh;
  display: flex;
  background-color: #fff;
  color: #af3277;
  position: sticky;
  top: 0;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  box-shadow: -2px -1px 11px -3px #000000;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 99;
  align-self: center;
  @media (max-width: 768px) {
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 768px) {
    display: flex;
  }
`

const Img = styled(motion.section)`
  padding-top:2px;
  padding-bottom: 2px;
  /* margin-left: 6rem; */
  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 8px;
    padding-left: 10px;
    margin-right: 0rem;
    width: 50px;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 5vh;
    background-color: #fff;
    color: #af3277;
    transition: all 0.4s ease-in;
    top: 8vh;
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #af3277;
  width: 30px;
  color: #fff;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #af3277;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      {/* <Logo /> */}
      <Img>
        <Link to="/">
          <StaticImage
            layout="constrained"
            src="../../images/gatsby-icon.png"
            width={65}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </Link>
      </Img>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar;
