import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Gallery from "react-photo-gallery"


const photos = [

  {
    src: "/pic2.jpeg",
    width: 4,
    height: 2,
  },

  {
    src: "/pic6.jpeg",
    width: 4,
    height: 2,
  },
  {
    src: "/pic3.jpeg",
    width: 4,
    height: 2,
  },
  {
    src: "/pic9.jpeg",
    width: 4,
    height: 2,
  },
  {
      src: "/pic4.jpeg",
      width: 4,
      height: 3,
    },
    {
        src: "/pic7.jpeg",
        width: 1,
    height: 1,
  },
]



const StyledGrid = styled.section`

  transition: all 0.5s ease;
  :hover {
    transition: all 0.5s ease;
    box-shadow: -2px 4px 11px -3px #000000;
  }
`

const StyledImage = styled.img`
  margin-right: 0.2rem;
  
  height: 15rem;
  border: 2px solid red;
  /* object-fit: contain; */
  @media screen and (max-width: 568px) {
    margin-left: 0.2rem;
    height:10rem;
  }
`

const StyledNote = styled.p`
  /* border: 2px solid red; */
  display: flex;
  /* justify-content: center; */
  @media screen and (max-width: 568px) {
      font-size: 0.8rem;

  }
`

const StyledContent = styled.div`

`

const StyledH1 = styled.h1`
  margin-top: 2rem;
  font-family: Tahoma;
  margin-bottom: 0.5rem;
  font-style: italic;
  font-size: 1.3rem;

  @media screen and (max-width: 568px) {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`

const Grid = () => {
    return (
      <StyledGrid>
            
<Gallery photos={photos} />
      </StyledGrid>
          
  )
}

export default Grid
