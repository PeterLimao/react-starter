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
        关于
      </div>
    )
  }
}

export default About
