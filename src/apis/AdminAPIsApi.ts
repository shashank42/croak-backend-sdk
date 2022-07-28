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
  ICreateCompany,
  IErrorResponse,
  ResponsesResponseCompany,
  ResponsesWalletBalance,
} from '../models';
import {
    ICreateCompanyFromJSON,
    ICreateCompanyToJSON,
    IErrorResponseFromJSON,
    IErrorResponseToJSON,
    ResponsesResponseCompanyFromJSON,
    ResponsesResponseCompanyToJSON,
    ResponsesWalletBalanceFromJSON,
    ResponsesWalletBalanceToJSON,
} from '../models';

export interface GetCompanyRequest {
    xApiKey: string;
}

export interface GetRelayerBalanceRequest {
    xApiKey: string;
}

export interface PostCompanyRequest {
    iCreateCompany: ICreateCompany;
}

/**
 * AdminAPIsApi - interface
 * 
 * @export
 * @interface AdminAPIsApiInterface
 */
export interface AdminAPIsApiInterface {
    /**
     * It returns the company information.
     * @param {string} xApiKey - string - This is the company secret key that you got from the admin panel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAPIsApiInterface
     */
    getCompanyRaw(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesResponseCompany>>;

    /**
     * It returns the company information.
     */
    getCompany(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesResponseCompany>;

    /**
     * Get wallet balance for relayer being used for your company. Your company poc address is linked with your relayer.
     * @param {string} xApiKey - This is the API key that you will use to authenticate your request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAPIsApiInterface
     */
    getRelayerBalanceRaw(requestParameters: GetRelayerBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesWalletBalance>>;

    /**
     * Get wallet balance for relayer being used for your company. Your company poc address is linked with your relayer.
     */
    getRelayerBalance(requestParameters: GetRelayerBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesWalletBalance>;

    /**
     * Create a company login to use the APIs
     * @param {ICreateCompany} iCreateCompany This it the company creation request data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAPIsApiInterface
     */
    postCompanyRaw(requestParameters: PostCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesResponseCompany>>;

    /**
     * Create a company login to use the APIs
     */
    postCompany(requestParameters: PostCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesResponseCompany>;

}

/**
 * 
 */
export class AdminAPIsApi extends runtime.BaseAPI implements AdminAPIsApiInterface {

    /**
     * It returns the company information.
     */
    async getCompanyRaw(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesResponseCompany>> {
        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling getCompany.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        const response = await this.request({
            path: `/admin/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseCompanyFromJSON(jsonValue));
    }

    /**
     * It returns the company information.
     */
    async getCompany(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesResponseCompany> {
        const response = await this.getCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get wallet balance for relayer being used for your company. Your company poc address is linked with your relayer.
     */
    async getRelayerBalanceRaw(requestParameters: GetRelayerBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesWalletBalance>> {
        if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
            throw new runtime.RequiredError('xApiKey','Required parameter requestParameters.xApiKey was null or undefined when calling getRelayerBalance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        const response = await this.request({
            path: `/admin/relayer-balance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesWalletBalanceFromJSON(jsonValue));
    }

    /**
     * Get wallet balance for relayer being used for your company. Your company poc address is linked with your relayer.
     */
    async getRelayerBalance(requestParameters: GetRelayerBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesWalletBalance> {
        const response = await this.getRelayerBalanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a company login to use the APIs
     */
    async postCompanyRaw(requestParameters: PostCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesResponseCompany>> {
        if (requestParameters.iCreateCompany === null || requestParameters.iCreateCompany === undefined) {
            throw new runtime.RequiredError('iCreateCompany','Required parameter requestParameters.iCreateCompany was null or undefined when calling postCompany.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/admin/setup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ICreateCompanyToJSON(requestParameters.iCreateCompany),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseCompanyFromJSON(jsonValue));
    }

    /**
     * Create a company login to use the APIs
     */
    async postCompany(requestParameters: PostCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesResponseCompany> {
        const response = await this.postCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}