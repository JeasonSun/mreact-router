import React from 'react'
import { HashRouter as Router, Link, Route, Switch } from './react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

export default function App () {
  return (
    <>
      <Router>
        <ul className='nav-container'>
          <li>
            <Link to='/'>首页</Link>
          </li>
          <li>
            <Link to='/user'>用户管理</Link>
          </li>
          <li>
            <Link to='/profile'>个人中心</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/user' component={User} exact />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  )
}
