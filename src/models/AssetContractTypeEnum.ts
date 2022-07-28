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
export const AssetContractTypeEnum = {
    OpenGlipErc1155: 'OpenGlipERC1155',
    GlipLiveErc721: 'GlipLiveERC721',
    GlipPassErc1155: 'GlipPassERC1155',
    Erc20: 'ERC20',
    None: 'NONE'
} as const;
export type AssetContractTypeEnum = typeof AssetContractTypeEnum[keyof typeof AssetContractTypeEnum];


export function AssetContractTypeEnumFromJSON(json: any): AssetContractTypeEnum {
    return AssetContractTypeEnumFromJSONTyped(json, false);
}

export function AssetContractTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetContractTypeEnum {
    return json as AssetContractTypeEnum;
}

export function AssetContractTypeEnumToJSON(value?: AssetContractTypeEnum | null): any {
    return value as any;
}

