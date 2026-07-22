-- RejectionReasonGenerator SDK error

local RejectionReasonGeneratorError = {}
RejectionReasonGeneratorError.__index = RejectionReasonGeneratorError


function RejectionReasonGeneratorError.new(code, msg, ctx)
  local self = setmetatable({}, RejectionReasonGeneratorError)
  self.is_sdk_error = true
  self.sdk = "RejectionReasonGenerator"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RejectionReasonGeneratorError:error()
  return self.msg
end


function RejectionReasonGeneratorError:__tostring()
  return self.msg
end


return RejectionReasonGeneratorError
