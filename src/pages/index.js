import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Carousel from "nuka-carousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from "../components/Gallery"

const StyledAboutSection = styled.section`
  display: flex;
  /* justify-content: space-between;   */
  @media screen and (max-width: 568px) {
    flex-direction: column;
  }
`
const StyledDiv = styled.div`
  margin-top: 5rem;
  margin-left: 10rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;

  }
  @media screen and (max-width: 568px) {
    margin-top: 1.5rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }
`

const Underline = styled.div`
  height: 5px;
  width: 100px;
  background-color: #af3277;
  margin-right: 1rem;
  margin-top: 0.4rem;
  @media (max-width: 768px) {
    /* width: 400px; */
  }
`

const StyledParagraph = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledBox = styled.section`
  /* margin-top: 5rem; */
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 568px) {
    /* flex-direction: column; */
  }
`
const StyledImg = styled.img`
  margin-left: 3rem;

  @media (max-width: 768px) {

  }
  @media screen and (max-width: 568px) {
    margin-left: 0;
    height: 10rem;
    /* width:10rem; */

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
const StyledH1 = styled.h1`
  line-height: 3.8rem;
  color: #000;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size:2rem;
    line-height: normal;

  }
  @media screen and (max-width: 568px) {
    font-size:1rem;
    line-height: normal;
  }
`
const StyledP = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  color: #000;
  font-size: 1.2rem;
  @media screen and (max-width: 568px) {
    font-size: 1rem;
    margin-top: 1rem;
margin-bottom: 1rem;
  }
`

const StyledButton = styled.button`
  background-color: #af3277;
  color: #fff;
  height: 3rem;
  width: 8rem;
  cursor: pointer;
  border-radius: 5px;
  border: #af3277;
  box-shadow: 0 12px 12px -11px #af3277;
  :hover {
  }
  @media screen and (max-width: 568px) {
    height: 2rem;
    width: 6rem;
    margin-bottom: 1rem;
  }
`

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />

      <Carousel
        autoplay={true}
        // autoplayReverse={true}
        // slideWidth={0.8}
        transitionMode="fade"
        withoutControls={true}
        wrapAround={true}
      >
        {/* <img
        src="/sliderImage1.jpeg"
        alt=""
      /> */}
        <img src="/sliderImage2.jpeg" alt="" />
      </Carousel>

      <StyledDiv>
        <StyledAboutSection>
          <StyledBox>
          <Underline />
            <StyledParagraph>
              <StyledH5>WHY OUR CHURCH</StyledH5>
              <StyledH1>
                We are a church that believes in Jesus, a church that loves God
                and people
              </StyledH1>
              <StyledP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, architecto a expedita nemo iure et! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Illo, fugiat.
              </StyledP>
              <StyledButton
                onClick={() => {
                  navigate("/about")
                }}
              >
                READ MORE
              </StyledButton>
            </StyledParagraph>
          </StyledBox>
            <StyledImg
              layout="constrained"
              src="/test.PNG"
              // width={300}
              // height={260}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
            />
        </StyledAboutSection>
        <Gallery />
      </StyledDiv>
    </Layout>
  </>
)

export default IndexPage;

// <StaticImage
//   layout="constrained"
//   src="../images/gatsby-icon.png"
//   width={300}
//   quality={95}
//   formats={["AUTO", "WEBP", "AVIF"]}
// />
