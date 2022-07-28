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
 * @interface IWallet
 */
export interface IWallet {
  /**
   *
   * @type {any}
   * @memberof IWallet
   */
  company?: any | null;
  /**
   *
   * @type {string}
   * @memberof IWallet
   */
  email: string;
}

/**
 * Check if a given object implements the IWallet interface.
 */
export function instanceOfIWallet(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'email' in value;

  return isInstance;
}

export function IWalletFromJSON(json: any): IWallet {
  return IWalletFromJSONTyped(json, false);
}

export function IWalletFromJSONTyped(json: any, ignoreDiscriminator: boolean): IWallet {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    company: !exists(json, 'company') ? undefined : json['company'],
    email: json['email'],
  };
}

export function IWalletToJSON(value?: IWallet | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    company: value.company,
    email: value.email,
  };
}
