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

/**
 *
 * @export
 */
export const WalletType = {
  Noncustodial: 'NONCUSTODIAL',
  Custodial: 'CUSTODIAL',
} as const;
export type WalletType = typeof WalletType[keyof typeof WalletType];

export function WalletTypeFromJSON(json: any): WalletType {
  return WalletTypeFromJSONTyped(json, false);
}

export function WalletTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletType {
  return json as WalletType;
}

export function WalletTypeToJSON(value?: WalletType | null): any {
  return value as any;
}
