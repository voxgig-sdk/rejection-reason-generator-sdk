
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RejectionReasonGeneratorSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RejectionReasonGeneratorSDK.test()
    equal(testsdk instanceof RejectionReasonGeneratorSDK, true,
      'RejectionReasonGeneratorSDK.test() must return a client synchronously')
  })

})
