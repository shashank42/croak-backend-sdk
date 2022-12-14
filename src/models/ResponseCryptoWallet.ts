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
import type { WalletRegistrationStatus } from './WalletRegistrationStatus';
import {
  WalletRegistrationStatusFromJSON,
  WalletRegistrationStatusFromJSONTyped,
  WalletRegistrationStatusToJSON,
} from './WalletRegistrationStatus';

/**
 *
 * @export
 * @interface ResponseCryptoWallet
 */
export interface ResponseCryptoWallet {
  /**
   *
   * @type {Array<string>}
   * @memberof ResponseCryptoWallet
   */
  companyId: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof ResponseCryptoWallet
   */
  tentativeCompanyId: Array<string>;
  /**
   *
   * @type {string}
   * @memberof ResponseCryptoWallet
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof ResponseCryptoWallet
   */
  publicAddress?: string;
  /**
   *
   * @type {string}
   * @memberof ResponseCryptoWallet
   */
  password?: string;
  /**
   *
   * @type {WalletRegistrationStatus}
   * @memberof ResponseCryptoWallet
   */
  status: WalletRegistrationStatus;
  /**
   *
   * @type {string}
   * @memberof ResponseCryptoWallet
   */
  id: string;
}

/**
 * Check if a given object implements the ResponseCryptoWallet interface.
 */
export function instanceOfResponseCryptoWallet(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'companyId' in value;
  isInstance = isInstance && 'tentativeCompanyId' in value;
  isInstance = isInstance && 'email' in value;
  isInstance = isInstance && 'status' in value;
  isInstance = isInstance && 'id' in value;

  return isInstance;
}

export function ResponseCryptoWalletFromJSON(json: any): ResponseCryptoWallet {
  return ResponseCryptoWalletFromJSONTyped(json, false);
}

export function ResponseCryptoWalletFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseCryptoWallet {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    companyId: json['companyId'],
    tentativeCompanyId: json['tentativeCompanyId'],
    email: json['email'],
    publicAddress: !exists(json, 'publicAddress') ? undefined : json['publicAddress'],
    password: !exists(json, 'password') ? undefined : json['password'],
    status: WalletRegistrationStatusFromJSON(json['status']),
    id: json['id'],
  };
}

export function ResponseCryptoWalletToJSON(value?: ResponseCryptoWallet | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    companyId: value.companyId,
    tentativeCompanyId: value.tentativeCompanyId,
    email: value.email,
    publicAddress: value.publicAddress,
    password: value.password,
    status: WalletRegistrationStatusToJSON(value.status),
    id: value.id,
  };
}
