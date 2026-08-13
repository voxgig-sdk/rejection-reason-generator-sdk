<?php
declare(strict_types=1);

// RejectionReasonGenerator SDK configuration

class RejectionReasonGeneratorConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RejectionReasonGenerator",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://dbdaas.rajathjaiprakash.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_random_rejection" => [],
                    "health" => [],
                    "help" => [],
                    "non" => [],
                    "random" => [],
                    "yes" => [],
                ],
            ],
            "entity" => [
        'get_random_rejection' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'reason',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'get_random_rejection',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'text',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'health' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'status',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
          ],
          'name' => 'health',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/health',
                  'parts' => [
                    'health',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'help' => [
          'fields' => [],
          'name' => 'help',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/help',
                  'parts' => [
                    'help',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'non' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'reason',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'non',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'text',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/no',
                  'parts' => [
                    'no',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'random' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'reason',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'random',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'text',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random',
                  'parts' => [
                    'random',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'yes' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'reason',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'yes',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'text',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/yes',
                  'parts' => [
                    'yes',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RejectionReasonGeneratorFeatures::make_feature($name);
    }
}
