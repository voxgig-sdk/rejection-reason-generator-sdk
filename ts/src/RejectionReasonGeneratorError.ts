
import { Context } from './Context'


class RejectionReasonGeneratorError extends Error {

  isRejectionReasonGeneratorError = true

  sdk = 'RejectionReasonGenerator'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RejectionReasonGeneratorError
}

