import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledContainer = styled.div`
  /* background-blend-mode: multiply; */
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

const StyledH1 = styled.h1``
const StyledH5 = styled.h5`
  font-size: 18px;
  font-weight: 300;
  margin-top: 1rem;
`

const StyledSpan = styled.span`
  border-bottom: 5px solid #af3277;
  /* color: #af3277; */
`

const StyledP = styled.p`

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
        <StyledH5>OUR MISSION & VISION</StyledH5>
        <StyledP>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque odit dignissimos voluptatibus, quia eius consequuntur minus
          ipsam aliquid deleniti in ducimus saepe ipsum reprehenderit laudantium
          id perspiciatis quidem excepturi?
        </StyledP>
      </StyledContainer>
    </Layout>
  )
}

export default about
