import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import styled, { injectGlobal } from 'react-emotion';

import Routes from 'react-static-routes'
import Nav from '@components/nav'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <Router>
    <Nav>
      <Link exact to="/">Home</Link>
    </Nav>
    <div className="content">
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
