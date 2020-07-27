import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderContainer = styled.header`
  padding: 2rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(Link)`
  color: #222;
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 1rem 0 0;
  padding: .5rem;
  text-decoration: none;
`

const NavContainer = styled.nav`
  margin: 0;
  padding: 0;
`

const Header = () => (
  <HeaderContainer>
    <NavLink to="/">CDS Tutorials</NavLink>
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/test/">Test</NavLink>
    </NavContainer>
  </HeaderContainer>
)

export default Header;