-- RejectionReasonGenerator SDK exists test

local sdk = require("rejection-reason-generator_sdk")

describe("RejectionReasonGeneratorSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
