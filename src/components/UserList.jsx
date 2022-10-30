import React from 'react'
import { Link } from '../react-router-dom'
import UserApi from '../UserApi'

class UserDetail extends React.Component {
  constructor (props) {
    super(props)
    const userList = UserApi.getUsers()
    this.state = {
      list: userList
    }
  }
  render () {
    return (
      <div>
        {this.state.list.map(user => (
          <div key={user.id}>
            <p>
              <b>id:</b> <span style={{ marginRight: '10px' }}>{user.id}</span>
              <b> username:</b>
              <span style={{ marginRight: '20px' }}>{user.userName}</span>
              <Link to={{ pathname: `/user/detail/${user.id}`, state: user }}>
                查看详情
              </Link>
            </p>
          </div>
        ))}
      </div>
    )
  }
}

export default UserDetail
