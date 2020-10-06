import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SecNavContainer = styled.section`
  padding: 2rem;
  font-size: 1.4rem;
  ul {
    padding: 0;
    li {
      list-style-type: none;
      a:link,
      a:hover,
      a:active,
      a:visited {
        text-decoration: none;
        padding: 1rem;
        background-color: #f0f0f0;
        color: #000;
        display: block;
        margin-bottom: 0.2rem;
        border-radius: 0.4rem;
        line-height: 1.3;
      }
      a:hover {
        background-color: #dde;
      }
      a.active {
        background-color: #333366;
        color: #fff;
        cursor: default;
      }
    }
  }
`

const SectionNav = () => {
  return (
    <SecNavContainer>
      <h3>Basic tutorial</h3>
      <ul>
        <li>
          <Link
            to="/requirements"
            activeClassName="active"
            partiallyActive={true}
          >
            01 - Requirements
          </Link>
        </li>
        <li>
          <Link to="/flows" activeClassName="active" partiallyActive={true}>
            02 - Flows
          </Link>
        </li>
        <li>
          <Link
            to="/visual-design"
            activeClassName="active"
            partiallyActive={true}
          >
            03 - Visual design
          </Link>
        </li>
        <li>
          <Link to="/testing" activeClassName="active" partiallyActive={true}>
            04 - Testing
          </Link>
        </li>
        <li>
          <Link to="/handoff" activeClassName="active" partiallyActive={true}>
            05 - Handoff
          </Link>
        </li>
      </ul>
    </SecNavContainer>
  )
}

export default SectionNav
