import React from "react"
import GlobalStyles from "../styles/globalstyle"
import Header from "../components/header"
import SectionNav from "../components/section-nav"
import styled from "styled-components"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const MainContainer = styled.main`
  display: flex;
  section {
    width: 25rem;
  }
  .pageBody {
    width: 95rem;
    padding: 0 0 0 2rem;
  }
`

const DefaultLayout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <description>{description}</description>
      </Helmet>
      <Header />
      <MainContainer>
        <SectionNav />
        <div className="pageBody">{children}</div>
      </MainContainer>
    </>
  )
}

export default DefaultLayout
