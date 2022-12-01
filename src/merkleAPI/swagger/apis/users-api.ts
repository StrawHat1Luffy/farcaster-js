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
import { InlineResponse20012 } from "../models";
import { InlineResponse20013 } from "../models";
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Get information about a Farcaster username (fname).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v2FnameGet: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v2/fname`;
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
    /**
     * Gets the specified user via their username.
     * @param {string} authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v2UserByUsernameGet: async (
      username: string,
      authorization: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'username' is not null or undefined
      if (username === null || username === undefined) {
        throw new RequiredError(
          "username",
          "Required parameter username was null or undefined when calling v2UserByUsernameGet."
        );
      }
      // verify required parameter 'authorization' is not null or undefined
      if (authorization === null || authorization === undefined) {
        throw new RequiredError(
          "authorization",
          "Required parameter authorization was null or undefined when calling v2UserByUsernameGet."
        );
      }
      const localVarPath = `/v2/user-by-username`;
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

      if (username !== undefined && username !== null) {
        localVarQueryParameter["username"] = String(username);
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
    /**
     * Gets the specified user via their FID or fname (username).
     * @param {string} authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v2UserGet: async (
      fid: number,
      authorization: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      if (fid === null || fid === undefined) {
        throw new RequiredError(
          "fid",
          "Required parameter fid was null or undefined when calling v2UserGet."
        );
      }
      // verify required parameter 'authorization' is not null or undefined
      if (authorization === null || authorization === undefined) {
        throw new RequiredError(
          "authorization",
          "Required parameter authorization was null or undefined when calling v2UserGet."
        );
      }
      const localVarPath = `/v2/user`;
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

      if (fid !== undefined && fid !== null) {
        localVarQueryParameter["fid"] = String(fid);
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
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
  return {
    /**
     * Get information about a Farcaster username (fname).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v2FnameGet(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => Promise<AxiosResponse<InlineResponse20012>>
    > {
      const localVarAxiosArgs = await UsersApiAxiosParamCreator(
        configuration
      ).v2FnameGet(options);
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
    /**
     * Gets the specified user via their username.
     * @param {string} authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v2UserByUsernameGet(
      username: string,
      authorization: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => Promise<AxiosResponse<InlineResponse20013>>
    > {
      const localVarAxiosArgs = await UsersApiAxiosParamCreator(
        configuration
      ).v2UserByUsernameGet(username, authorization, options);
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
    /**
     * Gets the specified user via their FID or fname (username).
     * @param {string} authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v2UserGet(
      fid: number,
      authorization: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => Promise<AxiosResponse<InlineResponse20013>>
    > {
      const localVarAxiosArgs = await UsersApiAxiosParamCreator(
        configuration
      ).v2UserGet(fid, authorization, options);
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
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Get information about a Farcaster username (fname).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v2FnameGet(
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<InlineResponse20012>> {
      return UsersApiFp(configuration)
        .v2FnameGet(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the specified user via their username.
     * @param {string} authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v2UserByUsernameGet(
      username: string,
      authorization: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<InlineResponse20013>> {
      return UsersApiFp(configuration)
        .v2UserByUsernameGet(username, authorization, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the specified user via their FID or fname (username).
     * @param {string} authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v2UserGet(
      fid: number,
      authorization: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<InlineResponse20013>> {
      return UsersApiFp(configuration)
        .v2UserGet(fid, authorization, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
  /**
   * Get information about a Farcaster username (fname).
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public async v2FnameGet(
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<InlineResponse20012>> {
    return UsersApiFp(this.configuration)
      .v2FnameGet(options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Gets the specified user via their username.
   * @param {string} authorization
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public async v2UserByUsernameGet(
    username: string,
    authorization: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<InlineResponse20013>> {
    return UsersApiFp(this.configuration)
      .v2UserByUsernameGet(username, authorization, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Gets the specified user via their FID or fname (username).
   * @param {string} authorization
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public async v2UserGet(
    fid: number,
    authorization: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<InlineResponse20013>> {
    return UsersApiFp(this.configuration)
      .v2UserGet(fid, authorization, options)
      .then((request) => request(this.axios, this.basePath));
  }
}