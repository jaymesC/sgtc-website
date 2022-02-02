import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledContainer = styled.div`
  background-blend-mode: multiply;
  background-image: url("/aboutbg.jpg");
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding-bottom: 20rem;
`

const StyledLandingImage = styled.img`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 568px) {
    height: 30vh;
  }
`

const StyledH1 = styled.h1`

`
const StyledH5 = styled.h5`

`

const StyledSpan = styled.span`
border-bottom: 5px solid #af3277;
/* color: #af3277; */
`

const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <StyledLandingImage src="/slide2.jpg" />

      <StyledContainer>
        <StyledH1>
          <StyledSpan>Abou</StyledSpan>t Us
        </StyledH1>
        <StyledH5></StyledH5>
      </StyledContainer>
    </Layout>
  )
}

export default about
