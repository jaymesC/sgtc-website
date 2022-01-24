import React from 'react';
import styled from "styled-components"
import { FaClock } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"


const StyledArea = styled.div`
margin-bottom:1rem;
  margin-left: 10rem;
  margin-right: 10rem;
  display: flex;
  /* width: 10; */
  /* justify-content: space-between; */
`

const StyledSquare = styled.div`
  height: 100px;
  width: 100px;
  background-color: #af3277;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  @media (max-width: 768px) {
    /* width: 400px; */
  }
`
const StyledDate = styled.section`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  margin-left: 0.3rem;
`

const StyledH3 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  padding-left: 1rem;
`

const StyledLocale = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-left: 1px solid white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledBox = styled.section`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-left: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledP = styled.p`
  margin-left: 0.5rem;
`

const Details = ({ day, title, time, location }) => {
  return (
    <StyledArea>
      <StyledSquare>{day}</StyledSquare>
      <StyledDate>
        <StyledH3>{title}</StyledH3>
        <StyledBox>
          <FaClock />
          <StyledP>{time}</StyledP>
        </StyledBox>
        <StyledLocale>
          <FaMapMarkerAlt />
          <StyledP>{location}</StyledP>
        </StyledLocale>
      </StyledDate>
    </StyledArea>
  )
}

export default Details;
