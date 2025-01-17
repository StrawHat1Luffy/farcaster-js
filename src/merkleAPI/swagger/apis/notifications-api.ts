/* tslint:disable */
/* eslint-disable */
/**
 * Merkle API
 * API documentation for all publicly exposed APIs provided by Merkle Manufactory, Inc for Farcaster V2.
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, {
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
import { InlineResponse20014 } from "../models";
/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Get notifications where the authenticated user was mentioned.
     * @param {number} limit
     * @param {string} authorization
     * @param {string} [cursor]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v2MentionAndReplyNotificationsGet: async (
      limit: number,
      authorization: string,
      cursor?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'limit' is not null or undefined
      if (limit === null || limit === undefined) {
        throw new RequiredError(
          "limit",
          "Required parameter limit was null or undefined when calling v2MentionAndReplyNotificationsGet."
        );
      }
      // verify required parameter 'authorization' is not null or undefined
      if (authorization === null || authorization === undefined) {
        throw new RequiredError(
          "authorization",
          "Required parameter authorization was null or undefined when calling v2MentionAndReplyNotificationsGet."
        );
      }
      const localVarPath = `/v2/mention-and-reply-notifications`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (cursor !== undefined) {
        localVarQueryParameter["cursor"] = cursor;
      }

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      if (authorization !== undefined && authorization !== null) {
        localVarHeaderParameter["authorization"] = String(authorization);
      }

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function (configuration?: Configuration) {
  return {
    /**
     * Get notifications where the authenticated user was mentioned.
     * @param {number} limit
     * @param {string} authorization
     * @param {string} [cursor]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v2MentionAndReplyNotificationsGet(
      limit: number,
      authorization: string,
      cursor?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => Promise<AxiosResponse<InlineResponse20014>>
    > {
      const localVarAxiosArgs = await NotificationsApiAxiosParamCreator(
        configuration
      ).v2MentionAndReplyNotificationsGet(
        limit,
        authorization,
        cursor,
        options
      );
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Get notifications where the authenticated user was mentioned.
     * @param {number} limit
     * @param {string} authorization
     * @param {string} [cursor]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v2MentionAndReplyNotificationsGet(
      limit: number,
      authorization: string,
      cursor?: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<InlineResponse20014>> {
      return NotificationsApiFp(configuration)
        .v2MentionAndReplyNotificationsGet(
          limit,
          authorization,
          cursor,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI {
  /**
   * Get notifications where the authenticated user was mentioned.
   * @param {number} limit
   * @param {string} authorization
   * @param {string} [cursor]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationsApi
   */
  public async v2MentionAndReplyNotificationsGet(
    limit: number,
    authorization: string,
    cursor?: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<InlineResponse20014>> {
    return NotificationsApiFp(this.configuration)
      .v2MentionAndReplyNotificationsGet(limit, authorization, cursor, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
