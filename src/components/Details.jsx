import React from 'react';
import styled from "styled-components"
import { FaClock } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"


const StyledArea = styled.div`
  margin-bottom: 1rem;
  margin-left: 10rem;
  margin-right: 10rem;
  display: flex;
  z-index:99;
  /* width: 100vw; */
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 0;
  }
  @media screen and (max-width: 568px) {
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
  }
`

// const StyledSquare = styled.div`
//   height: 100px;
//   width: 100px;
//   background-color: #af3277;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 3rem;
//   @media (max-width: 768px) {
//   }
//   @media screen and (max-width: 568px) {
//     font-size: 1.5rem;
//     height: auto;
//     width: auto;
//   }
// `
const StyledDate = styled.section`
z-index: 9;
  display: flex;
  justify-content: space-between;
  border: 1px solid #fff;
  /* margin-left: 0.3rem; */
  width: 100vw;
  margin-left: 3rem;

  @media (max-width: 768px) {
      margin-left: 1rem;
  }
  @media screen and (max-width: 568px) {
    width: 100vw;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 2rem;
  }
`

const StyledH3 = styled.h3`
  display: flex;
  justify-content: center;
  flex: 0.3;
  align-self: center;

  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    background-color: #af3277;

    width: 8rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (max-width: 568px) {
    background-color: #af3277;

    font-size: 12px;
    width: 100%;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
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
  @media (max-width: 768px) {
    /* width: 400px; */
  }
  @media screen and (max-width: 568px) {
    justify-content: center;
    padding-left: 2rem;
    align-items: center;
    margin-top: 0.5rem;
  }
`

const StyledBox = styled.section`
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex: 0.6;
  padding-right: 1rem;
  border-left: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  @media (max-width: 768px) {
    padding-left: 1rem;
  }
  @media screen and (max-width: 568px) {
    padding-left: 2rem;
    margin-bottom: 0.5rem;
  }
`

const StyledP = styled.p`


  margin-left: 1rem;
  @media (max-width: 768px) {
    /* width: 400px; */
  }
  @media screen and (max-width: 568px) {
      font-size: 12px;
  }
`

const Details = ({ day, title, time, location }) => {
  return (
    <StyledArea>
      {/* <StyledSquare>{day}</StyledSquare> */}
      <StyledDate>
        <StyledH3>{day.toUpperCase()}</StyledH3>
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
