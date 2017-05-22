import { observable, action } from 'mobx'

class MainStore {
  @observable state = {
    title: '首页'
  }

  @action setTitle ({ title }) {
    this.state.title = title
  }
}

export default new MainStore()
