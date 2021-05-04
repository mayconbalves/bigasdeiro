import React from 'react'
import ReactDOM from 'react-dom'
import Home from 'pages/home'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'components/helmet'

const GlobaStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobaStyled />
    <Helmet />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
