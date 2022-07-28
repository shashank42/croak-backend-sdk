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
import type { ResponseBuyOrder } from './ResponseBuyOrder';
import {
    ResponseBuyOrderFromJSON,
    ResponseBuyOrderFromJSONTyped,
    ResponseBuyOrderToJSON,
} from './ResponseBuyOrder';

/**
 * 
 * @export
 * @interface IListBuyOrdersDataResp
 */
export interface IListBuyOrdersDataResp {
    /**
     * 
     * @type {Array<ResponseBuyOrder>}
     * @memberof IListBuyOrdersDataResp
     */
    buyOrders: Array<ResponseBuyOrder>;
    /**
     * 
     * @type {string}
     * @memberof IListBuyOrdersDataResp
     */
    lastId: string;
}

/**
 * Check if a given object implements the IListBuyOrdersDataResp interface.
 */
export function instanceOfIListBuyOrdersDataResp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "buyOrders" in value;
    isInstance = isInstance && "lastId" in value;

    return isInstance;
}

export function IListBuyOrdersDataRespFromJSON(json: any): IListBuyOrdersDataResp {
    return IListBuyOrdersDataRespFromJSONTyped(json, false);
}

export function IListBuyOrdersDataRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): IListBuyOrdersDataResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buyOrders': ((json['buyOrders'] as Array<any>).map(ResponseBuyOrderFromJSON)),
        'lastId': json['lastId'],
    };
}

export function IListBuyOrdersDataRespToJSON(value?: IListBuyOrdersDataResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buyOrders': ((value.buyOrders as Array<any>).map(ResponseBuyOrderToJSON)),
        'lastId': value.lastId,
    };
}

