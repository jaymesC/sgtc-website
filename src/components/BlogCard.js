import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const StyledCardContainer = styled.div`
  font-family: "Open Sans", Arial, sans-serif;
  margin-left: 3rem;
  margin-bottom: 1rem;
  width: 25rem;
  background: #fff;
  /* width: 20em; */
  /* border-radius: 0.6em; */
  /* margin: 1em; */
  overflow: hidden;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;
  :hover {
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 40rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 1rem;
  }
  @media screen and (max-width: 568px) {
    /* margin-left: 0; */
  }
`

const StyledCardImage = styled.img`
  cursor: pointer;
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
  }
`

const StyledTitle = styled.h4`
  color: #333;
  font-weight: 500;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`

const StyledDate = styled.h5`
  font-family: "Didact Gothic", Helvetica, Arial, Lucida, sans-serif;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  color: rgb(102, 102, 102);
  font-size: 14px;
  font-weight:300;
`

const StyledParagraph = styled.p`
  color: #777;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  @media screen and (max-width: 568px) {
      font-size: 14px;
  }
`
const StyledButton = styled.button`
  background-color: #af3277;
  color: #fff;
  margin: 1rem;
  height: 2rem;
  width: 6rem;
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

const BlogCard = ({ page, title, date, src, description }) => {
  return (
    <StyledCardContainer
      data-sal="slide-up"
      data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <StyledCardImage src={src} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>{date}</StyledDate>
      <StyledParagraph>{description}</StyledParagraph>
      <StyledButton
        onClick={() => {
          navigate(`/${page}`)
        }}
      >
        READ MORE
      </StyledButton>
    </StyledCardContainer>
  )
}

export default BlogCard
