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
import type { ResponseContract } from './ResponseContract';
import { ResponseContractFromJSON, ResponseContractFromJSONTyped, ResponseContractToJSON } from './ResponseContract';
import type { ResponseListOwnedNFTElement } from './ResponseListOwnedNFTElement';
import {
  ResponseListOwnedNFTElementFromJSON,
  ResponseListOwnedNFTElementFromJSONTyped,
  ResponseListOwnedNFTElementToJSON,
} from './ResponseListOwnedNFTElement';

/**
 *
 * @export
 * @interface ResponseIListUsersTokens
 */
export interface ResponseIListUsersTokens {
  /**
   *
   * @type {Array<ResponseContract>}
   * @memberof ResponseIListUsersTokens
   */
  contracts: Array<ResponseContract>;
  /**
   *
   * @type {Array<ResponseListOwnedNFTElement>}
   * @memberof ResponseIListUsersTokens
   */
  nfts: Array<ResponseListOwnedNFTElement>;
  /**
   *
   * @type {string}
   * @memberof ResponseIListUsersTokens
   */
  lastId: string;
}

/**
 * Check if a given object implements the ResponseIListUsersTokens interface.
 */
export function instanceOfResponseIListUsersTokens(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'contracts' in value;
  isInstance = isInstance && 'nfts' in value;
  isInstance = isInstance && 'lastId' in value;

  return isInstance;
}

export function ResponseIListUsersTokensFromJSON(json: any): ResponseIListUsersTokens {
  return ResponseIListUsersTokensFromJSONTyped(json, false);
}

export function ResponseIListUsersTokensFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseIListUsersTokens {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    contracts: (json['contracts'] as Array<any>).map(ResponseContractFromJSON),
    nfts: (json['nfts'] as Array<any>).map(ResponseListOwnedNFTElementFromJSON),
    lastId: json['lastId'],
  };
}

export function ResponseIListUsersTokensToJSON(value?: ResponseIListUsersTokens | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    contracts: (value.contracts as Array<any>).map(ResponseContractToJSON),
    nfts: (value.nfts as Array<any>).map(ResponseListOwnedNFTElementToJSON),
    lastId: value.lastId,
  };
}
