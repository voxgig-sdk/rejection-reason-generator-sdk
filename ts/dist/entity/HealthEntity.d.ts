import { RejectionReasonGeneratorEntityBase } from '../RejectionReasonGeneratorEntityBase';
import type { RejectionReasonGeneratorSDK } from '../RejectionReasonGeneratorSDK';
import type { Control } from '../types';
import type { Health, HealthLoadMatch } from '../RejectionReasonGeneratorTypes';
declare class HealthEntity extends RejectionReasonGeneratorEntityBase<Health> {
    constructor(client: RejectionReasonGeneratorSDK, entopts: any);
    make(this: HealthEntity): HealthEntity;
    load(this: any, reqmatch?: HealthLoadMatch, ctrl?: Control): Promise<HealthEntity>;
}
export { HealthEntity };
