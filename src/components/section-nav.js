import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ExternalLink from "./external-link"

const SecNavContainer = styled.section`
  padding: 2rem;
  font-size: 1.4rem;
  margin-top: 9rem;
  h3 {
    text-transform: uppercase;
  }
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
            to="/basic-introduction"
            activeClassName="active"
            partiallyActive={true}
          >
            00 - Introduction
          </Link>
        </li>
        <li>
          <Link
            to="/basic-requirements"
            activeClassName="active"
            partiallyActive={true}
          >
            01 - Requirements
          </Link>
        </li>
        <li>
          <Link
            to="/basic-conversation"
            activeClassName="active"
            partiallyActive={true}
          >
            02 - Conversational fit?
          </Link>
        </li>
        <li>
          <Link
            to="/basic-flow"
            activeClassName="active"
            partiallyActive={true}
          >
            03 - Flow design
          </Link>
        </li>
        <li>
          <Link
            to="/basic-design"
            activeClassName="active"
            partiallyActive={true}
          >
            04 - Visual design
          </Link>
        </li>
        <li>
          <Link
            to="/basic-test"
            activeClassName="active"
            partiallyActive={true}
          >
            05 - Testing
          </Link>
        </li>
        <li>
          <Link
            to="/basic-handoff"
            activeClassName="active"
            partiallyActive={true}
          >
            06 - Handoff
          </Link>
        </li>
      </ul>
      <h3>
        <br />
        Documentation
      </h3>
      <ExternalLink
        linkName="Building blocks"
        linkURL="https://confluence.expedia.biz/display/GCOUX/Building+blocks"
      />
    </SecNavContainer>
  )
}

export default SectionNav
