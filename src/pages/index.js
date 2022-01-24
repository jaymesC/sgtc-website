import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Carousel from "nuka-carousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Events from "../components/Events"

const StyledAboutSection = styled.section`
  display: flex;
  /* justify-content: space-between;   */
`
const StyledDiv = styled.div`
  margin-top: 5rem;
  margin-left: 10rem;
  margin-right: 10rem;
`

const Underline = styled.div`
  height: 5px;
  width: 100px;
  background-color: #af3277;
  margin-right: 1rem;
  margin-top: 0.4rem;
`

const StyledParagraph = styled.section`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`
const StyledBox = styled.section`
  /* margin-top: 5rem; */
  display: flex;
  justify-content: space-between;
`
const StyledImg = styled.img`
  margin-left: 3rem;
  height: 20rem;
  /* object-fit: contain; */
  @media screen and (max-width: 568px) {
    margin-left: 0.8rem;
  }
`

const StyledH5 = styled.h5`
  color: #000;
  font-size: 15px;
  margin-bottom: 2.5rem;
`
const StyledH1 = styled.h1`
  line-height: 3.8rem;
  color: #000;
  font-size: 4rem;
`
const StyledP = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  color: #000;
  font-size: 1.2rem;
`

const StyledButton = styled.button`
  background-color: #af3277;
  color: #fff;
  height: 3rem;
  width: 8rem;
  cursor: pointer;
  border-radius: 5px;
  border: #af3277;
   :hover {

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
          <Underline />
          <StyledBox>
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
            <StyledImg
              layout="constrained"
              src="/sliderImage2.jpeg"
              width={300}
              height={260}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
            />
          </StyledBox>
        </StyledAboutSection>
        <Events />
      </StyledDiv>
    </Layout>
  </>
)

export default IndexPage
