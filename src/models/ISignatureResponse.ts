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
 * @interface ISignatureResponse
 */
export interface ISignatureResponse {
    /**
     * 
     * @type {string}
     * @memberof ISignatureResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ISignatureResponse
     */
    signature: string;
    /**
     * 
     * @type {any}
     * @memberof ISignatureResponse
     */
    walletFrom?: any | null;
}

/**
 * Check if a given object implements the ISignatureResponse interface.
 */
export function instanceOfISignatureResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "signature" in value;

    return isInstance;
}

export function ISignatureResponseFromJSON(json: any): ISignatureResponse {
    return ISignatureResponseFromJSONTyped(json, false);
}

export function ISignatureResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ISignatureResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'signature': json['signature'],
        'walletFrom': !exists(json, 'walletFrom') ? undefined : json['walletFrom'],
    };
}

export function ISignatureResponseToJSON(value?: ISignatureResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'signature': value.signature,
        'walletFrom': value.walletFrom,
    };
}

