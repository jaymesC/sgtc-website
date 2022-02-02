import React, { useRef } from "react"
import styled from "styled-components"
import emailjs from "@emailjs/browser"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { RiSendPlaneFill } from "react-icons/ri"

import { init } from "@emailjs/browser"
init("")

const StyledFormContainer = styled.div`
  background-color: #c93295;
  margin-top: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 568px) {
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    /* margin-bottom: 1rem; */
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 10rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    padding-left: 1rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 568px) {
    padding-left: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    /* margin-bottom: 1rem; */
  }
`

const StyledH2 = styled.h2`
  color: #fff;
  text-align: center;
  padding-top: 3rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    font-size: 18px;
    text-align: center;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }
`

const StyledInput = styled.input`
  padding-left: 10px;
  font-size: 16px;
  width: 25rem;
  height: 3rem;
  border: 2px solid #af3277;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: auto;
  }

  @media screen and (max-width: 568px) {
    font-size: 12px;
    margin-bottom: 1rem;
    width: 18rem;
  }
`
const StyledInputSubject = styled.input`
  padding-left: 10px;
  font-size: 16px;
  height: 3rem;
  border: 2px solid #af3277;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    font-size: 12px;
    margin-bottom: 1rem;
    width: 18rem;
  }
`

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 568px) {
    flex-direction: column;
    margin-bottom: 1rem;
    width: 18rem;
  }
`


const StyledTextArea = styled.textarea`
  padding-left: 10px;
  font-size: 16px;
  height: 8rem;
  /* width: 25rem; */
  border: 2px solid #af3277;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    font-size: 12px;
    margin-bottom: 0.5rem;
    width: 18rem;
  }
`

const StyledButton = styled.button`
  background-color: #af3277;
  color: #fff;
  height: 2rem;
  width: 8rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
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

const StyledMap = styled.div`
margin-left: 10rem;
margin-right: 10rem;
margin-bottom:2rem;
@media (max-width: 768px) {
  margin-left: 0;
  margin-right: 0;
  margin-bottom:1rem;
}

@media screen and (max-width: 568px) {
  margin-left: 0;
  margin-right: 0;
  margin-bottom:1rem;

  }
`


const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm("", "", form.current).then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }
  return (
    <Layout>
      <Seo title="Contact" />
      <StyledFormContainer>
        <StyledH2>Let's get in touch</StyledH2>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <StyledInputContainer>
            {/* <StyledLabel>Name:</StyledLabel> */}
            <StyledInput type="text" name="user_name" placeholder="Name:" />
            {/* <StyledLabel>Email:</StyledLabel> */}
            <StyledInput type="email" name="user_email" placeholder="Email:" />
          </StyledInputContainer>
          {/* <StyledLabel>Subject:</StyledLabel> */}
          <StyledInputSubject
            type="text"
            name="subject"
            placeholder="Subject:"
          />
          {/* <StyledLabel>Message:</StyledLabel> */}
          <StyledTextArea name="message" placeholder="Message:" />
          <StyledButton type="submit" value="Send">
            <RiSendPlaneFill style={{ marginRight: "1rem" }} />
            Send
          </StyledButton>
        </StyledForm>
      </StyledFormContainer>
      <StyledMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7951.186807295564!2d6.97961091899944!3d4.839662237984157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce3ed550e20b%3A0xfb667a0faf68c7c0!2s1%20Tony%20Close%2C%20Rumuochita%20500272%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1643761034836!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </StyledMap>
    </Layout>
  )
}

export default Contact
