import React from "react"
import styled from "styled-components"

const ImageOuterWrapper = styled.div`
  display: flex;
`

const ImageWrapper = ({ children, caption }) => {
  return (
    <ImageOuterWrapper>
      <caption>{caption}</caption>
      {children}
    </ImageOuterWrapper>
  )
}

export default ImageWrapper
