import React from "react"
import styled from "styled-components"

const CaptionedImageContainer = styled.div`
  display: flex;
  caption {
    margin-right: 2rem;
    width: 20rem;
    font-size: 1.2rem;
    text-align: left;
    font-style: italic;
  }
  .capImage {
  }
`

const CaptionedImage = ({ caption, imgPath, alt }) => {
  return (
    <CaptionedImageContainer>
      <caption>{caption}</caption>
      <img src="./images/contribute-flow-02.png" alt="Howdy" />
    </CaptionedImageContainer>
  )
}

export default CaptionedImage
