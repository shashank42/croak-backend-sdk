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
import type { TokenDataType } from './TokenDataType';
import { TokenDataTypeFromJSON, TokenDataTypeFromJSONTyped, TokenDataTypeToJSON } from './TokenDataType';

/**
 *
 * @export
 * @interface ResponseTokenData
 */
export interface ResponseTokenData {
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  tokenGroupId?: string;
  /**
   *
   * @type {TokenDataType}
   * @memberof ResponseTokenData
   */
  type: TokenDataType;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  creatorId: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  externalUri: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  imageUri: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  videoUri: string;
  /**
   *
   * @type {number}
   * @memberof ResponseTokenData
   */
  supply: number;
  /**
   *
   * @type {any}
   * @memberof ResponseTokenData
   */
  attributes: any | null;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  externalMetadataUri: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  reserveTokenDataId: string;
  /**
   *
   * @type {number}
   * @memberof ResponseTokenData
   */
  reserveTokenDataAmount: number;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  assetContractId: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  tokenId: string;
  /**
   *
   * @type {any}
   * @memberof ResponseTokenData
   */
  lazyForm: any | null;
  /**
   *
   * @type {any}
   * @memberof ResponseTokenData
   */
  encodedFormBytes: any | null;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  minterWalletId: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  minterPublicKey: string;
  /**
   *
   * @type {string}
   * @memberof ResponseTokenData
   */
  id: string;
}

/**
 * Check if a given object implements the ResponseTokenData interface.
 */
export function instanceOfResponseTokenData(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'type' in value;
  isInstance = isInstance && 'creatorId' in value;
  isInstance = isInstance && 'name' in value;
  isInstance = isInstance && 'description' in value;
  isInstance = isInstance && 'externalUri' in value;
  isInstance = isInstance && 'imageUri' in value;
  isInstance = isInstance && 'videoUri' in value;
  isInstance = isInstance && 'supply' in value;
  isInstance = isInstance && 'attributes' in value;
  isInstance = isInstance && 'externalMetadataUri' in value;
  isInstance = isInstance && 'reserveTokenDataId' in value;
  isInstance = isInstance && 'reserveTokenDataAmount' in value;
  isInstance = isInstance && 'assetContractId' in value;
  isInstance = isInstance && 'tokenId' in value;
  isInstance = isInstance && 'lazyForm' in value;
  isInstance = isInstance && 'encodedFormBytes' in value;
  isInstance = isInstance && 'minterWalletId' in value;
  isInstance = isInstance && 'minterPublicKey' in value;
  isInstance = isInstance && 'id' in value;

  return isInstance;
}

export function ResponseTokenDataFromJSON(json: any): ResponseTokenData {
  return ResponseTokenDataFromJSONTyped(json, false);
}

export function ResponseTokenDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseTokenData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    tokenGroupId: !exists(json, 'tokenGroupId') ? undefined : json['tokenGroupId'],
    type: TokenDataTypeFromJSON(json['type']),
    creatorId: json['creatorId'],
    name: json['name'],
    description: json['description'],
    externalUri: json['externalUri'],
    imageUri: json['imageUri'],
    videoUri: json['videoUri'],
    supply: json['supply'],
    attributes: json['attributes'],
    externalMetadataUri: json['externalMetadataUri'],
    reserveTokenDataId: json['reserveTokenDataId'],
    reserveTokenDataAmount: json['reserveTokenDataAmount'],
    assetContractId: json['assetContractId'],
    tokenId: json['tokenId'],
    lazyForm: json['lazyForm'],
    encodedFormBytes: json['encodedFormBytes'],
    minterWalletId: json['minterWalletId'],
    minterPublicKey: json['minterPublicKey'],
    id: json['id'],
  };
}

export function ResponseTokenDataToJSON(value?: ResponseTokenData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    tokenGroupId: value.tokenGroupId,
    type: TokenDataTypeToJSON(value.type),
    creatorId: value.creatorId,
    name: value.name,
    description: value.description,
    externalUri: value.externalUri,
    imageUri: value.imageUri,
    videoUri: value.videoUri,
    supply: value.supply,
    attributes: value.attributes,
    externalMetadataUri: value.externalMetadataUri,
    reserveTokenDataId: value.reserveTokenDataId,
    reserveTokenDataAmount: value.reserveTokenDataAmount,
    assetContractId: value.assetContractId,
    tokenId: value.tokenId,
    lazyForm: value.lazyForm,
    encodedFormBytes: value.encodedFormBytes,
    minterWalletId: value.minterWalletId,
    minterPublicKey: value.minterPublicKey,
    id: value.id,
  };
}
