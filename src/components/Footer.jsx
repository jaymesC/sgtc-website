import React from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { Link } from "gatsby"

const StyledFooter = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
  color: #fff;
  background: #cc2b5e;
  background: -webkit-linear-gradient(to right, #753a88, #cc2b5e);
  background: linear-gradient(to right, #753a88, #cc2b5e);
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
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
    flex-direction: column;
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
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 2rem;
  }
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
const StyledIcon = styled.a`
  padding: 10px;
  color: #fff;
  margin-right: 1rem;
  /* margin-top: 1rem; */
  cursor: pointer;
  font-size: 22px;
  border-radius: 50%;
  background: inherit;
  transition: all 0.5s ease;

  :hover {
    color: #1e4297;
    background: white;

    transition: all 0.5s ease;
  }
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-top: 0;
    font-size: 18px;
    padding: 5px;
  }
`
const StyledIconA = styled.a`
  padding: 10px;
  color: #fff;
  margin-right: 1rem;
  /* margin-top: 1rem; */
  cursor: pointer;
  font-size: 22px;
  border-radius: 50%;
  background: inherit;
  transition: all 0.5s ease;

  :hover {
    color: #fd8c63;
    background: white;

    transition: all 0.5s ease;
  }
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-top: 0;
    font-size: 18px;
    padding: 5px;
  }
`
const StyledIconB = styled.a`
  padding: 10px;
  color: #fff;
  margin-right: 1rem;
  /* margin-top: 1rem; */
  cursor: pointer;
  font-size: 22px;
  border-radius: 50%;
  background: inherit;
  transition: all 0.5s ease;

  :hover {
    color: #1da1f2;
    background: white;
    transition: all 0.5s ease;
  }
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-top: 0;
    font-size: 18px;
    padding: 5px;
  }
`

const StyledIconC = styled.a`
  padding: 10px;
  color: #fff;
  margin-right: 1rem;
  /* margin-top: 1rem; */
  cursor: pointer;
  font-size: 22px;
  border-radius: 50%;
  background: inherit;
  transition: all 0.5s ease;

  :hover {
    color: #ff0000;
    transition: all 0.5s ease;
    background: white;
  }
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-top: 0;
    font-size: 18px;
    padding: 5px;
  }
`
const StyledIconD = styled.a`
  padding: 10px;
  color: #fff;
  margin-right: 1rem;
  /* margin-top: 1rem; */
  cursor: pointer;
  font-size: 22px;
  border-radius: 50%;
  background: inherit;
  transition: all 0.5s ease;

  :hover {
    color: #2867b2;
    background: white;

    transition: all 0.5s ease;
  }
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-top: 0;
    font-size: 18px;
    padding: 5px;
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
    font-size: 14px;
  }
`

const StyledQuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 2rem;
  }
  @media (max-width: 768px) {
    /* margin-right: 2rem; */
  }

  @media screen and (max-width: 568px) {
  }
`
const StyledFooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  border-bottom: 0.5px solid #f4e8ff;
  padding-bottom: 10px;
  :hover {
    color: #ffd919;
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
    font-size: 12px;
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
    margin-left: 3rem;
    font-size: 12px;
    /* text-align: center; */
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
              Sovereign Grace Tabernacle is a full Gospel believing Church, we
              believe in the message of "THIS HOUR" that will prepare the bride
              of Christ for the second coming of Jesus Christ.
            </StyledP>

            <StyledLinks>
              <StyledIcon
                href="https://www.facebook.com/SovereignGrace_Tabernacle-103411068778256/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </StyledIcon>
              <StyledIconA href="" target="_blank" rel="noreferrer">
                <FaInstagram />
              </StyledIconA>
              <StyledIconB
                href="https://twitter.com/SovereignGraceT"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </StyledIconB>
              <StyledIconC
                href="https://www.youtube.com/channel/UChb-Qtqhn5PwNi2f7d4h68g"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </StyledIconC>
              <StyledIconD
                href="https://www.linkedin.com/in/sovereign-grace-tabernacle-37b0a8222/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </StyledIconD>
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
          Copyright ??{new Date().getFullYear()} Sovereign Grace Tabernacle
        </TradeMark>
      </StyledFooter>
    </>
  )
}

export default Footer
