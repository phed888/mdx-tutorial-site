import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  html {
    background-color: #eee;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* * + * {
    margin-top: 1rem;
  } */
  body {
    background-color: #fff;
    color: #555;
    font-size: 1.6rem;
    line-height: 1.75;
    width: 120rem;
    margin: 0 auto;
    /* remove margin-top from __gatsby div */
    > div {
      margin-top: 0;
      background-color: #fff;
    }
    main {
    }
    .contains-task-list {
      padding-left: 2rem;
    }
    .task-list-item {
      list-style-type: none;
      list-style-position: outside;
    }
    table {
      border-collapse: collapse;
      border: none
    }
    th,
    td {
      padding: 10px 20px;
    }
    th {
      background-color: #eee;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #ccc;
      border-top: none;
      white-space: nowrap;
      &:first-child {
        border-left: 1px solid #eee;
      }
      &:last-child {
        border-right: 1px solid #eee;
      }
    }
    td {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-top: none;
      line-height: 1.2;
    &:first-child {
      border-left: 1px solid #ccc;
    }
    li {
      margin: 0;
    }
  }
  .gatsby-resp-image-wrapper {
    border-radius: .8rem;
    box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.25);
    margin: 3rem 0;
  }
`

export default GlobalStyles
