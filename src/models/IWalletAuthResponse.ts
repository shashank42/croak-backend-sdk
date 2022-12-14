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
 * @interface IWalletAuthResponse
 */
export interface IWalletAuthResponse {
  /**
   *
   * @type {string}
   * @memberof IWalletAuthResponse
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof IWalletAuthResponse
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof IWalletAuthResponse
   */
  accessToken: string;
  /**
   *
   * @type {string}
   * @memberof IWalletAuthResponse
   */
  refreshToken: string;
  /**
   *
   * @type {boolean}
   * @memberof IWalletAuthResponse
   */
  isLinked: boolean;
}

/**
 * Check if a given object implements the IWalletAuthResponse interface.
 */
export function instanceOfIWalletAuthResponse(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'id' in value;
  isInstance = isInstance && 'email' in value;
  isInstance = isInstance && 'accessToken' in value;
  isInstance = isInstance && 'refreshToken' in value;
  isInstance = isInstance && 'isLinked' in value;

  return isInstance;
}

export function IWalletAuthResponseFromJSON(json: any): IWalletAuthResponse {
  return IWalletAuthResponseFromJSONTyped(json, false);
}

export function IWalletAuthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IWalletAuthResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    email: json['email'],
    accessToken: json['accessToken'],
    refreshToken: json['refreshToken'],
    isLinked: json['isLinked'],
  };
}

export function IWalletAuthResponseToJSON(value?: IWalletAuthResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    email: value.email,
    accessToken: value.accessToken,
    refreshToken: value.refreshToken,
    isLinked: value.isLinked,
  };
}
