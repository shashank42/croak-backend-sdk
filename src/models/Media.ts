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
 * @interface Media
 */
export interface Media {
  /**
   *
   * @type {string}
   * @memberof Media
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof Media
   */
  value: string;
}

/**
 * Check if a given object implements the Media interface.
 */
export function instanceOfMedia(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'type' in value;
  isInstance = isInstance && 'value' in value;

  return isInstance;
}

export function MediaFromJSON(json: any): Media {
  return MediaFromJSONTyped(json, false);
}

export function MediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Media {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json['type'],
    value: json['value'],
  };
}

export function MediaToJSON(value?: Media | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type,
    value: value.value,
  };
}
