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
import type { ResponseNFTMintSale } from './ResponseNFTMintSale';
import {
    ResponseNFTMintSaleFromJSON,
    ResponseNFTMintSaleFromJSONTyped,
    ResponseNFTMintSaleToJSON,
} from './ResponseNFTMintSale';

/**
 * 
 * @export
 * @interface ISubmitBuyOrderResponse
 */
export interface ISubmitBuyOrderResponse {
    /**
     * 
     * @type {string}
     * @memberof ISubmitBuyOrderResponse
     */
    txHash: string;
    /**
     * 
     * @type {ResponseNFTMintSale}
     * @memberof ISubmitBuyOrderResponse
     */
    token: ResponseNFTMintSale;
}

/**
 * Check if a given object implements the ISubmitBuyOrderResponse interface.
 */
export function instanceOfISubmitBuyOrderResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "txHash" in value;
    isInstance = isInstance && "token" in value;

    return isInstance;
}

export function ISubmitBuyOrderResponseFromJSON(json: any): ISubmitBuyOrderResponse {
    return ISubmitBuyOrderResponseFromJSONTyped(json, false);
}

export function ISubmitBuyOrderResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ISubmitBuyOrderResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txHash': json['txHash'],
        'token': ResponseNFTMintSaleFromJSON(json['token']),
    };
}

export function ISubmitBuyOrderResponseToJSON(value?: ISubmitBuyOrderResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'txHash': value.txHash,
        'token': ResponseNFTMintSaleToJSON(value.token),
    };
}
