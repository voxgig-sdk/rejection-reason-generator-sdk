"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'RejectionReasonGenerator',
        slug: "rejection-reason-generator",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://dbdaas.rajathjaiprakash.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            get_random_rejection: {},
            health: {},
            help: {},
            non: {},
            random: {},
            yes: {},
        }
    };
    entity = {
        "get_random_rejection": {
            "fields": [
                {
                    "name": "reason",
                    "short": "The rejection or acceptance reason",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Type of response (yes or no)",
                    "type": "`$STRING`"
                }
            ],
            "name": "get_random_rejection",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "text",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/",
                            "segments": [],
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": []
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "health": {
            "fields": [
                {
                    "name": "status",
                    "type": "`$STRING`"
                }
            ],
            "name": "health",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/health",
                            "segments": [
                                {
                                    "lit": "health"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "health"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "help": {
            "fields": [],
            "name": "help",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/help",
                            "segments": [
                                {
                                    "lit": "help"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "help"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "non": {
            "fields": [
                {
                    "name": "reason",
                    "short": "The rejection or acceptance reason",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Type of response (yes or no)",
                    "type": "`$STRING`"
                }
            ],
            "name": "non",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "text",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/no",
                            "segments": [
                                {
                                    "lit": "no"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "no"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "random": {
            "fields": [
                {
                    "name": "reason",
                    "short": "The rejection or acceptance reason",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Type of response (yes or no)",
                    "type": "`$STRING`"
                }
            ],
            "name": "random",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "text",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/random",
                            "segments": [
                                {
                                    "lit": "random"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "random"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "yes": {
            "fields": [
                {
                    "name": "reason",
                    "short": "The rejection or acceptance reason",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Type of response (yes or no)",
                    "type": "`$STRING`"
                }
            ],
            "name": "yes",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "text",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/yes",
                            "segments": [
                                {
                                    "lit": "yes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "yes"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map