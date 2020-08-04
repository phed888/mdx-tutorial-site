import React from "react"
import styled from "styled-components"

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  .counter {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 100%;
    border: 0.2rem solid #333366;
    background-color: #333366;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
    margin-right: 0.8rem;
    p {
      width: 3.6rem;
      color: #ffffff;
    }
  }
  .message {
    color: #333366;
  }
`

const TutorialStep = ({ stepNum, stepText }) => {
  return (
    <StepContainer>
      <div className="counter">
        <p>{stepNum}</p>
      </div>
      <div>{stepText}</div>
    </StepContainer>
  )
}

export default TutorialStep
