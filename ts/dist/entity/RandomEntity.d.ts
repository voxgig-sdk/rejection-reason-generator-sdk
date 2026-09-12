import { RejectionReasonGeneratorEntityBase } from '../RejectionReasonGeneratorEntityBase';
import type { RejectionReasonGeneratorSDK } from '../RejectionReasonGeneratorSDK';
import type { Control } from '../types';
import type { Random, RandomLoadMatch } from '../RejectionReasonGeneratorTypes';
declare class RandomEntity extends RejectionReasonGeneratorEntityBase<Random> {
    constructor(client: RejectionReasonGeneratorSDK, entopts: any);
    make(this: RandomEntity): RandomEntity;
    load(this: any, reqmatch?: RandomLoadMatch, ctrl?: Control): Promise<RandomEntity>;
}
export { RandomEntity };
