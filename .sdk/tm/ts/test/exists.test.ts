
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RejectionReasonGeneratorSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RejectionReasonGeneratorSDK.test()
    equal(null !== testsdk, true)
  })

})
