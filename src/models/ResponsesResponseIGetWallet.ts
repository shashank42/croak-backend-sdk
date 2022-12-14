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
import type { ResponseIGetWallet } from './ResponseIGetWallet';
import {
  ResponseIGetWalletFromJSON,
  ResponseIGetWalletFromJSONTyped,
  ResponseIGetWalletToJSON,
} from './ResponseIGetWallet';

/**
 *
 * @export
 * @interface ResponsesResponseIGetWallet
 */
export interface ResponsesResponseIGetWallet {
  /**
   *
   * @type {ResponseIGetWallet}
   * @memberof ResponsesResponseIGetWallet
   */
  data: ResponseIGetWallet;
  /**
   *
   * @type {boolean}
   * @memberof ResponsesResponseIGetWallet
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ResponsesResponseIGetWallet
   */
  message: string;
}

/**
 * Check if a given object implements the ResponsesResponseIGetWallet interface.
 */
export function instanceOfResponsesResponseIGetWallet(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'data' in value;
  isInstance = isInstance && 'success' in value;
  isInstance = isInstance && 'message' in value;

  return isInstance;
}

export function ResponsesResponseIGetWalletFromJSON(json: any): ResponsesResponseIGetWallet {
  return ResponsesResponseIGetWalletFromJSONTyped(json, false);
}

export function ResponsesResponseIGetWalletFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponsesResponseIGetWallet {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: ResponseIGetWalletFromJSON(json['data']),
    success: json['success'],
    message: json['message'],
  };
}

export function ResponsesResponseIGetWalletToJSON(value?: ResponsesResponseIGetWallet | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: ResponseIGetWalletToJSON(value.data),
    success: value.success,
    message: value.message,
  };
}
