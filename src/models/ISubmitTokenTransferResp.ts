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
 * @interface ISubmitTokenTransferResp
 */
export interface ISubmitTokenTransferResp {
  /**
   *
   * @type {string}
   * @memberof ISubmitTokenTransferResp
   */
  txHash: string;
}

/**
 * Check if a given object implements the ISubmitTokenTransferResp interface.
 */
export function instanceOfISubmitTokenTransferResp(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'txHash' in value;

  return isInstance;
}

export function ISubmitTokenTransferRespFromJSON(json: any): ISubmitTokenTransferResp {
  return ISubmitTokenTransferRespFromJSONTyped(json, false);
}

export function ISubmitTokenTransferRespFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ISubmitTokenTransferResp {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    txHash: json['txHash'],
  };
}

export function ISubmitTokenTransferRespToJSON(value?: ISubmitTokenTransferResp | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    txHash: value.txHash,
  };
}
