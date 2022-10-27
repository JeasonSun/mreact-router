import React from 'react'

class Profile extends React.Component {
  render () {
    console.log(JSON.stringify(this.props, null, 2))
    return <div> Profile</div>
  }
}

export default Profile
