import { GetRandomRejectionEntity } from './entity/GetRandomRejectionEntity';
import { HealthEntity } from './entity/HealthEntity';
import { HelpEntity } from './entity/HelpEntity';
import { NonEntity } from './entity/NonEntity';
import { RandomEntity } from './entity/RandomEntity';
import { YesEntity } from './entity/YesEntity';
export type * from './RejectionReasonGeneratorTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RejectionReasonGeneratorEntityBase } from './RejectionReasonGeneratorEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class RejectionReasonGeneratorSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetRandomRejection(entopts?: Record<string, any>): GetRandomRejectionEntity;
    Health(entopts?: Record<string, any>): HealthEntity;
    Help(entopts?: Record<string, any>): HelpEntity;
    Non(entopts?: Record<string, any>): NonEntity;
    Random(entopts?: Record<string, any>): RandomEntity;
    Yes(entopts?: Record<string, any>): YesEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RejectionReasonGeneratorSDK;
    tester(testopts?: any, sdkopts?: any): RejectionReasonGeneratorSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RejectionReasonGeneratorSDK;
export { stdutil, config, BaseFeature, RejectionReasonGeneratorEntityBase, RejectionReasonGeneratorSDK, SDK, };
