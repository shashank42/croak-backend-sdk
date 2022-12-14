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
 * @interface ISubmitTokenTransferString
 */
export interface ISubmitTokenTransferString {
  /**
   *
   * @type {any}
   * @memberof ISubmitTokenTransferString
   */
  walletFrom?: any | null;
  /**
   *
   * @type {string}
   * @memberof ISubmitTokenTransferString
   */
  chain: string;
  /**
   *
   * @type {string}
   * @memberof ISubmitTokenTransferString
   */
  form: string;
  /**
   *
   * @type {string}
   * @memberof ISubmitTokenTransferString
   */
  signature: string;
}

/**
 * Check if a given object implements the ISubmitTokenTransferString interface.
 */
export function instanceOfISubmitTokenTransferString(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'chain' in value;
  isInstance = isInstance && 'form' in value;
  isInstance = isInstance && 'signature' in value;

  return isInstance;
}

export function ISubmitTokenTransferStringFromJSON(json: any): ISubmitTokenTransferString {
  return ISubmitTokenTransferStringFromJSONTyped(json, false);
}

export function ISubmitTokenTransferStringFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ISubmitTokenTransferString {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    walletFrom: !exists(json, 'walletFrom') ? undefined : json['walletFrom'],
    chain: json['chain'],
    form: json['form'],
    signature: json['signature'],
  };
}

export function ISubmitTokenTransferStringToJSON(value?: ISubmitTokenTransferString | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    walletFrom: value.walletFrom,
    chain: value.chain,
    form: value.form,
    signature: value.signature,
  };
}
