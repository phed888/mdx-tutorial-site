import React from "react"
import Icon from "./icons/icons"
import styled from "styled-components"

const ExternalLinkContainer = styled.div`
  display: inline-block;
  align-items: center;
  position: relative;
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: #0055ff;
  }
  &::after {
    ${props => (props.needed ? `content: "Need content"` : null)};
    white-space: nowrap;
    color: #fff;
    font-size: 1.2rem;
    background-color: #f00;
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    position: absolute;
    display: inline-block;
    top: 0.7rem;
  }
  svg {
    transform: scale(0.75) translateY(0.8rem);
    fill: #0055ff;
    margin: 0;
  }
`

const ExternalLink = ({ linkName, linkURL, needed }) => (
  <ExternalLinkContainer needed={needed}>
    <a href={linkURL} target="_blank" rel="noreferrer">
      {linkName}
    </a>
    <Icon icon="external" />
  </ExternalLinkContainer>
)

export default ExternalLink
