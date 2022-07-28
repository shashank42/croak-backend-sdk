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
export const NetworkEnum = {
    Mumbai: 'mumbai',
    Matic: 'matic',
    Localhost: 'localhost'
} as const;
export type NetworkEnum = typeof NetworkEnum[keyof typeof NetworkEnum];


export function NetworkEnumFromJSON(json: any): NetworkEnum {
    return NetworkEnumFromJSONTyped(json, false);
}

export function NetworkEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkEnum {
    return json as NetworkEnum;
}

export function NetworkEnumToJSON(value?: NetworkEnum | null): any {
    return value as any;
}

