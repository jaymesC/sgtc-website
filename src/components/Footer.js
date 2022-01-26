import React from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { Link } from "gatsby"


const StyledFooter = styled.section`
  display: flex;
  /* justify-content: space-between; */
  padding-left: 10rem;
  padding-top: 3rem;
  padding-bottom: 17rem;
  color: #fff;
  background-blend-mode: multiply;
  background-image: radial-gradient(
      circle at top left,
      #ce40c4 25%,
      #c52465 90%
    ),
    url("/Footerbackground.jpg");
`

const StyledH3 = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`

const StyledAboutSection = styled.section`
  width: 20rem;
`

const StyledLinks = styled.section`
  display: flex;
  /* justify-content:space-around; */
`
const StyledIcon = styled.section`
  padding: 10px;
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 18px;
  border-radius: 50%;
  background: #fc4ef0;
  transition: all 0.5s ease;

  :hover {
    color: #faec5c;
    transition: all 0.5s ease;
  }
`

const StyledP = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const StyledQuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  border-bottom: 0.5px solid #f4e8ff;
  padding-bottom: 10px;
  /* margin-bottom: 2rem;
  margin-top: 0.1rem; */
  :hover {
    color: #faec5c;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledAboutSection>
        <StyledH3>ABOUT SOVEREIGN GRACE TABERNACLE</StyledH3>
        <StyledP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere
          aut eius repellendus blanditiis recusandae ipsum. A ad esse provident!
        </StyledP>
        <StyledLinks>
          <StyledIcon>
            <FaFacebookF />
          </StyledIcon>
          <StyledIcon>
            <FaInstagram />
          </StyledIcon>
          <StyledIcon>
            <FaTwitter />
          </StyledIcon>
          <StyledIcon>
            <FaYoutube />
          </StyledIcon>
        </StyledLinks>
          </StyledAboutSection>
          <StyledQuickLinks>
              <StyledH3>QUICK LINKS</StyledH3>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/about'>About</FooterLink>
            <FooterLink to='/blog'>Blog</FooterLink>
            <FooterLink to='/contact'>Contact</FooterLink>
          </StyledQuickLinks>
    </StyledFooter>
  )
}

export default Footer
