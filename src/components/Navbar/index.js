import React, { useState,useEffect } from "react"
import {
  Wrapper,
  ContentWrapper,
  Logo,
  Links,
  LinkLi,
  LinkItem,
  MobileMenu,
} from "./headerElements"
import { FiMenu } from "react-icons/fi"
import { FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  

  const toggle = () => setIsOpen(!isOpen)

 

  return (
    <Wrapper>
      <ContentWrapper  isOpen={isOpen}>
        <Logo to="/">
          TRIVO
        </Logo>

        <MobileMenu onClick={toggle}>
          {isOpen ? <FaTimes /> : <FiMenu />}
        </MobileMenu>

        <Links onClick={toggle} isOpen={isOpen}>
          <LinkLi>
            <LinkItem to="/explore">Explore</LinkItem>
          </LinkLi>

          <LinkLi>
            <LinkItem to="/journal">Journal</LinkItem>
          </LinkLi>

          <LinkLi>
            <LinkItem to="/contact">Contact Us</LinkItem>
          </LinkLi>
        </Links>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Navbar
