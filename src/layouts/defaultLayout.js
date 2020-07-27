import React from 'react'
import GlobalStyles from '../styles/globalstyle'
import Header from '../components/header'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'

const MainContainer = styled.main`
  margin: 2rem;
`

const DefaultLayout = ({ children }) => {
  
  const { title, description } = useSiteMetadata();

  return (
  <>
    <GlobalStyles />
    <Helmet>
      <html lang="en" />
      <title>{ title }</title>
      <description>{ description }</description>
    </Helmet>
    <Header />
    <MainContainer>{ children }</MainContainer>
  </>
)}

export default DefaultLayout;