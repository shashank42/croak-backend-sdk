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
 * @interface ITokenMetadata
 */
export interface ITokenMetadata {
    /**
     * 
     * @type {string}
     * @memberof ITokenMetadata
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ITokenMetadata
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ITokenMetadata
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof ITokenMetadata
     */
    externalUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ITokenMetadata
     */
    animationUrl?: string;
    /**
     * 
     * @type {any}
     * @memberof ITokenMetadata
     */
    attributes?: any | null;
}

/**
 * Check if a given object implements the ITokenMetadata interface.
 */
export function instanceOfITokenMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ITokenMetadataFromJSON(json: any): ITokenMetadata {
    return ITokenMetadataFromJSONTyped(json, false);
}

export function ITokenMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ITokenMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'externalUrl': !exists(json, 'external_url') ? undefined : json['external_url'],
        'animationUrl': !exists(json, 'animation_url') ? undefined : json['animation_url'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
    };
}

export function ITokenMetadataToJSON(value?: ITokenMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'image': value.image,
        'external_url': value.externalUrl,
        'animation_url': value.animationUrl,
        'attributes': value.attributes,
    };
}

