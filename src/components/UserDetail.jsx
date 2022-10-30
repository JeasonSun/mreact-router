import React from 'react'
import UserApi from '../UserApi'

class UserDetail extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    let userInfo = this.props.location.state
    if (userInfo.id) {
      userInfo = UserApi.find(userInfo.id)
    }
    return (
      <div>
        <p>
          用户名： <span>{userInfo.userName}</span>
        </p>
        <p>
          ID： <span>{userInfo.id}</span>
        </p>
      </div>
    )
  }
}

export default UserDetail
