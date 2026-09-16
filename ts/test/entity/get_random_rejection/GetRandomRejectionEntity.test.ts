

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RejectionReasonGeneratorSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetRandomRejectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when REJECTION_REASON_GENERATOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('REJECTION_REASON_GENERATOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RejectionReasonGeneratorSDK.test()
    const ent = testsdk.GetRandomRejection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.REJECTION_REASON_GENERATOR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_random_rejection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"reason","req":false,"short":"The rejection or acceptance reason","type":"`$STRING`","index$":0},{"active":true,"name":"type","req":false,"short":"Type of response (yes or no)","type":"`$STRING`","index$":1}],"name":"get_random_rejection","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"text","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /","json":"{\"operationId\":\"getRandomRejection\",\"parameters\":[{\"description\":\"Response format (json or plain text)\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"text\",\"enum\":[\"json\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"reason\":{\"description\":\"The rejection or acceptance reason\",\"example\":\"Your request has been processed successfully.\",\"type\":\"string\"},\"type\":{\"description\":\"Type of response (yes or no)\",\"enum\":[\"yes\",\"no\"],\"example\":\"yes\",\"type\":\"string\"}},\"type\":\"object\"}},\"text/plain\":{\"schema\":{\"example\":\"Your request has been denied due to unforeseen circumstances.\",\"type\":\"string\"}}},\"description\":\"Successful response with a random rejection reason\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["format"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_random_rejection","name__orig":"get_random_rejection","Name":"GetRandomRejection","name_":"get_random_rejection","name-":"get-random-rejection","NAME":"GET_RANDOM_REJECTION","index$":0}, {"active":true,"entity":"get_random_rejection","key$":"BasicGetRandomRejectionFlow","kind":"basic","name":"BasicGetRandomRejectionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_random_rejection_ref01","srcdatavar":"get_random_rejection_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_random_rejection_ref01"}}],"index$":0}]}, 'GetRandomRejection')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_random_rejection_ref01_data = Object.values(setup.data.existing.get_random_rejection)[0] as any

    // LOAD
    const get_random_rejection_ref01_ent = client.GetRandomRejection()
    const get_random_rejection_ref01_match_dt0: any = {}
    const get_random_rejection_ref01_data_dt0 = (await get_random_rejection_ref01_ent.load(get_random_rejection_ref01_match_dt0)).data()
    assert(null != get_random_rejection_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_random_rejection/GetRandomRejectionTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RejectionReasonGeneratorSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_random_rejection01','get_random_rejection02','get_random_rejection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'REJECTION_REASON_GENERATOR_TEST_GET_RANDOM_REJECTION_ENTID': idmap,
    'REJECTION_REASON_GENERATOR_TEST_LIVE': 'FALSE',
    'REJECTION_REASON_GENERATOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['REJECTION_REASON_GENERATOR_TEST_GET_RANDOM_REJECTION_ENTID']

  const live = 'TRUE' === env.REJECTION_REASON_GENERATOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['REJECTION_REASON_GENERATOR_TEST_GET_RANDOM_REJECTION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RejectionReasonGeneratorSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.REJECTION_REASON_GENERATOR_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
