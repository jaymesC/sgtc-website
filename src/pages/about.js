import React from "react"
import styled from "styled-components"
import Image from "../components/Image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledContainer = styled.div`
  /* background-blend-mode: multiply; */
  background-image: url("/aboutbg.jpg");
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
  padding-bottom: 10rem;
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding-bottom: 5rem;
  }
  @media screen and (max-width: 568px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding-bottom: 3rem;
  }
`

const StyledH1 = styled.h1`
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 568px) {
    margin-bottom: 1rem;
    font-size: 18px;
  }
`
const StyledH5 = styled.h5`
  font-size: 15px;
  font-weight: 300;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
    margin-bottom: 0.3rem;
    font-size: 12px;
  }
`

const StyledSpan = styled.span`
  border-bottom: 5px solid #af3277;
  /* color: #af3277; */
`

const StyledP = styled.p`
  width: 50%;
  @media (max-width: 768px) {
    width: auto;
  }
  @media screen and (max-width: 568px) {
    width: auto;
    font-size: 14px;
  }
`

const StyledSection = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
    flex-direction:column;

  }
`
const StyledContent = styled.section`
  margin-bottom: 2rem;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
  }
`

const StyledBox = styled.section`
  padding: 1rem;
  width: 30rem;
  height: 15rem;
  background-color: #af3277;
  color: #fff;
  border-radius: 5px;
  transition: all 0.5s ease;

  :hover {
    transition: all 0.5s ease;
    box-shadow: 5px 7px 9px -1px #908f8c;
  }
  @media (max-width: 768px) {
    width: 20rem;
    height: 10rem;
  }
  @media screen and (max-width: 568px) {
    width: 20rem;
    height: 8rem;
    margin-bottom: 1rem;
  }
`
const StyledSecondBox = styled.section`
  padding: 1rem;
  width: 30rem;
  height: 15rem;
  background-color: #c93192;
  color: #fff;
  border-radius: 5px;
  transition: all 0.5s ease;

  :hover {
    transition: all 0.5s ease;
    box-shadow: 5px 7px 9px -1px #908f8c;
  }
  @media (max-width: 768px) {
    width: 20rem;
    height: 10rem;
  }
  @media screen and (max-width: 568px) {
    width: 20rem;
    height: 8rem;
  }
`

const StyledH2 = styled.h2`
  text-align: center;
  font-weight: 400;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
    font-size:15px;
  }
`
const StyledH3 = styled.h3`
  font-size: 40px;
  text-align: center;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (max-width: 568px) {
    font-size: 20px;
  }
  `

const StyledNote = styled.p`
text-align: center;
@media (max-width: 768px) {
}
@media screen and (max-width: 568px) {
  font-size: 14px;
}
`

const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Image src="slide2.jpg" />

      <StyledContainer>
        <StyledH1>
          <StyledSpan>Abou</StyledSpan>t Us
        </StyledH1>
        <StyledH5>OUR MISSION & VISION</StyledH5>
        <StyledP>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque odit dignissimos voluptatibus, quia eius consequuntur minus
          ipsam aliquid deleniti in ducimus saepe ipsum reprehenderit laudantium
          id perspiciatis quidem excepturi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse voluptatem inventore, quae labore
          tempore corrupti? Hic sequi et praesentium consequuntur!
        </StyledP>
        <StyledContent>
          <StyledH5>OUR PURPOSE & CORE VALUES</StyledH5>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque odit dignissimos voluptatibus, quia eius consequuntur
            minus ipsam aliquid deleniti in ducimus saepe ipsum reprehenderit
            laudantium id perspiciatis quidem excepturi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Esse voluptatem inventore, quae
            labore tempore corrupti? Hic sequi et praesentium consequuntur!
          </StyledP>
        </StyledContent>
        <StyledH3>
          Our <StyledSpan>Service</StyledSpan> days:
        </StyledH3>
        <StyledSection
          data-sal="slide-up"
          data-sal-duration="1500"
          // data-sal-delay="0"
          // data-sal-easing="ease"
        >
          <StyledBox>
            <StyledH2>SUNDAYS:</StyledH2>
            <StyledNote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              omnis ducimus sequi asperiores consequatur nulla vero ex nostrum
              vel corrupti.
            </StyledNote>
          </StyledBox>
          <StyledSecondBox>
            <StyledH2>WEDNESDAYS:</StyledH2>
            <StyledNote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quod distinctio minima quos voluptas totam. Quod veniam quae
              dolore atque?
            </StyledNote>
          </StyledSecondBox>
        </StyledSection>
      </StyledContainer>
    </Layout>
  )
}

export default about
