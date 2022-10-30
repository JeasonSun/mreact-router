import React from 'react'
import UserApi from '../UserApi'

class Login extends React.Component {
  login = () => {
    console.log(this)
    UserApi.login()
    let to = '/'
    if (this.props.location.state) {
      to = this.props.location.state.from || '/'
    }
    this.props.history.push(to)
  }
  logout = () => {
    UserApi.logout()
  }
  render () {
    return (
      <>
        <button onClick={this.login}>登录</button>
        <button onClick={this.logout}>退出</button>
      </>
    )
  }
}

export default Login
