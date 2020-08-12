import React from "react"
import styled from "styled-components"

const FlagContainer = styled.div`
  display: inline-block;
  padding: 0 0.8rem;
  border-radius: 0.4rem;
  background-color: #ff00ff;
  color: white;
`

const MoveFlag = ({ message }) => {
  return <FlagContainer>{message}</FlagContainer>
}

export default MoveFlag
