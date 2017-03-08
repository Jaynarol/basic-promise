import Promise from 'bluebird'
import NumberPromise from './NumberPromise'

export default class MyPromise {

  static fulfilled() {
    return Promise
      .try(() => NumberPromise.getNumber())
      .then(this.nameAddNumber)
      .then(this.addMrToName)
  }

  static nameAddNumber(number) {
    return `jay ${number}`
  }

  static addMrToName(name) {
    return `mr. ${name}`
  }

}
