import Promise from 'bluebird'

export default class NumberPromise {

  static getNumber() {
    return Promise
      .try(this.getNumbers)
      .then(this.numberMulti)
      .then(() => {
        throw new Error('invalid')
      })
      .catch(error => {
        if (error.message.includes('invalid')) {
          return 0
        }
        throw error
      })
  }

  static getNumbers() {
    return 50
  }

  static numberMulti(number) {
    return number * 2
  }

}
