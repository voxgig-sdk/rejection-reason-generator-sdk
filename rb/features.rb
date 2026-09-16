# RejectionReasonGenerator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RejectionReasonGeneratorFeatures
  def self.make_feature(name)
    case name
    when "base"
      RejectionReasonGeneratorBaseFeature.new
    when "ratelimit"
      RejectionReasonGeneratorRatelimitFeature.new
    when "retry"
      RejectionReasonGeneratorRetryFeature.new
    when "test"
      RejectionReasonGeneratorTestFeature.new
    when "timeout"
      RejectionReasonGeneratorTimeoutFeature.new
    else
      RejectionReasonGeneratorBaseFeature.new
    end
  end
end
