import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --page-width: 120rem;
  }

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
    width: var(--page-width);
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
      background-color: transparent;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #ccc;
      border-top: none;
      text-align: left;
      white-space: nowrap;
      text-transform: uppercase;
      font-size: 1.2rem;
      letter-spacing: 0.3rem;
      color: #666;
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
  p > .gatsby-resp-image-wrapper {
    border-radius: .8rem;
    border: 1.6rem solid #fff;
    box-shadow: 0px 0px 2px 2px #f4f4f4;
    margin: 2.4rem 0 0;
    width: 100%;
  }
  
  p + figcaption {
    font-size: 1.2rem;
    font-style: italic;
    text-align: center;
    margin-top: -1.6rem;
    padding: 0.4rem 0;
    color: #666;
  }
  li > p {
        margin: 0 .02rem;
      }
`

export default GlobalStyles
