import styled from "styled-components";
import { Link } from "gatsby"


export const Wrapper = styled.header`
  background: linear-gradient(180deg, #000000 -28.13%, rgba(0, 0, 0, 0) 100%);
  height: 80px;
  z-index: 1;
  position: sticky;
  top: 0;
  
`

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 20px 20px;
  position: relative;

  @media screen and (max-width: 768px) {
    background: ${({ isOpen }) => (isOpen ? "#111" : "transparent")};
    padding: 0;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  transition: all 0.6s ease-in-out;

  

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: max-content;
    width: 100%;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? "100%" : "-1000px")};
    opacity: 1;
    background: #111;
  }
`

export const LinkLi = styled.li`
  list-style: none;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

export const LinkItem = styled(Link)`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    transition: all 0.3s ease-in-out;

    &:hover {
      color:#2888E0 ;
      
    }
  }
`

export const Logo = styled(Link)`
  font-family: "Georgia", sans-serif;
  font-weight: bold;
  font-size: 22px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0.5rem 0 2rem;
`

export const MobileMenu = styled.div`
  display: none;
  color: white;
  font-size: 26px;
  cursor: pointer;
  margin: 0 0.5rem 0 2rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`