import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Grid from "./Grid"

const Underline = styled.div`
  height: 5px;
  width: 50px;
  background-color: #af3277;
  margin-right: 1rem;
  margin-top: 0.4rem;
  @media screen and (max-width: 568px) {
    width: 30px;
  }
`

const StyledH5 = styled.h5`
  color: #000;
  font-size: 15px;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 568px) {
    margin-bottom: 1rem;
  }
`

const StyledDiv = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 568px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`
const StyledSection = styled.section`
  display: flex;
`

const Gallery = () => {
  return (
    <StyledDiv>
      <StyledSection>
        <Underline />

        <StyledH5>FROM OUR GALLERY</StyledH5>
      </StyledSection>
      <Grid />
    </StyledDiv>
  )
}

export default Gallery
