import { RejectionReasonGeneratorEntityBase } from '../RejectionReasonGeneratorEntityBase';
import type { RejectionReasonGeneratorSDK } from '../RejectionReasonGeneratorSDK';
import type { Control } from '../types';
import type { Help, HelpLoadMatch } from '../RejectionReasonGeneratorTypes';
declare class HelpEntity extends RejectionReasonGeneratorEntityBase<Help> {
    constructor(client: RejectionReasonGeneratorSDK, entopts: any);
    make(this: HelpEntity): HelpEntity;
    load(this: any, reqmatch?: HelpLoadMatch, ctrl?: Control): Promise<HelpEntity>;
}
export { HelpEntity };
