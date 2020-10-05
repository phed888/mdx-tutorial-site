import React from "react"
import styled from "styled-components"
// import GlobalStyles from "../styles/globalstyle"
import Logo from '../../images/Expedia-Group-Logo_E-Horizontal-Logo-Sticky.png'
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  background-color: #343a40;
  position: sticky;
  top: 0;
  left: 0;
  margin-left: -50%;
  margin-right: -50%;
  width: 100vw;
  z-index: 1024;
  height: 7.6rem;
`
const LiveArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--page-width);
  margin: 0 auto;
  position: relative;
  padding: 0 2.4rem;
  height: 100%;
`

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 1rem 0 0;
  padding: 0.5rem;
  text-decoration: none;
`

const NavContainer = styled.nav`
  margin: 0;
  padding: 0;
`

const Header = () => (
  <HeaderContainer>
    <LiveArea>
      <img src={Logo} alt="Expedia Group" height="50px" />
      <NavContainer>
        <NavLink to="/">Home</NavLink>
      </NavContainer>
    </LiveArea>
  </HeaderContainer>
)

export default Header
