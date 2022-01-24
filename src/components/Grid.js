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
  display: flex;
  border: 2px solid #2a3035;
  font-family: Tahoma;
  transition: all 0.4s ease;
  /* justify-content: center; */
  @media screen and (max-width: 568px) {
      flex-direction: column;
      transition: all 0.4s ease;
      :hover {
        border: 4px 3px 14px 0px #5d5c58;
    }
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
<Gallery photos={photos} />
          
  )
}

export default Grid
