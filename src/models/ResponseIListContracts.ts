/* tslint:disable */
/* eslint-disable */
/**
 * namaste-be
 * Namaste Server
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ResponseContract } from './ResponseContract';
import {
    ResponseContractFromJSON,
    ResponseContractFromJSONTyped,
    ResponseContractToJSON,
} from './ResponseContract';

/**
 * 
 * @export
 * @interface ResponseIListContracts
 */
export interface ResponseIListContracts {
    /**
     * 
     * @type {Array<ResponseContract>}
     * @memberof ResponseIListContracts
     */
    contracts: Array<ResponseContract>;
    /**
     * 
     * @type {string}
     * @memberof ResponseIListContracts
     */
    lastId: string;
}

/**
 * Check if a given object implements the ResponseIListContracts interface.
 */
export function instanceOfResponseIListContracts(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contracts" in value;
    isInstance = isInstance && "lastId" in value;

    return isInstance;
}

export function ResponseIListContractsFromJSON(json: any): ResponseIListContracts {
    return ResponseIListContractsFromJSONTyped(json, false);
}

export function ResponseIListContractsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseIListContracts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contracts': ((json['contracts'] as Array<any>).map(ResponseContractFromJSON)),
        'lastId': json['lastId'],
    };
}

export function ResponseIListContractsToJSON(value?: ResponseIListContracts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contracts': ((value.contracts as Array<any>).map(ResponseContractToJSON)),
        'lastId': value.lastId,
    };
}

