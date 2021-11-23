import { Link } from "gatsby"
import styled from "styled-components"

export const Wrapper = styled.div`
  background: #fff;
  height: 150px;
`

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 20px;
`

export const CopyRights = styled.h4`
  margin: auto;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;

  
`

export const Social = styled.li`
  list-style: none;
  margin: 0 8px;
  @media screen and (max-width: 768px) {
    margin: 0 4px;
  }
`

export const SocialItem = styled(Link)`
  color: #333333;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Logo = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  font-family: "Georgia", sans-serif;

  @media screen and (max-width:768px){
    font-size: 15px;
  }
`
