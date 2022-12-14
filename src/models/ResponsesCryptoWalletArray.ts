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
 * @interface ResponsesCryptoWalletArray
 */
export interface ResponsesCryptoWalletArray {
  /**
   *
   * @type {Array<any>}
   * @memberof ResponsesCryptoWalletArray
   */
  data: Array<any>;
  /**
   *
   * @type {boolean}
   * @memberof ResponsesCryptoWalletArray
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ResponsesCryptoWalletArray
   */
  message: string;
}

/**
 * Check if a given object implements the ResponsesCryptoWalletArray interface.
 */
export function instanceOfResponsesCryptoWalletArray(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'data' in value;
  isInstance = isInstance && 'success' in value;
  isInstance = isInstance && 'message' in value;

  return isInstance;
}

export function ResponsesCryptoWalletArrayFromJSON(json: any): ResponsesCryptoWalletArray {
  return ResponsesCryptoWalletArrayFromJSONTyped(json, false);
}

export function ResponsesCryptoWalletArrayFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponsesCryptoWalletArray {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: json['data'],
    success: json['success'],
    message: json['message'],
  };
}

export function ResponsesCryptoWalletArrayToJSON(value?: ResponsesCryptoWalletArray | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: value.data,
    success: value.success,
    message: value.message,
  };
}
