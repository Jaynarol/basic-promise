/* eslint-disable prefer-arrow-callback */

import { describe, it } from 'mocha'
import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import NumberPromise from '../src/NumberPromise'

chai.use(chaiAsPromised)

describe('NumberPromise', function () {
  describe('getNumber()', function () {
    it('should be catch but resolve 0', function () {
      return expect(NumberPromise.getNumber())
        .to.eventually.be.fulfilled
        .to.equal(0)
    })
  })
})
