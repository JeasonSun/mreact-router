import React from 'react'
import { BrowserRouter as Router, Route } from './react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

export default function App () {
  return (
    <>
      <h1>react-router-dom:</h1>
      <p> BrowserRouter, Router, Route</p>
      <p> history 使用自己的 createBrowserHistory</p>

      <Router>
        <Route path='/' component={Home} exact />
        <Route path='/user' component={User} />
        <Route path='/profile' component={Profile} />
      </Router>
    </>
  )
}
