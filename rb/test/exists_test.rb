# RejectionReasonGenerator SDK exists test

require "minitest/autorun"
require_relative "../RejectionReasonGenerator_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RejectionReasonGeneratorSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
