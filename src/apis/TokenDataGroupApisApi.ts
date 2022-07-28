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


import * as runtime from '../runtime';
import type {
  IErrorResponse,
  ITokenGroupData,
  IUpdateTokenGroupData,
  ResponsesIGetTokenGroupDataResp,
  ResponsesIListTokenGroupDataResp,
  ResponsesTokenGroupData,
} from '../models';
import {
    IErrorResponseFromJSON,
    IErrorResponseToJSON,
    ITokenGroupDataFromJSON,
    ITokenGroupDataToJSON,
    IUpdateTokenGroupDataFromJSON,
    IUpdateTokenGroupDataToJSON,
    ResponsesIGetTokenGroupDataRespFromJSON,
    ResponsesIGetTokenGroupDataRespToJSON,
    ResponsesIListTokenGroupDataRespFromJSON,
    ResponsesIListTokenGroupDataRespToJSON,
    ResponsesTokenGroupDataFromJSON,
    ResponsesTokenGroupDataToJSON,
} from '../models';

export interface CreateTokenGroupDataRequest {
    xApiKey: string;
    iTokenGroupData: ITokenGroupData;
}

export interface GetTokenGroupDataRequest {
    tokenGroupDataId: string;
    xApiKey: string;
}

export interface ListTokenGroupDataRequest {
    xApiKey: string;
    lastId?: string;
    size?: number;
}

export interface UpdateTokenGroupDataRequest {
    xApiKey: string;
    iUpdateTokenGroupData: IUpdateTokenGroupData;
}

/**
 * TokenDataGroupApisApi - interface
 * 
 * @export
 * @interface TokenDataGroupApisApiInterface
 */
