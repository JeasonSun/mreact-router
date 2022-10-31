import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  NavLink
} from './react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import Protected from './components/Protected'
import Login from './components/Login'

export default function App () {
  return (
    <>
      <Router>
        <ul className='nav-container'>
          <li>
            <NavLink
              to='/'
              className='nav'
              style={{ fontWeight: 'bold' }}
              activeClassName='active'
              activeStyle={{ color: 'red' }}
              exact
            >
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to='/user' activeStyle={{ color: 'red' }}>
              用户管理
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile' activeStyle={{ color: 'red' }}>
              个人中心
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/user' component={User} />
          <Protected path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  )
}
