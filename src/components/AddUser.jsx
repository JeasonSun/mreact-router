import React from 'react'
import UserApi from '../UserApi'

class AddUser extends React.Component {
  constructor (props) {
    super(props)
    this.userNameRef = React.createRef()
  }

  onSubmitHandler = event => {
    event.preventDefault()
    const userName = this.userNameRef.current.value;
    const id = Date.now();
    UserApi.add({
      id,
      userName
    })
    this.userNameRef.current.value = null;
  }

  render () {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type='text' ref={this.userNameRef} />
        <input type='submit' />
      </form>
    )
  }
}

export default AddUser
