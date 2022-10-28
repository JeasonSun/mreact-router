import React from 'react'

class UserDetail extends React.Component {
  render () {
    console.log(JSON.stringify(this.props, null, 2))
    return <div> UserDetail</div>
  }
}

export default UserDetail
