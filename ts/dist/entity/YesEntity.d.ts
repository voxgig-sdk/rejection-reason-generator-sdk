import { RejectionReasonGeneratorEntityBase } from '../RejectionReasonGeneratorEntityBase';
import type { RejectionReasonGeneratorSDK } from '../RejectionReasonGeneratorSDK';
import type { Control } from '../types';
import type { Yes, YesLoadMatch } from '../RejectionReasonGeneratorTypes';
declare class YesEntity extends RejectionReasonGeneratorEntityBase<Yes> {
    constructor(client: RejectionReasonGeneratorSDK, entopts: any);
    make(this: YesEntity): YesEntity;
    load(this: any, reqmatch?: YesLoadMatch, ctrl?: Control): Promise<YesEntity>;
}
export { YesEntity };
