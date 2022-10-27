import React from 'react'

class Home extends React.Component {
  render () {
    console.log(JSON.stringify(this.props, null, 2))
    return <div> Home</div>
  }
}

export default Home
