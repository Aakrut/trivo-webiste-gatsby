import React from "react"
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa"
import {
  Wrapper,
  ContentWrapper,
  CopyRights,
  Logo,
  Socials,
  Social,
  SocialItem,
} from './FooterElements'

const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Logo to='/'>TRIVO</Logo>

        <CopyRights>copyright © {new Date().getFullYear()}</CopyRights>

        <Socials>
          <Social>
            <SocialItem to=''>
              <FaInstagram />
            </SocialItem>
          </Social>

          <Social>
            <SocialItem to=''>
              <FaYoutube />
            </SocialItem>
          </Social>

          <Social>
            <SocialItem to=''>
              <FaTwitter />
            </SocialItem>
          </Social>

          <Social>
            <SocialItem to=''>
              <FaFacebook />
            </SocialItem>
          </Social>
        </Socials>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer
