# RejectionReasonGenerator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RejectionReasonGeneratorFeatures
  def self.make_feature(name)
    case name
    when "base"
      RejectionReasonGeneratorBaseFeature.new
    when "test"
      RejectionReasonGeneratorTestFeature.new
    else
      RejectionReasonGeneratorBaseFeature.new
    end
  end
end
