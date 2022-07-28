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
  ResponsesResponseIListUsersTokens,
  ResponsesWalletBalance,
  ResponsesWalletBalanceArray,
} from '../models';
import {
    IErrorResponseFromJSON,
    IErrorResponseToJSON,
    ResponsesResponseIListUsersTokensFromJSON,
    ResponsesResponseIListUsersTokensToJSON,
    ResponsesWalletBalanceFromJSON,
    ResponsesWalletBalanceToJSON,
    ResponsesWalletBalanceArrayFromJSON,
    ResponsesWalletBalanceArrayToJSON,
} from '../models';

export interface GetTestErc20BalanceRequest {
    walletId: string;
    xApiKey: string;
}

export interface GetWalletBalanceRequest {
    walletId: string;
    xApiKey: string;
}

export interface ListNFTsForWalletForClientRequest {
    accessToken: string;
    walletId?: string;
    tokenDataIds?: Array<string>;
    lastId?: string;
    size?: number;
}

export interface ListNFTsForWalletForServerRequest {
    xApiKey: string;
    walletId?: string;
    tokenDataIds?: Array<string>;
    lastId?: string;
    size?: number;
}

/**
 * WalletBalanceAPIsApi - interface
 * 
 * @export
 * @interface WalletBalanceAPIsApiInterface
 */
