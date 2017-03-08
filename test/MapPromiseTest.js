/* eslint-disable prefer-arrow-callback */

import { describe, it } from 'mocha'
import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import MapPromise from '../src/MapPromise'

chai.use(chaiAsPromised)

describe('MapPromise', function () {
  describe('fulfilled()', function () {
    it('should be fullfilled', function () {
      return expect(MapPromise.mapFirst())
        .to.eventually.be.fulfilled
        .and.that.equal(1000)
    })
  })
})
