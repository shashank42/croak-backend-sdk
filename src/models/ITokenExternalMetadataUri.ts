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
 * @interface ITokenExternalMetadataUri
 */
export interface ITokenExternalMetadataUri {
  /**
   *
   * @type {string}
   * @memberof ITokenExternalMetadataUri
   */
  url: string;
}

/**
 * Check if a given object implements the ITokenExternalMetadataUri interface.
 */
export function instanceOfITokenExternalMetadataUri(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'url' in value;

  return isInstance;
}

export function ITokenExternalMetadataUriFromJSON(json: any): ITokenExternalMetadataUri {
  return ITokenExternalMetadataUriFromJSONTyped(json, false);
}

export function ITokenExternalMetadataUriFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ITokenExternalMetadataUri {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    url: json['url'],
  };
}

export function ITokenExternalMetadataUriToJSON(value?: ITokenExternalMetadataUri | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    url: value.url,
  };
}
