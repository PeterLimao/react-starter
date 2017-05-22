import React, { Component } from 'react'

class Msg extends Component {
  constructor () {
    super()
    this.state = {
      title: '信息'
    }
  }

  render () {
    return (
      <div className='msg-page'>
        {this.state.title}
      </div>
    )
  }
}

export default Msg
