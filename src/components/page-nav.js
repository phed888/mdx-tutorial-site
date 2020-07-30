import React from "react"
import styled from "styled-components"

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
    li {
      list-style-type: none;
    }
  }
`

const PageNav = () => {
  return (
    <PgNavContainer>
      <h3>On this page</h3>
    </PgNavContainer>
  )
}

export default PageNav
