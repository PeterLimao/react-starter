import React, { Component } from 'react'
import { observer } from 'mobx-react'
import MainStore from '@/store/mainStore'

@observer
class Main extends Component {
  render () {
    return (
      <div className='main-page'>
        {MainStore.state.title}
        <button onClick={this.changeTitle}>点击</button>
      </div>
    )
  }

  changeTitle () {
    MainStore.setTitle({ title: '测试' })
  }
}

export default Main
