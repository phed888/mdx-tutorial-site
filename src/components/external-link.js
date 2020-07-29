import React from "react"
import Icon from "./icons/icons"
import styled from "styled-components"

const ExternalLinkContainer = styled.div`
  display: inline-block;
  align-items: center;
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: #0055ff;
  }
  svg {
    transform: scale(0.75) translateY(0.8rem);
    fill: #0055ff;
    margin: 0;
  }
`

const ExternalLink = ({ linkName, linkURL }) => (
  <ExternalLinkContainer>
    <a href={linkURL} target="_blank" rel="noreferrer">
      {linkName}
    </a>
    <Icon icon="external" />
  </ExternalLinkContainer>
)

export default ExternalLink
