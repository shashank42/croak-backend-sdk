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
  ResponsesResponseCryptoWallet,
  ResponsesResponseCryptoWalletArray,
  ResponsesResponseIGetWallet,
} from '../models';
import {
  IErrorResponseFromJSON,
  IErrorResponseToJSON,
  ResponsesResponseCryptoWalletFromJSON,
  ResponsesResponseCryptoWalletToJSON,
  ResponsesResponseCryptoWalletArrayFromJSON,
  ResponsesResponseCryptoWalletArrayToJSON,
  ResponsesResponseIGetWalletFromJSON,
  ResponsesResponseIGetWalletToJSON,
} from '../models';

export interface GetUserWalletsRequest {
  email: string;
  xApiKey: string;
}

export interface GetWalletRequest {
  walletId: string;
  xApiKey: string;
}

export interface ListWalletsRequest {
  xApiKey: string;
  lastId?: string;
  size?: number;
}

/**
 * NonCustodialWalletAPIsApi - interface
 *
 * @export
 * @interface NonCustodialWalletAPIsApiInterface
 */
export interface NonCustodialWalletAPIsApiInterface {
  /**
   * It gets the wallets of a user.
   * @param {string} email - The email of the user you want to get the wallets for.
   * @param {string} xApiKey - This is the API key that you will use to authenticate your requests.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NonCustodialWalletAPIsApiInterface
   */
  getUserWalletsRaw(
    requestParameters: GetUserWalletsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseCryptoWalletArray>>;

  /**
   * It gets the wallets of a user.
   */
  getUserWallets(
    requestParameters: GetUserWalletsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseCryptoWalletArray>;

  /**
   * It gets the wallet info.
   * @param {string} walletId - The wallet id of the wallet you want to get.
   * @param {string} xApiKey - This is the API key that you will use to authenticate your requests.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NonCustodialWalletAPIsApiInterface
   */
  getWalletRaw(
    requestParameters: GetWalletRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseCryptoWallet>>;

  /**
   * It gets the wallet info.
   */
  getWallet(
    requestParameters: GetWalletRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseCryptoWallet>;

  /**
   * It returns a list of wallets for a company.
   * @param {string} xApiKey - This is the API key that you will use to authenticate your requests.
   * @param {string} [lastId] - The lastId is the last wallet id that was returned in the previous request. This is used to paginate the results.
   * @param {number} [size] - number &#x3D; 50
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NonCustodialWalletAPIsApiInterface
   */
  listWalletsRaw(
    requestParameters: ListWalletsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseIGetWallet>>;

  /**
   * It returns a list of wallets for a company.
   */
  listWallets(
    requestParameters: ListWalletsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseIGetWallet>;
}

/**
 *
 */
export class NonCustodialWalletAPIsApi extends runtime.BaseAPI implements NonCustodialWalletAPIsApiInterface {
  /**
   * It gets the wallets of a user.
   */
  async getUserWalletsRaw(
    requestParameters: GetUserWalletsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseCryptoWalletArray>> {
    if (requestParameters.email === null || requestParameters.email === undefined) {
      throw new runtime.RequiredError(
        'email',
        'Required parameter requestParameters.email was null or undefined when calling getUserWallets.',
      );
    }

    if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
      throw new runtime.RequiredError(
        'xApiKey',
        'Required parameter requestParameters.xApiKey was null or undefined when calling getUserWallets.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.email !== undefined) {
      queryParameters['email'] = requestParameters.email;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
      headerParameters['x-api-key'] = String(requestParameters.xApiKey);
    }

    const response = await this.request(
      {
        path: `/wallet/email`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseCryptoWalletArrayFromJSON(jsonValue));
  }

  /**
   * It gets the wallets of a user.
   */
  async getUserWallets(
    requestParameters: GetUserWalletsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseCryptoWalletArray> {
    const response = await this.getUserWalletsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * It gets the wallet info.
   */
  async getWalletRaw(
    requestParameters: GetWalletRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseCryptoWallet>> {
    if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
      throw new runtime.RequiredError(
        'walletId',
        'Required parameter requestParameters.walletId was null or undefined when calling getWallet.',
      );
    }

    if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
      throw new runtime.RequiredError(
        'xApiKey',
        'Required parameter requestParameters.xApiKey was null or undefined when calling getWallet.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.walletId !== undefined) {
      queryParameters['walletId'] = requestParameters.walletId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
      headerParameters['x-api-key'] = String(requestParameters.xApiKey);
    }

    const response = await this.request(
      {
        path: `/wallet/get`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseCryptoWalletFromJSON(jsonValue));
  }

  /**
   * It gets the wallet info.
   */
  async getWallet(
    requestParameters: GetWalletRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseCryptoWallet> {
    const response = await this.getWalletRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * It returns a list of wallets for a company.
   */
  async listWalletsRaw(
    requestParameters: ListWalletsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseIGetWallet>> {
    if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
      throw new runtime.RequiredError(
        'xApiKey',
        'Required parameter requestParameters.xApiKey was null or undefined when calling listWallets.',
      );
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

    const response = await this.request(
      {
        path: `/wallet/list`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseIGetWalletFromJSON(jsonValue));
  }

  /**
   * It returns a list of wallets for a company.
   */
  async listWallets(
    requestParameters: ListWalletsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseIGetWallet> {
    const response = await this.listWalletsRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
