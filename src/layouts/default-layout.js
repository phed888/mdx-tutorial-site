import React from "react"
import GlobalStyles from "../styles/globalstyle"
import Header from "../components/header"
import SectionNav from "../components/section-nav"
import styled from "styled-components"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 800,
    offset: 100,
  })
}

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const MainContainer = styled.main`
  display: flex;
  flex: 1;
  padding: 0 2rem 0;
  section {
    width: 25rem;
    flex-shrink: 0;
  }
  .pageBody {
    width: 95rem;
    padding: 0 0 0 2rem;
  }
`

const DefaultLayout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <SiteWrapper>
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
    </SiteWrapper>
  )
}

export default DefaultLayout
