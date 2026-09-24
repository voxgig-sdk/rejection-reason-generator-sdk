"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectionReasonGeneratorError = void 0;
class RejectionReasonGeneratorError extends Error {
    isRejectionReasonGeneratorError = true;
    sdk = 'RejectionReasonGenerator';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.RejectionReasonGeneratorError = RejectionReasonGeneratorError;
//# sourceMappingURL=RejectionReasonGeneratorError.js.map