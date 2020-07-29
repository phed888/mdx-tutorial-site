import { createGlobalStyle } from 'styled-components'

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
  * + * {
    margin-top: 1rem;
  }
  body {
    background-color: #fff;
    color: #555;
    font-size: 1.6rem;
    line-height: 1.75;
    width: 97rem;
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
    th, td {
      padding: 5px 10px;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-top: none;
      &:first-child {
        border-left: 1px solid #ccc;
      }
    }
  }
`

export default GlobalStyles;