import React from 'react'
import { Route, Link } from '../react-router-dom'
import UserList from './UserList'
import UserDetail from './UserDetail'
import AddUser from './AddUser'

class User extends React.Component {
  render () {
    return (
      <>
        <h3>用户管理模块</h3>
        <ul>
          <li>
            <Link to={{ pathname: '/user/list' }}>用户列表</Link>
          </li>
          <li>
            <Link to={{ pathname: '/user/add' }}>新增用户</Link>
          </li>
        </ul>
        <div>
          <Route path='/user/list' component={UserList} />
          <Route path='/user/add' component={AddUser} />
          <Route path='/user/detail/:id' component={UserDetail} />
        </div>
      </>
    )
  }
}

export default User
