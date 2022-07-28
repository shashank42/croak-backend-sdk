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
  ICreateTokenTransfer,
  IErrorResponse,
  ISubmitTokenTransferString,
  ResponsesICreateTokenTransferResp,
  ResponsesISubmitTokenTransferResp,
} from '../models';
import {
    ICreateTokenTransferFromJSON,
    ICreateTokenTransferToJSON,
    IErrorResponseFromJSON,
    IErrorResponseToJSON,
    ISubmitTokenTransferStringFromJSON,
    ISubmitTokenTransferStringToJSON,
    ResponsesICreateTokenTransferRespFromJSON,
    ResponsesICreateTokenTransferRespToJSON,
    ResponsesISubmitTokenTransferRespFromJSON,
    ResponsesISubmitTokenTransferRespToJSON,
} from '../models';

export interface CreateTransferOrderRequest {
    accessToken: string;
    iCreateTokenTransfer: ICreateTokenTransfer;
}

export interface SubmitTransferOrderRequest {
    accessToken: string;
    iSubmitTokenTransferString: ISubmitTokenTransferString;
}

/**
 * TokenTransferAPIsApi - interface
 * 
 * @export
 * @interface TokenTransferAPIsApiInterface
 */
export interface TokenTransferAPIsApiInterface {
    /**
     * Generate transfer form to be signed on client for transferring NFT (tokenDataId) from one wallet to another wallet
     * @param {string} accessToken - The access token of the user who is making the request.
     * @param {ICreateTokenTransfer} iCreateTokenTransfer - ICreateTokenTransfer - this is the request body that is sent to the API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenTransferAPIsApiInterface
     */
    createTransferOrderRaw(requestParameters: CreateTransferOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesICreateTokenTransferResp>>;

    /**
     * Generate transfer form to be signed on client for transferring NFT (tokenDataId) from one wallet to another wallet
     */
    createTransferOrder(requestParameters: CreateTransferOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesICreateTokenTransferResp>;

    /**
     * Accepts the signature and the transfer form and submits to blockchain for transferring NFT (tokenDataId) from one wallet to another wallet, and returns the transaction hash
     * @param {string} accessToken - The access token that was generated by the client.
     * @param {ISubmitTokenTransferString} iSubmitTokenTransferString - ISubmitTokenTransferString - This is the request object that is sent to the API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenTransferAPIsApiInterface
     */
    submitTransferOrderRaw(requestParameters: SubmitTransferOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesISubmitTokenTransferResp>>;

    /**
     * Accepts the signature and the transfer form and submits to blockchain for transferring NFT (tokenDataId) from one wallet to another wallet, and returns the transaction hash
     */
    submitTransferOrder(requestParameters: SubmitTransferOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesISubmitTokenTransferResp>;

}

/**
 * 
 */
export class TokenTransferAPIsApi extends runtime.BaseAPI implements TokenTransferAPIsApiInterface {

    /**
     * Generate transfer form to be signed on client for transferring NFT (tokenDataId) from one wallet to another wallet
     */
    async createTransferOrderRaw(requestParameters: CreateTransferOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesICreateTokenTransferResp>> {
        if (requestParameters.accessToken === null || requestParameters.accessToken === undefined) {
            throw new runtime.RequiredError('accessToken','Required parameter requestParameters.accessToken was null or undefined when calling createTransferOrder.');
        }

        if (requestParameters.iCreateTokenTransfer === null || requestParameters.iCreateTokenTransfer === undefined) {
            throw new runtime.RequiredError('iCreateTokenTransfer','Required parameter requestParameters.iCreateTokenTransfer was null or undefined when calling createTransferOrder.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accessToken !== undefined && requestParameters.accessToken !== null) {
            headerParameters['access-token'] = String(requestParameters.accessToken);
        }

        const response = await this.request({
            path: `/token-transfer/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ICreateTokenTransferToJSON(requestParameters.iCreateTokenTransfer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesICreateTokenTransferRespFromJSON(jsonValue));
    }

    /**
     * Generate transfer form to be signed on client for transferring NFT (tokenDataId) from one wallet to another wallet
     */
    async createTransferOrder(requestParameters: CreateTransferOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesICreateTokenTransferResp> {
        const response = await this.createTransferOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Accepts the signature and the transfer form and submits to blockchain for transferring NFT (tokenDataId) from one wallet to another wallet, and returns the transaction hash
     */
    async submitTransferOrderRaw(requestParameters: SubmitTransferOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesISubmitTokenTransferResp>> {
        if (requestParameters.accessToken === null || requestParameters.accessToken === undefined) {
            throw new runtime.RequiredError('accessToken','Required parameter requestParameters.accessToken was null or undefined when calling submitTransferOrder.');
        }

        if (requestParameters.iSubmitTokenTransferString === null || requestParameters.iSubmitTokenTransferString === undefined) {
            throw new runtime.RequiredError('iSubmitTokenTransferString','Required parameter requestParameters.iSubmitTokenTransferString was null or undefined when calling submitTransferOrder.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accessToken !== undefined && requestParameters.accessToken !== null) {
            headerParameters['access-token'] = String(requestParameters.accessToken);
        }

        const response = await this.request({
            path: `/token-transfer/submit`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ISubmitTokenTransferStringToJSON(requestParameters.iSubmitTokenTransferString),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesISubmitTokenTransferRespFromJSON(jsonValue));
    }

    /**
     * Accepts the signature and the transfer form and submits to blockchain for transferring NFT (tokenDataId) from one wallet to another wallet, and returns the transaction hash
     */
    async submitTransferOrder(requestParameters: SubmitTransferOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesISubmitTokenTransferResp> {
        const response = await this.submitTransferOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

}