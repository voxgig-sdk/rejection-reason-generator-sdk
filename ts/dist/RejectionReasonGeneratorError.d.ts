import { Context } from './Context';
declare class RejectionReasonGeneratorError extends Error {
    isRejectionReasonGeneratorError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RejectionReasonGeneratorError };
