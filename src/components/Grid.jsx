import React from "react"
import styled from "styled-components"
import Gallery from "react-photo-gallery"

const photos = [
  {
    src: "pic12.jpeg",
    width: 3,
    height: 2,
  },

  {
    src: "pic6.jpeg",
    width: 4,
    height: 2,
  },
  {
    src: "pic3.jpeg",
    width: 4,
    height: 2,
  },
  {
    src: "pic9.jpeg",
    width: 4,
    height: 2,
  },
  {
    src: "pic4.jpeg",
    width: 3,
    height: 2,
  },
]

const StyledGrid = styled.section`
  transition: all 0.5s ease;
  :hover {
    transition: all 0.5s ease;
    box-shadow: -2px 4px 11px -3px #000000;
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
