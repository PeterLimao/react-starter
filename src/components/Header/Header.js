import React, { Component } from 'react'
import './Header.less'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      title: 'header'
    }
  }

  render () {
    return (
      <div className='header'>
        { this.state.title }
      </div>
    )
  }
}

export default Header