export interface WalletBalanceAPIsApiInterface {
    /**
     * This function returns the balance of a test ERC20 token for a given wallet
     * @param {string} walletId - The walletId of the wallet you want to get the balance of.
     * @param {string} xApiKey - This is the API key that you will use to authenticate your request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletBalanceAPIsApiInterface
     */
    getTestErc20BalanceRaw(requestParameters: GetTestErc20BalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesWalletBalanceArray>>;

    /**
     * This function returns the balance of a test ERC20 token for a given wallet
     */
    getTestErc20Balance(requestParameters: GetTestErc20BalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesWalletBalanceArray>;

    /**
     * It gets the balance of a wallet.
     * @param {string} walletId - The walletId of the wallet you want to get the balance of.
     * @param {string} xApiKey - This is the API key that you will use to authenticate your requests.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletBalanceAPIsApiInterface
     */
    getWalletBalanceRaw(requestParameters: GetWalletBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesWalletBalance>>;

    /**
     * It gets the balance of a wallet.
     */
    getWalletBalance(requestParameters: GetWalletBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesWalletBalance>;

    /**
     * This function returns a list of NFTs for a given wallet
     * @param {string} accessToken - The access token for the user.
     * @param {string} [walletId] - The walletId of the wallet you want to get the NFTs for.
     * @param {Array<string>} [tokenDataIds] - ObjectId[] &#x3D; [] as ObjectId[] as in mongose ids of the tokens.
     * @param {string} [lastId] - The lastId is the id of the last token that was returned in the previous call. This is used to paginate the results.
     * @param {number} [size] - number &#x3D; 50,
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletBalanceAPIsApiInterface
     */
    listNFTsForWalletForClientRaw(requestParameters: ListNFTsForWalletForClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesResponseIListUsersTokens>>;

    /**
     * This function returns a list of NFTs for a given wallet
     */
    listNFTsForWalletForClient(requestParameters: ListNFTsForWalletForClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesResponseIListUsersTokens>;

    /**
     * This function returns a list of all the NFTs that a user owns
     * @param {string} xApiKey - This is the API key that you will get from the admin panel.
     * @param {string} [walletId] - The walletId of the wallet you want to get the NFTs for.
     * @param {Array<string>} [tokenDataIds] - ObjectId[] &#x3D; [] as ObjectId[] as in mongose ids of the tokens.
     * @param {string} [lastId] - This is the last id of the last token that was returned in the previous call. This is used to paginate the results.
     * @param {number} [size] - number &#x3D; 50,
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletBalanceAPIsApiInterface
     */
    listNFTsForWalletForServerRaw(requestParameters: ListNFTsForWalletForServerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesResponseIListUsersTokens>>;

    /**
     * This function returns a list of all the NFTs that a user owns
     */
    listNFTsForWalletForServer(requestParameters: ListNFTsForWalletForServerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesResponseIListUsersTokens>;

}

/**
 * 
 */
export class WalletBalanceAPIsApi extends runtime.BaseAPI implements WalletBalanceAPIsApiInterface {

    /**
     * This function returns the balance of a test ERC20 token for a given wallet
     */
    async getTestErc20BalanceRaw(requestParameters: GetTestErc20BalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesWalletBalanceArray>> {
        if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
            throw new runtime.RequiredError('walletId','Required parameter requestParameters.walletId was null or undefined when calling getTestErc20Balance.');
        }

        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling getTestErc20Balance.');
        }

        const queryParameters: any = {};

        if (requestParameters.walletId !== undefined) {
            queryParameters['walletId'] = requestParameters.walletId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        const response = await this.request({
            path: `/wallet-balance/test-erc20`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesWalletBalanceArrayFromJSON(jsonValue));
    }

    /**
     * This function returns the balance of a test ERC20 token for a given wallet
     */
    async getTestErc20Balance(requestParameters: GetTestErc20BalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesWalletBalanceArray> {
        const response = await this.getTestErc20BalanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * It gets the balance of a wallet.
     */
    async getWalletBalanceRaw(requestParameters: GetWalletBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesWalletBalance>> {
        if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
            throw new runtime.RequiredError('walletId','Required parameter requestParameters.walletId was null or undefined when calling getWalletBalance.');
        }

        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling getWalletBalance.');
        }

        const queryParameters: any = {};

        if (requestParameters.walletId !== undefined) {
            queryParameters['walletId'] = requestParameters.walletId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        const response = await this.request({
            path: `/wallet-balance/native`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesWalletBalanceFromJSON(jsonValue));
    }

    /**
     * It gets the balance of a wallet.
     */
    async getWalletBalance(requestParameters: GetWalletBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesWalletBalance> {
        const response = await this.getWalletBalanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This function returns a list of NFTs for a given wallet
     */
    async listNFTsForWalletForClientRaw(requestParameters: ListNFTsForWalletForClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesResponseIListUsersTokens>> {
        if (requestParameters.accessToken === null || requestParameters.accessToken === undefined) {
            throw new runtime.RequiredError('accessToken','Required parameter requestParameters.accessToken was null or undefined when calling listNFTsForWalletForClient.');
        }

        const queryParameters: any = {};

        if (requestParameters.walletId !== undefined) {
            queryParameters['walletId'] = requestParameters.walletId;
        }

        if (requestParameters.tokenDataIds) {
            queryParameters['tokenDataIds'] = requestParameters.tokenDataIds;
        }

        if (requestParameters.lastId !== undefined) {
            queryParameters['lastId'] = requestParameters.lastId;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accessToken !== undefined && requestParameters.accessToken !== null) {
            headerParameters['access-token'] = String(requestParameters.accessToken);
        }

        const response = await this.request({
            path: `/wallet-balance/list-wallet-nft-client`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseIListUsersTokensFromJSON(jsonValue));
    }

    /**
     * This function returns a list of NFTs for a given wallet
     */
    async listNFTsForWalletForClient(requestParameters: ListNFTsForWalletForClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesResponseIListUsersTokens> {
        const response = await this.listNFTsForWalletForClientRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This function returns a list of all the NFTs that a user owns
     */
    async listNFTsForWalletForServerRaw(requestParameters: ListNFTsForWalletForServerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesResponseIListUsersTokens>> {
        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling listNFTsForWalletForServer.');
        }

        const queryParameters: any = {};

        if (requestParameters.walletId !== undefined) {
            queryParameters['walletId'] = requestParameters.walletId;
        }

        if (requestParameters.tokenDataIds) {
            queryParameters['tokenDataIds'] = requestParameters.tokenDataIds;
        }

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
            path: `/wallet-balance/list-wallet-nft-server`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseIListUsersTokensFromJSON(jsonValue));
    }

    /**
     * This function returns a list of all the NFTs that a user owns
     */
    async listNFTsForWalletForServer(requestParameters: ListNFTsForWalletForServerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesResponseIListUsersTokens> {
        const response = await this.listNFTsForWalletForServerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}