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
import type { MarketPlaceOrderTypesEnum } from './MarketPlaceOrderTypesEnum';
import {
  MarketPlaceOrderTypesEnumFromJSON,
  MarketPlaceOrderTypesEnumFromJSONTyped,
  MarketPlaceOrderTypesEnumToJSON,
} from './MarketPlaceOrderTypesEnum';
import type { WalletType } from './WalletType';
import { WalletTypeFromJSON, WalletTypeFromJSONTyped, WalletTypeToJSON } from './WalletType';

/**
 *
 * @export
 * @interface ResponseSellOrder
 */
export interface ResponseSellOrder {
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  makerWalletId: string;
  /**
   *
   * @type {WalletType}
   * @memberof ResponseSellOrder
   */
  makerWalletType: WalletType;
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  takerWalletId: string;
  /**
   *
   * @type {WalletType}
   * @memberof ResponseSellOrder
   */
  takerWalletType: WalletType;
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  makeTokenDataId: string;
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  takeTokenDataId: string;
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  companyId: string;
  /**
   *
   * @type {number}
   * @memberof ResponseSellOrder
   */
  makeAmount: number;
  /**
   *
   * @type {number}
   * @memberof ResponseSellOrder
   */
  takeAmount: number;
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  status: string;
  /**
   *
   * @type {MarketPlaceOrderTypesEnum}
   * @memberof ResponseSellOrder
   */
  type: MarketPlaceOrderTypesEnum;
  /**
   *
   * @type {boolean}
   * @memberof ResponseSellOrder
   */
  isClaimed: boolean;
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  exchangeContract: string;
  /**
   *
   * @type {number}
   * @memberof ResponseSellOrder
   */
  startTime: number;
  /**
   *
   * @type {number}
   * @memberof ResponseSellOrder
   */
  endTime: number;
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  signature: string;
  /**
   *
   * @type {string}
   * @memberof ResponseSellOrder
   */
  id: string;
}

/**
 * Check if a given object implements the ResponseSellOrder interface.
 */
export function instanceOfResponseSellOrder(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'makerWalletId' in value;
  isInstance = isInstance && 'makerWalletType' in value;
  isInstance = isInstance && 'takerWalletId' in value;
  isInstance = isInstance && 'takerWalletType' in value;
  isInstance = isInstance && 'makeTokenDataId' in value;
  isInstance = isInstance && 'takeTokenDataId' in value;
  isInstance = isInstance && 'companyId' in value;
  isInstance = isInstance && 'makeAmount' in value;
  isInstance = isInstance && 'takeAmount' in value;
  isInstance = isInstance && 'status' in value;
  isInstance = isInstance && 'type' in value;
  isInstance = isInstance && 'isClaimed' in value;
  isInstance = isInstance && 'exchangeContract' in value;
  isInstance = isInstance && 'startTime' in value;
  isInstance = isInstance && 'endTime' in value;
  isInstance = isInstance && 'signature' in value;
  isInstance = isInstance && 'id' in value;

  return isInstance;
}

export function ResponseSellOrderFromJSON(json: any): ResponseSellOrder {
  return ResponseSellOrderFromJSONTyped(json, false);
}

export function ResponseSellOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseSellOrder {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    makerWalletId: json['makerWalletId'],
    makerWalletType: WalletTypeFromJSON(json['makerWalletType']),
    takerWalletId: json['takerWalletId'],
    takerWalletType: WalletTypeFromJSON(json['takerWalletType']),
    makeTokenDataId: json['makeTokenDataId'],
    takeTokenDataId: json['takeTokenDataId'],
    companyId: json['companyId'],
    makeAmount: json['makeAmount'],
    takeAmount: json['takeAmount'],
    status: json['status'],
    type: MarketPlaceOrderTypesEnumFromJSON(json['type']),
    isClaimed: json['isClaimed'],
    exchangeContract: json['exchangeContract'],
    startTime: json['startTime'],
    endTime: json['endTime'],
    signature: json['signature'],
    id: json['id'],
  };
}

export function ResponseSellOrderToJSON(value?: ResponseSellOrder | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    makerWalletId: value.makerWalletId,
    makerWalletType: WalletTypeToJSON(value.makerWalletType),
    takerWalletId: value.takerWalletId,
    takerWalletType: WalletTypeToJSON(value.takerWalletType),
    makeTokenDataId: value.makeTokenDataId,
    takeTokenDataId: value.takeTokenDataId,
    companyId: value.companyId,
    makeAmount: value.makeAmount,
    takeAmount: value.takeAmount,
    status: value.status,
    type: MarketPlaceOrderTypesEnumToJSON(value.type),
    isClaimed: value.isClaimed,
    exchangeContract: value.exchangeContract,
    startTime: value.startTime,
    endTime: value.endTime,
    signature: value.signature,
    id: value.id,
  };
}
