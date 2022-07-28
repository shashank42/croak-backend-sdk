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
 * @interface ResponsesTokenGroupData
 */
export interface ResponsesTokenGroupData {
  /**
   *
   * @type {any}
   * @memberof ResponsesTokenGroupData
   */
  data: any | null;
  /**
   *
   * @type {boolean}
   * @memberof ResponsesTokenGroupData
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ResponsesTokenGroupData
   */
  message: string;
}

/**
 * Check if a given object implements the ResponsesTokenGroupData interface.
 */
export function instanceOfResponsesTokenGroupData(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'data' in value;
  isInstance = isInstance && 'success' in value;
  isInstance = isInstance && 'message' in value;

  return isInstance;
}

export function ResponsesTokenGroupDataFromJSON(json: any): ResponsesTokenGroupData {
  return ResponsesTokenGroupDataFromJSONTyped(json, false);
}

export function ResponsesTokenGroupDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesTokenGroupData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: json['data'],
    success: json['success'],
    message: json['message'],
  };
}

export function ResponsesTokenGroupDataToJSON(value?: ResponsesTokenGroupData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: value.data,
    success: value.success,
    message: value.message,
  };
}
