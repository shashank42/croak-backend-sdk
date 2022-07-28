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
 * @interface IErrorResponse
 */
export interface IErrorResponse {
    /**
     * 
     * @type {boolean}
     * @memberof IErrorResponse
     */
    thrown?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IErrorResponse
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof IErrorResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the IErrorResponse interface.
 */
export function instanceOfIErrorResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IErrorResponseFromJSON(json: any): IErrorResponse {
    return IErrorResponseFromJSONTyped(json, false);
}

export function IErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'thrown': !exists(json, 'thrown') ? undefined : json['thrown'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function IErrorResponseToJSON(value?: IErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'thrown': value.thrown,
        'error': value.error,
        'message': value.message,
    };
}

