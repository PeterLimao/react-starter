import React, { Component } from 'react'

class About extends Component {
  constructor () {
    super()
    this.state = {
      title: '关于'
    }
  }

  render () {
    return (
      <div className='about-page'>
        {this.state.title}
      </div>
    )
  }
}

export default About
