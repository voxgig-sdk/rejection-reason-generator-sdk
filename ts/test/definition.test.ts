import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "get_random_rejection",
    "accessor": "GetRandomRejection",
    "op": "load",
    "method": "GET",
    "path": "/",
    "args": [],
    "select": {
      "format": "text"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "text/plain",
      "application/json"
    ],
    "query": [
      "format"
    ],
    "queryArgs": [
      {
        "name": "format",
        "wire": "format"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "reason": "Your request has been processed successfully.",
      "type": "yes"
    },
    "idField": "id"
  },
  {
    "entity": "health",
    "accessor": "Health",
    "op": "load",
    "method": "GET",
    "path": "/health",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "text/plain",
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "healthy"
    },
    "idField": "id"
  },
  {
    "entity": "help",
    "accessor": "Help",
    "op": "load",
    "method": "GET",
    "path": "/help",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "text/plain",
      "text/html"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "non",
    "accessor": "Non",
    "op": "load",
    "method": "GET",
    "path": "/no",
    "args": [],
    "select": {
      "format": "text"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "text/plain",
      "application/json"
    ],
    "query": [
      "format"
    ],
    "queryArgs": [
      {
        "name": "format",
        "wire": "format"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "reason": "Your request has been processed successfully.",
      "type": "yes"
    },
    "idField": "id"
  },
  {
    "entity": "random",
    "accessor": "Random",
    "op": "load",
    "method": "GET",
    "path": "/random",
    "args": [],
    "select": {
      "format": "text"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "text/plain",
      "application/json"
    ],
    "query": [
      "format"
    ],
    "queryArgs": [
      {
        "name": "format",
        "wire": "format"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "reason": "Your request has been processed successfully.",
      "type": "yes"
    },
    "idField": "id"
  },
  {
    "entity": "yes",
    "accessor": "Yes",
    "op": "load",
    "method": "GET",
    "path": "/yes",
    "args": [],
    "select": {
      "format": "text"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "text/plain",
      "application/json"
    ],
    "query": [
      "format"
    ],
    "queryArgs": [
      {
        "name": "format",
        "wire": "format"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "reason": "Your request has been processed successfully.",
      "type": "yes"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
