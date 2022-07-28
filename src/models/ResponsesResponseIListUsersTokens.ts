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
import type { ResponseIListUsersTokens } from './ResponseIListUsersTokens';
import {
  ResponseIListUsersTokensFromJSON,
  ResponseIListUsersTokensFromJSONTyped,
  ResponseIListUsersTokensToJSON,
} from './ResponseIListUsersTokens';

/**
 *
 * @export
 * @interface ResponsesResponseIListUsersTokens
 */
export interface ResponsesResponseIListUsersTokens {
  /**
   *
   * @type {ResponseIListUsersTokens}
   * @memberof ResponsesResponseIListUsersTokens
   */
  data: ResponseIListUsersTokens;
  /**
   *
   * @type {boolean}
   * @memberof ResponsesResponseIListUsersTokens
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ResponsesResponseIListUsersTokens
   */
  message: string;
}

/**
 * Check if a given object implements the ResponsesResponseIListUsersTokens interface.
 */
export function instanceOfResponsesResponseIListUsersTokens(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'data' in value;
  isInstance = isInstance && 'success' in value;
  isInstance = isInstance && 'message' in value;

  return isInstance;
}

export function ResponsesResponseIListUsersTokensFromJSON(json: any): ResponsesResponseIListUsersTokens {
  return ResponsesResponseIListUsersTokensFromJSONTyped(json, false);
}

export function ResponsesResponseIListUsersTokensFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponsesResponseIListUsersTokens {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: ResponseIListUsersTokensFromJSON(json['data']),
    success: json['success'],
    message: json['message'],
  };
}

export function ResponsesResponseIListUsersTokensToJSON(value?: ResponsesResponseIListUsersTokens | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: ResponseIListUsersTokensToJSON(value.data),
    success: value.success,
    message: value.message,
  };
}
