import React from "react"
import styled from "styled-components"
import NotificationHeader from "./notification-header"

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
`

const Notification = ({
  children,
  headerText,
  textColor,
  icon,
  backgroundColor,
}) => {
  return (
    <NotificationContainer backgroundColor={backgroundColor}>
      <NotificationHeader
        headerText={headerText}
        textColor={textColor}
        icon={icon}
      />
      {children}
    </NotificationContainer>
  )
}

export default Notification
