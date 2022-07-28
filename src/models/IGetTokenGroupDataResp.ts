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
 * @interface IGetTokenGroupDataResp
 */
export interface IGetTokenGroupDataResp {
  /**
   *
   * @type {any}
   * @memberof IGetTokenGroupDataResp
   */
  tokenGroup: any | null;
}

/**
 * Check if a given object implements the IGetTokenGroupDataResp interface.
 */
export function instanceOfIGetTokenGroupDataResp(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'tokenGroup' in value;

  return isInstance;
}

export function IGetTokenGroupDataRespFromJSON(json: any): IGetTokenGroupDataResp {
  return IGetTokenGroupDataRespFromJSONTyped(json, false);
}

export function IGetTokenGroupDataRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): IGetTokenGroupDataResp {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    tokenGroup: json['tokenGroup'],
  };
}

export function IGetTokenGroupDataRespToJSON(value?: IGetTokenGroupDataResp | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    tokenGroup: value.tokenGroup,
  };
}
