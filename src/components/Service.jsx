import React from "react"
import styled from "styled-components"
import Details from "./Details"
import { data } from "../../data"
import { StaticImage } from "gatsby-plugin-image"


const StyledServiceSection = styled.div`
margin-top:5rem;
  /* background-image: url("/background.jpg"); */
  /* background-size: cover; */
  color: #fff;
  padding-top: 5rem;
  padding-bottom: 8rem;
  background: #cc2b5e; 
  background: -webkit-linear-gradient(
    to right,
    #753a88,
    #cc2b5e
  );
  background: linear-gradient(
    to right,
    #753a88,
    #cc2b5e
  ); 

  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
    margin-top: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
`

const StyledContent = styled.div`
width: 100%;
height: 5rem;
`

const Underline = styled.div`
  height: 5px;
  width: 50px;
  background-color: #fff;
  margin-right: 1rem;
  margin-top: 0.4rem;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
    width: 40px;
    height: 3px;
  }
`

const StyledH5 = styled.h5`
  color: #fff;
  font-size: 15px;
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-bottom: 1rem;
    font-size: 10px;
  }
`

const StyledHeading = styled.section`
  z-index: 10;

  display: flex;
  margin-left: 10rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    margin-left: 1.2rem;
    margin-right: 0;
  }
  @media screen and (max-width: 568px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const Service = () => {
  return (
    <StyledServiceSection
      data-sal="slide-up"
      data-sal-duration="1500"
      // data-sal-delay="0"
      // data-sal-easing="ease"
    >
      <StyledHeading>
        <Underline />
        <StyledH5>OUR SERVICES</StyledH5>
      </StyledHeading>
      {/* <StaticImage alt="" src="../images/background.jpg" /> */}
      {data.map(x => (
        <Details {...x} />
      ))}
    </StyledServiceSection>
  )
}

export default Service
