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
import type { ResponseCryptoWallet } from './ResponseCryptoWallet';
import {
  ResponseCryptoWalletFromJSON,
  ResponseCryptoWalletFromJSONTyped,
  ResponseCryptoWalletToJSON,
} from './ResponseCryptoWallet';

/**
 *
 * @export
 * @interface ResponseIGetWallet
 */
export interface ResponseIGetWallet {
  /**
   *
   * @type {Array<ResponseCryptoWallet>}
   * @memberof ResponseIGetWallet
   */
  wallets: Array<ResponseCryptoWallet>;
  /**
   *
   * @type {string}
   * @memberof ResponseIGetWallet
   */
  lastId: string;
}

/**
 * Check if a given object implements the ResponseIGetWallet interface.
 */
export function instanceOfResponseIGetWallet(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'wallets' in value;
  isInstance = isInstance && 'lastId' in value;

  return isInstance;
}

export function ResponseIGetWalletFromJSON(json: any): ResponseIGetWallet {
  return ResponseIGetWalletFromJSONTyped(json, false);
}

export function ResponseIGetWalletFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseIGetWallet {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    wallets: (json['wallets'] as Array<any>).map(ResponseCryptoWalletFromJSON),
    lastId: json['lastId'],
  };
}

export function ResponseIGetWalletToJSON(value?: ResponseIGetWallet | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    wallets: (value.wallets as Array<any>).map(ResponseCryptoWalletToJSON),
    lastId: value.lastId,
  };
}
