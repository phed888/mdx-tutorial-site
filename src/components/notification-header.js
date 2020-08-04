import React from "react"
import styled from "styled-components"
import Icon from "./icons/icons"

const NotifHeaderContainer = styled.header`
  display: flex;
  color: ${props => props.textColor};
  border-bottom: 1px solid
    ${props => (props.borderColor ? props.borderColor : props.textColor)};
  padding-bottom: 0;
  margin-bottom: 1.2rem;
  svg {
    margin: 0 1.2rem 1.2rem;
    transform: translateY(2rem);
    margin-left: 0;
    fill: ${props => props.textColor};
  }
  h3 {
    margin-bottom: 1rem;
    font-weight: normal;
  }
`

const NotificationHeader = ({ headerText, textColor, borderColor, icon }) => {
  return (
    <NotifHeaderContainer textColor={textColor} borderColor={borderColor}>
      <Icon icon={icon} />
      <h3>{headerText}</h3>
    </NotifHeaderContainer>
  )
}

export default NotificationHeader