export interface TokenDataGroupApisApiInterface {
    /**
     * Create a new token data (minting data and metadata). It does not mint. Only stores the metadata. You can treat this like an nft template.
     * @param {string} xApiKey 
     * @param {ITokenGroupData} iTokenGroupData This is a token data creation request description.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenDataGroupApisApiInterface
     */
    createTokenGroupDataRaw(requestParameters: CreateTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesTokenGroupData>>;

    /**
     * Create a new token data (minting data and metadata). It does not mint. Only stores the metadata. You can treat this like an nft template.
     */
    createTokenGroupData(requestParameters: CreateTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesTokenGroupData>;

    /**
     * Gets the token data (minting data and metadata) saved. You can use this to update and show the data.
     * @param {string} tokenGroupDataId 
     * @param {string} xApiKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenDataGroupApisApiInterface
     */
    getTokenGroupDataRaw(requestParameters: GetTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesIGetTokenGroupDataResp>>;

    /**
     * Gets the token data (minting data and metadata) saved. You can use this to update and show the data.
     */
    getTokenGroupData(requestParameters: GetTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesIGetTokenGroupDataResp>;

    /**
     * Gets the token data (minting data and metadata) saved. You can use this to update and show the data.
     * @param {string} xApiKey 
     * @param {string} [lastId] 
     * @param {number} [size] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenDataGroupApisApiInterface
     */
    listTokenGroupDataRaw(requestParameters: ListTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesIListTokenGroupDataResp>>;

    /**
     * Gets the token data (minting data and metadata) saved. You can use this to update and show the data.
     */
    listTokenGroupData(requestParameters: ListTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesIListTokenGroupDataResp>;

    /**
     * Create a new token data (minting data and metadata). It does not mint. Only stores the metadata. You can treat this like an nft template.
     * @param {string} xApiKey 
     * @param {IUpdateTokenGroupData} iUpdateTokenGroupData This is a token data creation request description.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenDataGroupApisApiInterface
     */
    updateTokenGroupDataRaw(requestParameters: UpdateTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesTokenGroupData>>;

    /**
     * Create a new token data (minting data and metadata). It does not mint. Only stores the metadata. You can treat this like an nft template.
     */
    updateTokenGroupData(requestParameters: UpdateTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesTokenGroupData>;

}

/**
 * 
 */
export class TokenDataGroupApisApi extends runtime.BaseAPI implements TokenDataGroupApisApiInterface {

    /**
     * Create a new token data (minting data and metadata). It does not mint. Only stores the metadata. You can treat this like an nft template.
     */
    async createTokenGroupDataRaw(requestParameters: CreateTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesTokenGroupData>> {
        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling createTokenGroupData.');
        }

        if (requestParameters.iTokenGroupData === null || requestParameters.iTokenGroupData === undefined) {
            throw new runtime.RequiredError('iTokenGroupData','Required parameter requestParameters.iTokenGroupData was null or undefined when calling createTokenGroupData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        const response = await this.request({
            path: `/token-group-data/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ITokenGroupDataToJSON(requestParameters.iTokenGroupData),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesTokenGroupDataFromJSON(jsonValue));
    }

    /**
     * Create a new token data (minting data and metadata). It does not mint. Only stores the metadata. You can treat this like an nft template.
     */
    async createTokenGroupData(requestParameters: CreateTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesTokenGroupData> {
        const response = await this.createTokenGroupDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the token data (minting data and metadata) saved. You can use this to update and show the data.
     */
    async getTokenGroupDataRaw(requestParameters: GetTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesIGetTokenGroupDataResp>> {
        if (requestParameters.tokenGroupDataId === null || requestParameters.tokenGroupDataId === undefined) {
            throw new runtime.RequiredError('tokenGroupDataId','Required parameter requestParameters.tokenGroupDataId was null or undefined when calling getTokenGroupData.');
        }

        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling getTokenGroupData.');
        }

        const queryParameters: any = {};

        if (requestParameters.tokenGroupDataId !== undefined) {
            queryParameters['tokenGroupDataId'] = requestParameters.tokenGroupDataId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        const response = await this.request({
            path: `/token-group-data/get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesIGetTokenGroupDataRespFromJSON(jsonValue));
    }

    /**
     * Gets the token data (minting data and metadata) saved. You can use this to update and show the data.
     */
    async getTokenGroupData(requestParameters: GetTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesIGetTokenGroupDataResp> {
        const response = await this.getTokenGroupDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the token data (minting data and metadata) saved. You can use this to update and show the data.
     */
    async listTokenGroupDataRaw(requestParameters: ListTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesIListTokenGroupDataResp>> {
        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling listTokenGroupData.');
        }

        const queryParameters: any = {};

        if (requestParameters.lastId !== undefined) {
            queryParameters['lastId'] = requestParameters.lastId;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        const response = await this.request({
            path: `/token-group-data/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesIListTokenGroupDataRespFromJSON(jsonValue));
    }

    /**
     * Gets the token data (minting data and metadata) saved. You can use this to update and show the data.
     */
    async listTokenGroupData(requestParameters: ListTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesIListTokenGroupDataResp> {
        const response = await this.listTokenGroupDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new token data (minting data and metadata). It does not mint. Only stores the metadata. You can treat this like an nft template.
     */
    async updateTokenGroupDataRaw(requestParameters: UpdateTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesTokenGroupData>> {
        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling updateTokenGroupData.');
        }

        if (requestParameters.iUpdateTokenGroupData === null || requestParameters.iUpdateTokenGroupData === undefined) {
            throw new runtime.RequiredError('iUpdateTokenGroupData','Required parameter requestParameters.iUpdateTokenGroupData was null or undefined when calling updateTokenGroupData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        const response = await this.request({
            path: `/token-group-data/update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IUpdateTokenGroupDataToJSON(requestParameters.iUpdateTokenGroupData),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesTokenGroupDataFromJSON(jsonValue));
    }

    /**
     * Create a new token data (minting data and metadata). It does not mint. Only stores the metadata. You can treat this like an nft template.
     */
    async updateTokenGroupData(requestParameters: UpdateTokenGroupDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesTokenGroupData> {
        const response = await this.updateTokenGroupDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
