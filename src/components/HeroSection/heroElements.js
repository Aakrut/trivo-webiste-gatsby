import styled from "styled-components"
import BackgroundImg from "../../images/background.jpg"

export const Wrapper = styled.div`
  background: url(${BackgroundImg}) no-repeat center center/cover ;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
  text-align: center;
  
`


export const Main = styled.h2`
  font-weight: bold;
  font-size: 60px;
  color: white;
`

export const Content = styled.p`
  max-width: 600px;
  font-family: Poppins;
  font-size: 20px;
  line-height: 30px;
  color: white;
`

export const Button = styled.button`
  width: 300px;
  height: 70px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  border: none;
  outline: none;
  font-family: "poppins", sans-serif;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    
    border: 2px solid white;

    box-shadow: 1px 9px 42px 1px rgba(49, 49, 49, 0.75);
    -webkit-box-shadow: 1px 9px 42px 1px rgba(49, 49, 49, 0.75);
    -moz-box-shadow: 1px 9px 42px 1px rgba(49, 49, 49, 0.75);
    transform: translate(0, 10%);
    color: white;
  }
`
