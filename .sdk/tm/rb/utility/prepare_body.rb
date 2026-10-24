# RejectionReasonGenerator SDK utility: prepare_body
require_relative 'media'
module RejectionReasonGeneratorUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RejectionReasonGeneratorUtilities.raw_body(ctx.reqdata) if RejectionReasonGeneratorUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
