package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "RejectionReasonGenerator",
			"slug": "rejection-reason-generator",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://dbdaas.rajathjaiprakash.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_random_rejection": map[string]any{},
				"health": map[string]any{},
				"help": map[string]any{},
				"non": map[string]any{},
				"random": map[string]any{},
				"yes": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_random_rejection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "reason",
						"short": "The rejection or acceptance reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of response (yes or no)",
						"type": "`$STRING`",
					},
				},
				"name": "get_random_rejection",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "text",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"segments": []any{},
								"select": map[string]any{
									"exist": []any{
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"health": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
				},
				"name": "health",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/health",
								"segments": []any{
									map[string]any{
										"lit": "health",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"health",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"help": map[string]any{
				"fields": []any{},
				"name": "help",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/help",
								"segments": []any{
									map[string]any{
										"lit": "help",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"help",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"non": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "reason",
						"short": "The rejection or acceptance reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of response (yes or no)",
						"type": "`$STRING`",
					},
				},
				"name": "non",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "text",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/no",
								"segments": []any{
									map[string]any{
										"lit": "no",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"no",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"random": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "reason",
						"short": "The rejection or acceptance reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of response (yes or no)",
						"type": "`$STRING`",
					},
				},
				"name": "random",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "text",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/random",
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"random",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"yes": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "reason",
						"short": "The rejection or acceptance reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of response (yes or no)",
						"type": "`$STRING`",
					},
				},
				"name": "yes",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "text",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/yes",
								"segments": []any{
									map[string]any{
										"lit": "yes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"yes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
