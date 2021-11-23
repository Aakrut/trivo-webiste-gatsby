import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { data } from "../data/data"
import { Helmet } from "react-helmet"

const Explore = () => {
  const [content] = useState(data)

  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TRIVO</title>
      </Helmet>
      <ContentWrapper>
        <Main>
          <Heading>Explore</Heading>

          <Intro>
            Start Your Next Adventure with Fabulous Destination across the
            World.
          </Intro>
        </Main>

        <Wrap>
          {content.map(item => {
            return (
              <LocationWrapper key={item.id}>
                <Image src={item.image} alt={item.location}></Image>

                <Location>{item.location}</Location>
              </LocationWrapper>
            )
          })}
        </Wrap>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Explore

const Wrapper = styled.section``

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 10px;
  height: 100%;
  
`
const LocationWrapper = styled.div`
  width: 100%;
  height: 375px;
  overflow: hidden;
  position: relative;

  &:hover h4 {
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
    height: 275px;
  }
  @media screen and (max-width: 768px) {
    & h4 {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.9s ease-in-out;
  position: absolute;

  &:hover {
    transform: scale(1.5);
  }
`

const Wrap = styled.div`
  max-width: 975px;
  padding: 0 20px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: minmax(20px, auto);
    gap: 15px;

    div:nth-child(3) {
      grid-column-start: span 2;
    }
  }

  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
    grid-template-rows: minmax(50px, auto);
   
  }

  @media screen and (max-width: 410px) {
    grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
    grid-template-rows: minmax(50px, auto);
    
  }
`

const Main = styled.div`
  margin: 30px 0px;
  text-align: center;
`

const Heading = styled.h2`
  font-family: "Georgia", sans-serif;
  font-size: 50px;
  line-height: 60px;
  color: white;
`

const Intro = styled.p`
  font-size: 20px;
  color: white;
  font-family: "poppins", sans-serif;
`

const Location = styled.h4`
  position: absolute;
  transition: all 0.9s ease-in-out;
  bottom: 0;
  color: white;
  left: 10px;
  opacity: 0;
`
