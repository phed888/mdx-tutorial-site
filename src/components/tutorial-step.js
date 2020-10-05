import React from "react"
import styled from "styled-components"

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  ol {
    list-style: none;
    padding-left: 4rem;
    counter-reset: step-counter;
    li {
      position: relative;
      counter-increment: step-counter;
      &::before {
        content: '';
        position: absolute;
        left: -4rem;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 100%;
        background-color: #1a77f6;
        display: flex;
        align-items: center;
      }
      &::after {
        content: counter(step-counter);
        position: absolute;
        left: -4rem;
        top: 0;
        width: 2.4rem;
        text-align: center;
        font-weight: bold;
        font-size: 1.4rem;
        color: #fff;
        position: absolute;
        z-index: 10;
      }
    }
  }
  .message {
    color: #333366;
  }
`

const TutorialStep = ({ children }) => {
  return (
    <StepContainer>
      { children }
    </StepContainer>
  )
}

export default TutorialStep
