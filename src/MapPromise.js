import Promise from 'bluebird'

export default class MapPromise {

  static mapFirst() {
    return Promise
      .try(() => [100, 100, 100, 100, 100])
      .map(number => number * 2, { concurrency: 1 })
      .then(numbers => numbers.reduce((p, v) => p + v, 0))
  }

}
