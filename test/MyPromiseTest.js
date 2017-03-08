/* eslint-disable prefer-arrow-callback */

import { describe, it } from 'mocha'
import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import MyPromise from '../src/MyPromise'

chai.use(chaiAsPromised)

describe('MyPromise', function () {
  describe('fulfilled()', function () {
    it('should be fullfilled', function () {
      return expect(MyPromise.fulfilled())
        .to.eventually.be.fulfilled
        .and.that.equal('mr. jay 0')
    })
  })

  describe('nameAddNumber()', function () {
    it('should be jay 100', function () {
      return expect(MyPromise.nameAddNumber(100))
        .to.equal('jay 100')
    })
  })
})
