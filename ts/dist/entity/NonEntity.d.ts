import { RejectionReasonGeneratorEntityBase } from '../RejectionReasonGeneratorEntityBase';
import type { RejectionReasonGeneratorSDK } from '../RejectionReasonGeneratorSDK';
import type { Control } from '../types';
import type { Non, NonLoadMatch } from '../RejectionReasonGeneratorTypes';
declare class NonEntity extends RejectionReasonGeneratorEntityBase<Non> {
    constructor(client: RejectionReasonGeneratorSDK, entopts: any);
    make(this: NonEntity): NonEntity;
    load(this: any, reqmatch?: NonLoadMatch, ctrl?: Control): Promise<NonEntity>;
}
export { NonEntity };
