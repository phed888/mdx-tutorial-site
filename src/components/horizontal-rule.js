import React from "react"
import styled from "styled-components"

const HRContainer = styled.hr`
  border-top: ${props => (props.thickness ? props.thickness : "0.1rem")}
    ${props => (props.style ? props.style : "solid")} ${props => props.color};
`

const HRule = ({ thickness, style, color }) => {
  return <HRContainer color={(thickness, style, color)} />
}

export default HRule
