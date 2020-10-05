import React from "react"
import styled from "styled-components"

const CaptionedImageContainer = styled.div`
  display: flex;
  padding: 2.4rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0 0 0 .2);
  caption {
    margin-right: 2rem;
    width: 20rem;
    font-size: 1.2rem;
    text-align: left;
    font-style: italic;
  }
`

const CaptionedImage = ({ caption, children }) => {
  return (
    <CaptionedImageContainer>
      { children }
      <caption>{caption}</caption>
    </CaptionedImageContainer>
  )
}

export default CaptionedImage
