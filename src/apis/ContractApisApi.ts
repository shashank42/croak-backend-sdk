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
import type { IContract, IErrorResponse, ResponsesResponseContract, ResponsesResponseIListContracts } from '../models';
import {
  IContractFromJSON,
  IContractToJSON,
  IErrorResponseFromJSON,
  IErrorResponseToJSON,
  ResponsesResponseContractFromJSON,
  ResponsesResponseContractToJSON,
  ResponsesResponseIListContractsFromJSON,
  ResponsesResponseIListContractsToJSON,
} from '../models';

export interface CreateContractRequest {
  xApiKey: string;
  iContract: IContract;
}

export interface ListContractsRequest {
  xApiKey: string;
  lastId?: string;
  size?: number;
}

/**
 * ContractApisApi - interface
 *
 * @export
 * @interface ContractApisApiInterface
 */
export interface ContractApisApiInterface {
  /**
   * Create a new contract. You can treat this as a collection of items. Eg. T-shirts
   * @param {string} xApiKey - This is the API secret key that is passed in the header of the request.
   * @param {IContract} iContract - IContract - This is the request body that is sent to the API.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContractApisApiInterface
   */
  createContractRaw(
    requestParameters: CreateContractRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseContract>>;

  /**
   * Create a new contract. You can treat this as a collection of items. Eg. T-shirts
   */
  createContract(
    requestParameters: CreateContractRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseContract>;

  /**
   * Get list of contracts for company
   * @param {string} xApiKey - This is the API key that is passed in the header of the request.
   * @param {string} [lastId] - The last id of the last contract in the list. This is used to get the next set of contracts.
   * @param {number} [size] - number &#x3D; 50,
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContractApisApiInterface
   */
  listContractsRaw(
    requestParameters: ListContractsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseIListContracts>>;

  /**
   * Get list of contracts for company
   */
  listContracts(
    requestParameters: ListContractsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseIListContracts>;
}

/**
 *
 */
export class ContractApisApi extends runtime.BaseAPI implements ContractApisApiInterface {
  /**
   * Create a new contract. You can treat this as a collection of items. Eg. T-shirts
   */
  async createContractRaw(
    requestParameters: CreateContractRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseContract>> {
    if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
      throw new runtime.RequiredError(
        'xApiKey',
        'Required parameter requestParameters.xApiKey was null or undefined when calling createContract.',
      );
    }

    if (requestParameters.iContract === null || requestParameters.iContract === undefined) {
      throw new runtime.RequiredError(
        'iContract',
        'Required parameter requestParameters.iContract was null or undefined when calling createContract.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
      headerParameters['x-api-key'] = String(requestParameters.xApiKey);
    }

    const response = await this.request(
      {
        path: `/contract/create`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: IContractToJSON(requestParameters.iContract),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseContractFromJSON(jsonValue));
  }

  /**
   * Create a new contract. You can treat this as a collection of items. Eg. T-shirts
   */
  async createContract(
    requestParameters: CreateContractRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseContract> {
    const response = await this.createContractRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get list of contracts for company
   */
  async listContractsRaw(
    requestParameters: ListContractsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ResponsesResponseIListContracts>> {
    if (requestParameters.xApiKey === null || requestParameters.xApiKey === undefined) {
      throw new runtime.RequiredError(
        'xApiKey',
        'Required parameter requestParameters.xApiKey was null or undefined when calling listContracts.',
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
        path: `/contract/list`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesResponseIListContractsFromJSON(jsonValue));
  }

  /**
   * Get list of contracts for company
   */
  async listContracts(
    requestParameters: ListContractsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ResponsesResponseIListContracts> {
    const response = await this.listContractsRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
