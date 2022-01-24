import React from "react"
import styled from "styled-components"

const StyledServiceSection = styled.div`
  background-image: url("/background.jpg");
  background-size: cover;
  color: #fff;
  padding: 10rem;
`

const Underline = styled.div`
  height: 5px;
  width: 100px;
  background-color: #fff;
  margin-right: 1rem;
  margin-top: 0.4rem;
  @media (max-width: 768px) {
    /* width: 400px; */
  }
`


const StyledH5 = styled.h5`
  color: #fff;
  font-size: 15px;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 568px) {
    margin-bottom: 1rem;
  }
`

const StyledArea = styled.div`
margin-left: 10rem;
margin-right: 10rem;
`

const StyledSquare = styled.div`
  height: 100px;
  width: 100px;
  background-color: #af3277;
  text-align: center;
  padding-top: 1rem;
  font-size: 3rem;
  @media (max-width: 768px) {
    /* width: 400px; */
  }
`

const StyledHeading = styled.section`
display: flex;

`

const StyledDate = styled.section`

`

const StyledDate = styled.section``

const StyledDate = styled.section``

const Service = () => {
    return <StyledServiceSection>
        <StyledHeading>
            <Underline />
            <StyledH5>OUR SERVICES</StyledH5>
        </StyledHeading>
        <StyledArea>
            <StyledSquare>SUN</StyledSquare>
            <StyledDate>
                <StyledH3></StyledH3>
                <StyledP></StyledP>

        </StyledDate>
        </StyledArea>
      
        
  </StyledServiceSection>
}

export default Service
