import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const Contact = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TRIVO </title>
      </Helmet>
      <ContentWrapper>
        <Heading>Contact Us</Heading>
        <Form>
          <Input1>
            <Email placeholder="Email" text="email"></Email>

            <Fullname placeholder="Your Full Name" text="text"></Fullname>
          </Input1>

          <TextArea placeholder="message" text="text"></TextArea>

          <Button>Send Message</Button>
        </Form>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Contact

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  max-height: 800px;
  margin: 0 auto;
  padding: 60px 15px;
`

const Form = styled.div`
  max-width: 770px;
  margin: 0 auto 20px auto;
  display: grid;
  gap: 20px;
  padding: 0 20px;
`

const Heading = styled.h3`
  font-family: "Georgia", sans-serif;
  text-align: center;
  padding: 20px 0;
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 40px;
`

const Input1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`

const Email = styled.input`
  outline: none;
  border: 1px solid white;
  background: transparent;
  flex-grow: 1;
  padding: 10px 15px;
  color: white;
  font-size: 15px;
  font-family: "poppins", sans-serif;
  caret-color: white;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
`

const Fullname = styled(Email)``

const TextArea = styled.textarea`
  outline: none;
  border: 1px solid white;
  background: transparent;
  flex-grow: 1;
  padding: 10px 15px;
  color: white;
  font-size: 15px;
  font-family: "poppins", sans-serif;
  caret-color: white;
  resize: none;
  height: 200px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
`

const Button = styled.button`
  padding: 10px 15px ;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  border: none;
  outline: none;
  font-size: 15px;
  font-family: "poppins", sans-serif;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(60px);
    backdrop-filter: brightness(60%);
    border: 2px solid white;

    box-shadow: 1px 9px 42px 1px rgba(49, 49, 49, 0.75);
    -webkit-box-shadow: 1px 9px 42px 1px rgba(49, 49, 49, 0.75);
    -moz-box-shadow: 1px 9px 42px 1px rgba(49, 49, 49, 0.75);
    transform: translate(0, 10%);
    color: white;
  }
`
