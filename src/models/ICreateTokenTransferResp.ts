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
 * @interface ICreateTokenTransferResp
 */
export interface ICreateTokenTransferResp {
  /**
   *
   * @type {string}
   * @memberof ICreateTokenTransferResp
   */
  form: string;
  /**
   *
   * @type {string}
   * @memberof ICreateTokenTransferResp
   */
  chain: string;
}

/**
 * Check if a given object implements the ICreateTokenTransferResp interface.
 */
export function instanceOfICreateTokenTransferResp(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'form' in value;
  isInstance = isInstance && 'chain' in value;

  return isInstance;
}

export function ICreateTokenTransferRespFromJSON(json: any): ICreateTokenTransferResp {
  return ICreateTokenTransferRespFromJSONTyped(json, false);
}

export function ICreateTokenTransferRespFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ICreateTokenTransferResp {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    form: json['form'],
    chain: json['chain'],
  };
}

export function ICreateTokenTransferRespToJSON(value?: ICreateTokenTransferResp | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    form: value.form,
    chain: value.chain,
  };
}
