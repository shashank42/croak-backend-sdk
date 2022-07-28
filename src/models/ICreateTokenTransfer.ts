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
/**
 * 
 * @export
 * @interface ICreateTokenTransfer
 */
export interface ICreateTokenTransfer {
    /**
     * 
     * @type {any}
     * @memberof ICreateTokenTransfer
     */
    company?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ICreateTokenTransfer
     */
    walletFrom?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ICreateTokenTransfer
     */
    walletIdFrom: string;
    /**
     * 
     * @type {string}
     * @memberof ICreateTokenTransfer
     */
    walletIdTo: string;
    /**
     * 
     * @type {string}
     * @memberof ICreateTokenTransfer
     */
    tokenDataId: string;
    /**
     * 
     * @type {number}
     * @memberof ICreateTokenTransfer
     */
    amount: number;
}

/**
 * Check if a given object implements the ICreateTokenTransfer interface.
 */
export function instanceOfICreateTokenTransfer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "walletIdFrom" in value;
    isInstance = isInstance && "walletIdTo" in value;
    isInstance = isInstance && "tokenDataId" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function ICreateTokenTransferFromJSON(json: any): ICreateTokenTransfer {
    return ICreateTokenTransferFromJSONTyped(json, false);
}

export function ICreateTokenTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): ICreateTokenTransfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'walletFrom': !exists(json, 'walletFrom') ? undefined : json['walletFrom'],
        'walletIdFrom': json['walletIdFrom'],
        'walletIdTo': json['walletIdTo'],
        'tokenDataId': json['tokenDataId'],
        'amount': json['amount'],
    };
}

export function ICreateTokenTransferToJSON(value?: ICreateTokenTransfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'walletFrom': value.walletFrom,
        'walletIdFrom': value.walletIdFrom,
        'walletIdTo': value.walletIdTo,
        'tokenDataId': value.tokenDataId,
        'amount': value.amount,
    };
}

