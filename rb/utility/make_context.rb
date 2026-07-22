# RejectionReasonGenerator SDK utility: make_context
require_relative '../core/context'
module RejectionReasonGeneratorUtilities
  MakeContext = ->(ctxmap, basectx) {
    RejectionReasonGeneratorContext.new(ctxmap, basectx)
  }
end
