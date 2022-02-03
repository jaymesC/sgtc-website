import * as React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import Carousel from "nuka-carousel"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Gallery from "../components/Gallery"
import Service from "../components/Service"
import BlogSection from "../components/BlogSection"
import Image from "../components/Image"

const StyledAboutSection = styled.section`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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

const StyledParagraph = styled(motion.section)`
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

const StyledImageContainer = styled.div`
/* width:10rem;
height:10rem; */
`


const StyledH5 = styled.h5`
  color: #000;
  font-size: 15px;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 568px) {
    font-size: 10px;
    margin-bottom: 1rem;
  }
`
const StyledH1 = styled.h1`
  line-height: 3.8rem;
  color: #4e0056;
  font-size: 2.8rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: normal;
  }
  @media screen and (max-width: 568px) {
    font-size: 20px;
    line-height: normal;
  }
`
const StyledP = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #666566;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 568px) {
    font-size: 0.2rem;
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
    background-color: #a32f6f;
    box-shadow: 0 8px 14px -11px #af3277;
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
        pauseOnHover={false}
        transitionMode="fade"
        withoutControls={true}
        wrapAround={true}
      >
        <Image src="slide1.jpg" alt="firstSlide" />
        <Image src="slide2.jpg" alt="secondslide" />
      </Carousel>

      <StyledDiv>
        <StyledAboutSection>
          <StyledBox>
            <Underline
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            />
            <StyledParagraph
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <StyledH5>WHY OUR CHURCH</StyledH5>
              <StyledH1>
                We are a church that
                <br /> believes in Jesus, a church <br /> that loves God and
                people
              </StyledH1>
              <StyledP>
                Sovereign Grace Tabernacle is a full Gospel believing Church, we
                believe in the message of "THIS HOUR" that will prepare the
                bride of Christ for the second coming of Jesus Christ.
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
          <StyledImageContainer>
            <StaticImage
              layout="constrained"
              src="../images/hero.jpg"
              width={1000}
              height={1000}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              // style={{ borderRadius: `50%` }}
            />
          </StyledImageContainer>
        </StyledAboutSection>
        {/* <Gallery /> */}
      </StyledDiv>

      <Service />
      <BlogSection />
    </Layout>
  </>
)

export default IndexPage
