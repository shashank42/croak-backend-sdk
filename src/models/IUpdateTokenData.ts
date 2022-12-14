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
import type { ITokenDataMetadata } from './ITokenDataMetadata';
import {
  ITokenDataMetadataFromJSON,
  ITokenDataMetadataFromJSONTyped,
  ITokenDataMetadataToJSON,
} from './ITokenDataMetadata';

/**
 *
 * @export
 * @interface IUpdateTokenData
 */
export interface IUpdateTokenData {
  /**
   *
   * @type {any}
   * @memberof IUpdateTokenData
   */
  company?: any | null;
  /**
   *
   * @type {string}
   * @memberof IUpdateTokenData
   */
  tokenDataId: string;
  /**
   *
   * @type {ITokenDataMetadata}
   * @memberof IUpdateTokenData
   */
  metadata: ITokenDataMetadata;
}

/**
 * Check if a given object implements the IUpdateTokenData interface.
 */
export function instanceOfIUpdateTokenData(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'tokenDataId' in value;
  isInstance = isInstance && 'metadata' in value;

  return isInstance;
}

export function IUpdateTokenDataFromJSON(json: any): IUpdateTokenData {
  return IUpdateTokenDataFromJSONTyped(json, false);
}

export function IUpdateTokenDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): IUpdateTokenData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    company: !exists(json, 'company') ? undefined : json['company'],
    tokenDataId: json['tokenDataId'],
    metadata: ITokenDataMetadataFromJSON(json['metadata']),
  };
}

export function IUpdateTokenDataToJSON(value?: IUpdateTokenData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    company: value.company,
    tokenDataId: value.tokenDataId,
    metadata: ITokenDataMetadataToJSON(value.metadata),
  };
}
