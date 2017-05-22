import React, { Component } from 'react'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      title: '首页'
    }
  }

  render () {
    return (
      <div className='main-page'>
        {this.state.title}
      </div>
    )
  }
}

export default Main
