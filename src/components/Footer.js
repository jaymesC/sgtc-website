import React from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "gatsby"


const StyledFooter = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
  color: #fff;
  background-blend-mode: multiply;
  background-image: radial-gradient(
      circle at top left,
      #ce40c4 25%,
      #c52465 90%
    ),
    url("/Footerbackground.jpg");
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 568px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0;
  }
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
      flex-direction: column;
  }
`

const StyledH3 = styled.h3`
  font-size: 16px;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
      margin-top: 2rem;
  }
`

const StyledAboutSection = styled.section`
  width: 20rem;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
  }
`

const StyledLinks = styled.section`
  display: flex;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
  }
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
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-top: 0;
  }
`

const StyledP = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
}

@media screen and (max-width: 568px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size:14px;
  }
`

const StyledQuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
  }
`
const StyledFooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  border-bottom: 0.5px solid #f4e8ff;
  padding-bottom: 10px;
  /* margin-bottom: 2rem;*/
  :hover {
    color: #faec5c;
  }
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-top: 1rem;
    font-size: 14px;
  }
`

const StyledText = styled.p`
  margin-left: 1rem;
  @media (max-width: 768px) {
}

@media screen and (max-width: 568px) {
      margin-left: 1rem;
      font-size: 14px;
  }
`

const StyledFooterContact = styled.div`
  width: 25rem;
  @media (max-width: 768px) {
}

@media screen and (max-width: 568px) {
    width: 20rem;
    margin-right: 1rem;
  }
`
const StyledLocation = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
  }
`
const StyledNumber = styled.div`
  margin-top: 2rem;
  display: flex;
  /* justify-content:center; */
  align-items: center;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
  }
`
const StyledEmail = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
  }
  `

const TradeMark = styled.p`
  display: flex;
  width: 25rem;
  padding-top: 9rem;
  align-self: center;
  color: #fff;
  @media screen and (max-width: 568px) {
      width: 20rem;
      padding-top: 5rem;
      font-size: 14px;
  }
`


const Footer = () => {
    return (
      <>
        <StyledFooter>
          <StyledContainer>
            <StyledAboutSection>
              <StyledH3>ABOUT SOVEREIGN GRACE TABERNACLE</StyledH3>
              <StyledP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                facere aut eius repellendus blanditiis recusandae ipsum. A ad
                esse provident!
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
              <StyledFooterLink to="/">Home</StyledFooterLink>
              <StyledFooterLink to="/about">About</StyledFooterLink>
              <StyledFooterLink to="/blog">Blog</StyledFooterLink>
              <StyledFooterLink to="/contact">Contact</StyledFooterLink>
            </StyledQuickLinks>
            <StyledFooterContact>
              <StyledH3>HAVE A QUESTION?</StyledH3>
              <StyledLocation>
                <FaMapMarkerAlt />
                <StyledText>
                  No. 1b Tony Close Off Okilton Drive, Off Ada George Road, Port
                  Harcourt.
                </StyledText>
              </StyledLocation>
              <StyledNumber>
                <FaPhoneAlt />
                <StyledText>+2349075417094</StyledText>
              </StyledNumber>
              <StyledEmail>
                <FaEnvelope />
                <StyledText>sovereigngracetabernacle1@gmail.com</StyledText>
              </StyledEmail>
            </StyledFooterContact>
          </StyledContainer>
          <TradeMark>
            {" "}
            Copyright ©{new Date().getFullYear()} All rights reserved | JamesJay
          </TradeMark>
        </StyledFooter>
      </>
    )
}

export default Footer
