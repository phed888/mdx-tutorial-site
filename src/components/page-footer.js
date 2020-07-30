import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "./icons/icons"

const FooterContainer = styled.footer`
  border-top: 1px solid #ccc;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  .prevPage,
  .nextPage {
    padding: 1rem 2rem;
    background-color: #f0f0f0;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
      color: #00001e;
    }
    &:hover {
      background-color: #dde;
    }
  }
  .nextPage {
    padding-right: 1rem;
    svg {
      margin-left: 0.4rem;
    }
  }
  .prevPage {
    padding-left: 1rem;
    svg {
      margin-right: 0.4rem;
    }
  }
  .nextLabel,
  .prevLabel {
    color: #666;
    margin-right: 0.4rem;
  }
`

const PageFooter = ({ prevSlug, prevPage, nextSlug, nextPage }) => {
  return (
    <FooterContainer>
      {prevSlug ? (
        <Link className="prevPage" to={prevSlug}>
          <Icon icon="arrowLeft" />
          <div className="prevLabel">Prev:</div>
          <div>{prevPage}</div>
        </Link>
      ) : (
        <span />
      )}
      {nextSlug ? (
        <Link className="nextPage" to={nextSlug}>
          <div className="nextLabel">Next:</div>
          <div>{nextPage}</div>
          <Icon icon="arrowRight" />
        </Link>
      ) : (
        <span />
      )}
    </FooterContainer>
  )
}

export default PageFooter
