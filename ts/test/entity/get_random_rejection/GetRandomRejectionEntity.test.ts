

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"reason":{"a":true,"h":"Reason","n":"reason","r":false,"sh":"The rejection or acceptance reason","t":"`$STRING`","key$":"reason","index$":0},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of response (yes or no)","t":"`$STRING`","key$":"type","index$":1}},"name":"get_random_rejection","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"text","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/","q":{"exist":["format"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_random_rejection","name__orig":"get_random_rejection","Name":"GetRandomRejection","name_":"get_random_rejection","name-":"get-random-rejection","NAME":"GET_RANDOM_REJECTION","index$":0}, {"active":true,"entity":"get_random_rejection","key$":"BasicGetRandomRejectionFlow","kind":"basic","name":"BasicGetRandomRejectionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"get_random_rejection_ref01","srcdatavar":"get_random_rejection_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_random_rejection_ref01"}}],"index$":0}]}, 'GetRandomRejection', {"GET /":{"protocol":"http","operationId":"getRandomRejection","responses":{"200":{"description":"Successful response with a random rejection reason","content":{"text/plain":{"schema":{"type":"string","example":"Your request has been denied due to unforeseen circumstances."}},"application/json":{"schema":{"type":"object","properties":{"reason":{"description":"The rejection or acceptance reason","example":"Your request has been processed successfully.","key$":"reason","type":"string"},"type":{"description":"Type of response (yes or no)","enum":["yes","no"],"example":"yes","key$":"type","type":"string"}},"x-ref":"#/components/schemas/ReasonResponse","index$":0}}}}},"parameters":[{"name":"format","in":"query","description":"Response format (json or plain text)","required":false,"schema":{"type":"string","enum":["json"],"default":"text"},"index$":0}],"securitySource":"unspecified"}})
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
  
