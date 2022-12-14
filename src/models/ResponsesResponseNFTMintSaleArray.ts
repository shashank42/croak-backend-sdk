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
 * @interface ResponsesResponseNFTMintSaleArray
 */
export interface ResponsesResponseNFTMintSaleArray {
  /**
   *
   * @type {Array<ResponseNFTMintSale>}
   * @memberof ResponsesResponseNFTMintSaleArray
   */
  data: Array<ResponseNFTMintSale>;
  /**
   *
   * @type {boolean}
   * @memberof ResponsesResponseNFTMintSaleArray
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ResponsesResponseNFTMintSaleArray
   */
  message: string;
}

/**
 * Check if a given object implements the ResponsesResponseNFTMintSaleArray interface.
 */
export function instanceOfResponsesResponseNFTMintSaleArray(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'data' in value;
  isInstance = isInstance && 'success' in value;
  isInstance = isInstance && 'message' in value;

  return isInstance;
}

export function ResponsesResponseNFTMintSaleArrayFromJSON(json: any): ResponsesResponseNFTMintSaleArray {
  return ResponsesResponseNFTMintSaleArrayFromJSONTyped(json, false);
}

export function ResponsesResponseNFTMintSaleArrayFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponsesResponseNFTMintSaleArray {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json['data'] as Array<any>).map(ResponseNFTMintSaleFromJSON),
    success: json['success'],
    message: json['message'],
  };
}

export function ResponsesResponseNFTMintSaleArrayToJSON(value?: ResponsesResponseNFTMintSaleArray | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(ResponseNFTMintSaleToJSON),
    success: value.success,
    message: value.message,
  };
}
