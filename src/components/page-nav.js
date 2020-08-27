import React from "react"
import styled from "styled-components"
import Slugger from "github-slugger"
import { Link } from "gatsby"

const PgNavContainer = styled.section`
  padding: 2rem;
  font-size: 1.4rem;
  margin: -1.5rem 0 0 2rem;
  width: 25rem;
  flex-shrink: 0;
  h3 {
    text-transform: uppercase;
  }
  ul {
    padding: 0;
    border-top: 1px solid #e0e0e0;
    li {
      list-style-type: none;
      line-height: 1.2;
      padding: 0.8rem 0;
      border-bottom: 1px solid #e0e0e0;
      a {
        text-decoration: none;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: #0055ff;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

const PageNav = ({ pageHeaders, noHeader }) => {
  const links = pageHeaders.map(heading => {
    return (
      <li key={heading.value}>
        <Link to={"#" + Slugger.slug(heading.value)}>{heading.value}</Link>
      </li>
    )
  })
  return (
    <PgNavContainer>
      {noHeader ? "" : <h3>On this page</h3>}
      <ul>
        {links}
        {/* <pre>Test</pre> */}
      </ul>
    </PgNavContainer>
  )
}

export default PageNav
