import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { data2 } from "../data/data"
import { Helmet } from "react-helmet"

const Journal = () => {
  const [journal] = useState(data2)

  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TRIVO</title>
      </Helmet>
      <ContentWrapper>
        <Main>
          <Heading>Journal</Heading>

          <Intro>
            Our Travellers best Stories and Public Lands around world.
          </Intro>
        </Main>

        <Wrap>
          {journal.map(item => {
            return (
              <Container key={item.id}>
                <ImageContainer>
                  <Image src={item.image} alt={item.title} />
                </ImageContainer>

                <Desc>
                  <Title>{item.title}</Title>
                  <Content>{item.content}</Content>
                </Desc>
              </Container>
            )
          })}
        </Wrap>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Journal

const Wrapper = styled.section`
  background: #fff;
`
const ContentWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 80px 10px;


  @media screen and (max-width:768px){
      padding: 80px 40px ;
  }
`

const Main = styled.div`
text-align:center;
padding: 20px 0;
`

const Intro = styled.p`
font-family: 'poppins',sans-serif;
`

const Heading = styled.h2`
font-family: 'Georgia',sans-serif;
font-size: 60px;
line-height: 68px;
`


const Wrap = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
justify-content: center;
gap: 30px;

@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}

`

const Container = styled.div`

`

const ImageContainer = styled.div`
  overflow: hidden;
  height: 360px;
`

const Image = styled.img`
width: 100%;
height: 360px;
transition: all 0.9s ease-in-out;
cursor: pointer;

&:hover{
    transform: scale(1.2);
}
`

const Desc = styled.div`
text-align:center;

`

const Title = styled.h3`
font-size: 25px;
line-height: 42px;
font-family: 'Playfair Display',sans-serif;
margin-top:10px;
`

const Content = styled.p`
font-size: 18px;
font-family: 'poppins',sans-serif;
`