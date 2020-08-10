import React from "react"
import styled from "styled-components"
import { uuid } from "uuidv4"

const ChecklistItemContainer = styled.li`
  display: flex;
  align-items: top;
  list-style-type: none;
  padding: 0.8rem 0;
  /* margin-left: 2.4rem; */
  input {
    opacity: 0;
    &:checked + label::before {
      background-color: #000099;
    }
    &:checked + label::after {
      display: block;
    }
  }
  label {
    position: relative;
    cursor: pointer;
    line-height: 1.2;
    &::before,
    &::after {
      position: absolute;
    }
    &::before {
      content: "";
      height: 1.4rem;
      width: 1.4rem;
      border: 0.2rem solid #000099;
      border-radius: 0.3rem;
      left: -2.2rem;
      top: 0.2rem;
    }
    &::after {
      content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='white'><path d='M5 12.5L1 8L2.5 6L5 9L11.5 1.5L13 3L5 12.5Z'></path></svg>");
      width: 1.4rem;
      height: 1.4rem;
      left: -2.2rem;
      top: 0.1rem;
      transform-origin: center;
      transform: scale(0.8);
      display: none;
    }
  }
`

const CheckListItem = ({ itemLabel, isChecked }) => {
  const uniqueID = uuid()

  return (
    <ChecklistItemContainer>
      <input type="checkbox" id={uniqueID} checked={isChecked} />
      <label for={uniqueID}>{itemLabel}</label>
    </ChecklistItemContainer>
  )
}

export default CheckListItem
