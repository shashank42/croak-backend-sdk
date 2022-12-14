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
 * @interface IWalletLoginResponse
 */
export interface IWalletLoginResponse {
  /**
   *
   * @type {any}
   * @memberof IWalletLoginResponse
   */
  wallet: any | null;
  /**
   *
   * @type {string}
   * @memberof IWalletLoginResponse
   */
  accessToken: string;
}

/**
 * Check if a given object implements the IWalletLoginResponse interface.
 */
export function instanceOfIWalletLoginResponse(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'wallet' in value;
  isInstance = isInstance && 'accessToken' in value;

  return isInstance;
}

export function IWalletLoginResponseFromJSON(json: any): IWalletLoginResponse {
  return IWalletLoginResponseFromJSONTyped(json, false);
}

export function IWalletLoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IWalletLoginResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    wallet: json['wallet'],
    accessToken: json['accessToken'],
  };
}

export function IWalletLoginResponseToJSON(value?: IWalletLoginResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    wallet: value.wallet,
    accessToken: value.accessToken,
  };
}
