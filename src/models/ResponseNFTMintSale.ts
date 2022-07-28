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
 * @interface ResponseNFTMintSale
 */
export interface ResponseNFTMintSale {
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  creatorId: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  tokenDataId: string;
  /**
   *
   * @type {number}
   * @memberof ResponseNFTMintSale
   */
  amount: number;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  status: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  error: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  exchangeContract: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  mintSaleType: string;
  /**
   *
   * @type {boolean}
   * @memberof ResponseNFTMintSale
   */
  minted: boolean;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  mintTxId: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  mintTxStatus: string;
  /**
   *
   * @type {Date}
   * @memberof ResponseNFTMintSale
   */
  mintedAt: Date;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  mintedPrice: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  mintedCurrency: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  mintedTo: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  mintedToGlipUserId: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  auctioneer: string;
  /**
   *
   * @type {boolean}
   * @memberof ResponseNFTMintSale
   */
  cancelled: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ResponseNFTMintSale
   */
  isClaimed: boolean;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  claimedByAddress: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  claimTxHash: string;
  /**
   *
   * @type {string}
   * @memberof ResponseNFTMintSale
   */
  id: string;
}

/**
 * Check if a given object implements the ResponseNFTMintSale interface.
 */
export function instanceOfResponseNFTMintSale(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'creatorId' in value;
  isInstance = isInstance && 'tokenDataId' in value;
  isInstance = isInstance && 'amount' in value;
  isInstance = isInstance && 'status' in value;
  isInstance = isInstance && 'error' in value;
  isInstance = isInstance && 'exchangeContract' in value;
  isInstance = isInstance && 'mintSaleType' in value;
  isInstance = isInstance && 'minted' in value;
  isInstance = isInstance && 'mintTxId' in value;
  isInstance = isInstance && 'mintTxStatus' in value;
  isInstance = isInstance && 'mintedAt' in value;
  isInstance = isInstance && 'mintedPrice' in value;
  isInstance = isInstance && 'mintedCurrency' in value;
  isInstance = isInstance && 'mintedTo' in value;
  isInstance = isInstance && 'mintedToGlipUserId' in value;
  isInstance = isInstance && 'auctioneer' in value;
  isInstance = isInstance && 'cancelled' in value;
  isInstance = isInstance && 'isClaimed' in value;
  isInstance = isInstance && 'claimedByAddress' in value;
  isInstance = isInstance && 'claimTxHash' in value;
  isInstance = isInstance && 'id' in value;

  return isInstance;
}

export function ResponseNFTMintSaleFromJSON(json: any): ResponseNFTMintSale {
  return ResponseNFTMintSaleFromJSONTyped(json, false);
}

export function ResponseNFTMintSaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseNFTMintSale {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    creatorId: json['creatorId'],
    tokenDataId: json['tokenDataId'],
    amount: json['amount'],
    status: json['status'],
    error: json['error'],
    exchangeContract: json['exchangeContract'],
    mintSaleType: json['mintSaleType'],
    minted: json['minted'],
    mintTxId: json['mintTxId'],
    mintTxStatus: json['mintTxStatus'],
    mintedAt: new Date(json['mintedAt']),
    mintedPrice: json['mintedPrice'],
    mintedCurrency: json['mintedCurrency'],
    mintedTo: json['mintedTo'],
    mintedToGlipUserId: json['mintedToGlipUserId'],
    auctioneer: json['auctioneer'],
    cancelled: json['cancelled'],
    isClaimed: json['isClaimed'],
    claimedByAddress: json['claimedByAddress'],
    claimTxHash: json['claimTxHash'],
    id: json['id'],
  };
}

export function ResponseNFTMintSaleToJSON(value?: ResponseNFTMintSale | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    creatorId: value.creatorId,
    tokenDataId: value.tokenDataId,
    amount: value.amount,
    status: value.status,
    error: value.error,
    exchangeContract: value.exchangeContract,
    mintSaleType: value.mintSaleType,
    minted: value.minted,
    mintTxId: value.mintTxId,
    mintTxStatus: value.mintTxStatus,
    mintedAt: value.mintedAt.toISOString(),
    mintedPrice: value.mintedPrice,
    mintedCurrency: value.mintedCurrency,
    mintedTo: value.mintedTo,
    mintedToGlipUserId: value.mintedToGlipUserId,
    auctioneer: value.auctioneer,
    cancelled: value.cancelled,
    isClaimed: value.isClaimed,
    claimedByAddress: value.claimedByAddress,
    claimTxHash: value.claimTxHash,
    id: value.id,
  };
}
