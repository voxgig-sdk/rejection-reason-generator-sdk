import { RejectionReasonGeneratorEntityBase } from '../RejectionReasonGeneratorEntityBase';
import type { RejectionReasonGeneratorSDK } from '../RejectionReasonGeneratorSDK';
import type { Control } from '../types';
import type { GetRandomRejection, GetRandomRejectionLoadMatch } from '../RejectionReasonGeneratorTypes';
declare class GetRandomRejectionEntity extends RejectionReasonGeneratorEntityBase<GetRandomRejection> {
    constructor(client: RejectionReasonGeneratorSDK, entopts: any);
    make(this: GetRandomRejectionEntity): GetRandomRejectionEntity;
    load(this: any, reqmatch?: GetRandomRejectionLoadMatch, ctrl?: Control): Promise<GetRandomRejectionEntity>;
}
export { GetRandomRejectionEntity };
