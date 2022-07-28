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
import type { ResponseSellOrder } from './ResponseSellOrder';
import {
  ResponseSellOrderFromJSON,
  ResponseSellOrderFromJSONTyped,
  ResponseSellOrderToJSON,
} from './ResponseSellOrder';

/**
 *
 * @export
 * @interface IListSellOrdersDataResp
 */
export interface IListSellOrdersDataResp {
  /**
   *
   * @type {Array<ResponseSellOrder>}
   * @memberof IListSellOrdersDataResp
   */
  sellOrders: Array<ResponseSellOrder>;
  /**
   *
   * @type {string}
   * @memberof IListSellOrdersDataResp
   */
  lastId: string;
}

/**
 * Check if a given object implements the IListSellOrdersDataResp interface.
 */
export function instanceOfIListSellOrdersDataResp(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'sellOrders' in value;
  isInstance = isInstance && 'lastId' in value;

  return isInstance;
}

export function IListSellOrdersDataRespFromJSON(json: any): IListSellOrdersDataResp {
  return IListSellOrdersDataRespFromJSONTyped(json, false);
}

export function IListSellOrdersDataRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): IListSellOrdersDataResp {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sellOrders: (json['sellOrders'] as Array<any>).map(ResponseSellOrderFromJSON),
    lastId: json['lastId'],
  };
}

export function IListSellOrdersDataRespToJSON(value?: IListSellOrdersDataResp | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sellOrders: (value.sellOrders as Array<any>).map(ResponseSellOrderToJSON),
    lastId: value.lastId,
  };
}
