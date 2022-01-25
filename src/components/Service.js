import React from "react"
import styled from "styled-components"
import Details from "./Details"
import { data } from "../../data"

const StyledServiceSection = styled.div`
  background-image: url("/background.jpg");
  background-size: cover;
  color: #fff;
  padding-top: 5rem;
  padding-bottom: 8rem;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
    margin-top: 0.5;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
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
  }
`

const StyledHeading = styled.section`
  display: flex;
  margin-left: 10rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const Service = () => {
  return (
    <StyledServiceSection>
      <StyledHeading>
        <Underline />
        <StyledH5>OUR SERVICES</StyledH5>
      </StyledHeading>
      {data.map(x => (
        <Details {...x} />
      ))}
    </StyledServiceSection>
  )
}

export default Service
