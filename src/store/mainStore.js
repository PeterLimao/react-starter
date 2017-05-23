import { observable, action } from 'mobx'

class MainStore {
  @observable title

  constructor () {
    this.title = '首页'
  }

  @action
  setTitle ({ title }) {
    this.title = title
  }
}

export default new MainStore()
