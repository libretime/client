/* tslint:disable */
/* eslint-disable */
/**
 * LibreTime API
 * Radio Broadcast & Automation Platform
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { PatchedShowHost } from '../model';
// @ts-ignore
import type { ShowHost } from '../model';
/**
 * ShowHostsApi - axios parameter creator
 * @export
 */
export const ShowHostsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ShowHost} showHost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsCreate: async (showHost: ShowHost, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'showHost' is not null or undefined
            assertParamExists('showHostsCreate', 'showHost', showHost)
            const localVarPath = `/api/v2/show-hosts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(showHost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsDestroy: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showHostsDestroy', 'id', id)
            const localVarPath = `/api/v2/show-hosts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/show-hosts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {PatchedShowHost} [patchedShowHost] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsPartialUpdate: async (id: number, patchedShowHost?: PatchedShowHost, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showHostsPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/show-hosts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchedShowHost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsRetrieve: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showHostsRetrieve', 'id', id)
            const localVarPath = `/api/v2/show-hosts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {ShowHost} showHost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsUpdate: async (id: number, showHost: ShowHost, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showHostsUpdate', 'id', id)
            // verify required parameter 'showHost' is not null or undefined
            assertParamExists('showHostsUpdate', 'showHost', showHost)
            const localVarPath = `/api/v2/show-hosts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(showHost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShowHostsApi - functional programming interface
 * @export
 */
export const ShowHostsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShowHostsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ShowHost} showHost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showHostsCreate(showHost: ShowHost, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowHost>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showHostsCreate(showHost, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowHostsApi.showHostsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showHostsDestroy(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showHostsDestroy(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowHostsApi.showHostsDestroy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showHostsList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShowHost>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showHostsList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowHostsApi.showHostsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {PatchedShowHost} [patchedShowHost] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showHostsPartialUpdate(id: number, patchedShowHost?: PatchedShowHost, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowHost>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showHostsPartialUpdate(id, patchedShowHost, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowHostsApi.showHostsPartialUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showHostsRetrieve(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowHost>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showHostsRetrieve(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowHostsApi.showHostsRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {ShowHost} showHost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showHostsUpdate(id: number, showHost: ShowHost, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowHost>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showHostsUpdate(id, showHost, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowHostsApi.showHostsUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ShowHostsApi - factory interface
 * @export
 */
export const ShowHostsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShowHostsApiFp(configuration)
    return {
        /**
         * 
         * @param {ShowHost} showHost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsCreate(showHost: ShowHost, options?: RawAxiosRequestConfig): AxiosPromise<ShowHost> {
            return localVarFp.showHostsCreate(showHost, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsDestroy(id: number, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.showHostsDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsList(options?: RawAxiosRequestConfig): AxiosPromise<Array<ShowHost>> {
            return localVarFp.showHostsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {PatchedShowHost} [patchedShowHost] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsPartialUpdate(id: number, patchedShowHost?: PatchedShowHost, options?: RawAxiosRequestConfig): AxiosPromise<ShowHost> {
            return localVarFp.showHostsPartialUpdate(id, patchedShowHost, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsRetrieve(id: number, options?: RawAxiosRequestConfig): AxiosPromise<ShowHost> {
            return localVarFp.showHostsRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show host.
         * @param {ShowHost} showHost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showHostsUpdate(id: number, showHost: ShowHost, options?: RawAxiosRequestConfig): AxiosPromise<ShowHost> {
            return localVarFp.showHostsUpdate(id, showHost, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ShowHostsApi - object-oriented interface
 * @export
 * @class ShowHostsApi
 * @extends {BaseAPI}
 */
export class ShowHostsApi extends BaseAPI {
    /**
     * 
     * @param {ShowHost} showHost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowHostsApi
     */
    public showHostsCreate(showHost: ShowHost, options?: RawAxiosRequestConfig) {
        return ShowHostsApiFp(this.configuration).showHostsCreate(showHost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show host.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowHostsApi
     */
    public showHostsDestroy(id: number, options?: RawAxiosRequestConfig) {
        return ShowHostsApiFp(this.configuration).showHostsDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowHostsApi
     */
    public showHostsList(options?: RawAxiosRequestConfig) {
        return ShowHostsApiFp(this.configuration).showHostsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show host.
     * @param {PatchedShowHost} [patchedShowHost] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowHostsApi
     */
    public showHostsPartialUpdate(id: number, patchedShowHost?: PatchedShowHost, options?: RawAxiosRequestConfig) {
        return ShowHostsApiFp(this.configuration).showHostsPartialUpdate(id, patchedShowHost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show host.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowHostsApi
     */
    public showHostsRetrieve(id: number, options?: RawAxiosRequestConfig) {
        return ShowHostsApiFp(this.configuration).showHostsRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show host.
     * @param {ShowHost} showHost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowHostsApi
     */
    public showHostsUpdate(id: number, showHost: ShowHost, options?: RawAxiosRequestConfig) {
        return ShowHostsApiFp(this.configuration).showHostsUpdate(id, showHost, options).then((request) => request(this.axios, this.basePath));
    }
}

