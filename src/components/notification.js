import React from "react"
import styled from "styled-components"
import NotificationHeader from "./notification-header"
import { lighten } from "polished"

const NotificationContainer = styled.div`
  border-radius: 0.8rem;
  background-color: ${props => props.backgroundColor};
  padding: 0.5rem 2rem 2rem;
  width: 100%;
  margin: 2rem 0;
  line-height: 1.4;
  ul {
    padding: 0;
    li {
      list-item-placement: outside;
      margin-left: 1.4rem;
      margin-top: 0;
    }
  }
  th {
    color: ${props => props.textColor};
  }
  th,
  td {
    border-color: ${props =>
      props.borderColor && lighten(0.4, props.borderColor)};
  }
  td:first-child {
    border-left-color: ${props =>
      props.borderColor && lighten(0.4, props.borderColor)};
  }
`

const Notification = ({
  children,
  headerText,
  textColor,
  borderColor,
  icon,
  backgroundColor,
}) => {
  return (
    <NotificationContainer
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
    >
      <NotificationHeader
        headerText={headerText}
        textColor={textColor}
        borderColor={borderColor}
        icon={icon}
      />
      {children}
    </NotificationContainer>
  )
}

export default Notification
