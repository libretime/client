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
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { PatchedShowInstance } from '../model';
// @ts-ignore
import { ShowInstance } from '../model';
/**
 * ShowInstancesApi - axios parameter creator
 * @export
 */
export const ShowInstancesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ShowInstance} showInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesCreate: async (showInstance: ShowInstance, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'showInstance' is not null or undefined
            assertParamExists('showInstancesCreate', 'showInstance', showInstance)
            const localVarPath = `/api/v2/show-instances`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(showInstance, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesDestroy: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showInstancesDestroy', 'id', id)
            const localVarPath = `/api/v2/show-instances/{id}`
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
        showInstancesList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/show-instances`;
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
         * @param {number} id A unique integer value identifying this show instance.
         * @param {PatchedShowInstance} [patchedShowInstance] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesPartialUpdate: async (id: number, patchedShowInstance?: PatchedShowInstance, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showInstancesPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/show-instances/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedShowInstance, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesRetrieve: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showInstancesRetrieve', 'id', id)
            const localVarPath = `/api/v2/show-instances/{id}`
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
         * @param {number} id A unique integer value identifying this show instance.
         * @param {ShowInstance} showInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesUpdate: async (id: number, showInstance: ShowInstance, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showInstancesUpdate', 'id', id)
            // verify required parameter 'showInstance' is not null or undefined
            assertParamExists('showInstancesUpdate', 'showInstance', showInstance)
            const localVarPath = `/api/v2/show-instances/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(showInstance, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShowInstancesApi - functional programming interface
 * @export
 */
export const ShowInstancesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShowInstancesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ShowInstance} showInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showInstancesCreate(showInstance: ShowInstance, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowInstance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showInstancesCreate(showInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowInstancesApi.showInstancesCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showInstancesDestroy(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showInstancesDestroy(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowInstancesApi.showInstancesDestroy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showInstancesList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShowInstance>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showInstancesList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowInstancesApi.showInstancesList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {PatchedShowInstance} [patchedShowInstance] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showInstancesPartialUpdate(id: number, patchedShowInstance?: PatchedShowInstance, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowInstance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showInstancesPartialUpdate(id, patchedShowInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowInstancesApi.showInstancesPartialUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showInstancesRetrieve(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowInstance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showInstancesRetrieve(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowInstancesApi.showInstancesRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {ShowInstance} showInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showInstancesUpdate(id: number, showInstance: ShowInstance, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowInstance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showInstancesUpdate(id, showInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShowInstancesApi.showInstancesUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ShowInstancesApi - factory interface
 * @export
 */
export const ShowInstancesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShowInstancesApiFp(configuration)
    return {
        /**
         * 
         * @param {ShowInstance} showInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesCreate(showInstance: ShowInstance, options?: any): AxiosPromise<ShowInstance> {
            return localVarFp.showInstancesCreate(showInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.showInstancesDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesList(options?: any): AxiosPromise<Array<ShowInstance>> {
            return localVarFp.showInstancesList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {PatchedShowInstance} [patchedShowInstance] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesPartialUpdate(id: number, patchedShowInstance?: PatchedShowInstance, options?: any): AxiosPromise<ShowInstance> {
            return localVarFp.showInstancesPartialUpdate(id, patchedShowInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesRetrieve(id: number, options?: any): AxiosPromise<ShowInstance> {
            return localVarFp.showInstancesRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show instance.
         * @param {ShowInstance} showInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showInstancesUpdate(id: number, showInstance: ShowInstance, options?: any): AxiosPromise<ShowInstance> {
            return localVarFp.showInstancesUpdate(id, showInstance, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ShowInstancesApi - object-oriented interface
 * @export
 * @class ShowInstancesApi
 * @extends {BaseAPI}
 */
export class ShowInstancesApi extends BaseAPI {
    /**
     * 
     * @param {ShowInstance} showInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowInstancesApi
     */
    public showInstancesCreate(showInstance: ShowInstance, options?: RawAxiosRequestConfig) {
        return ShowInstancesApiFp(this.configuration).showInstancesCreate(showInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show instance.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowInstancesApi
     */
    public showInstancesDestroy(id: number, options?: RawAxiosRequestConfig) {
        return ShowInstancesApiFp(this.configuration).showInstancesDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowInstancesApi
     */
    public showInstancesList(options?: RawAxiosRequestConfig) {
        return ShowInstancesApiFp(this.configuration).showInstancesList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show instance.
     * @param {PatchedShowInstance} [patchedShowInstance] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowInstancesApi
     */
    public showInstancesPartialUpdate(id: number, patchedShowInstance?: PatchedShowInstance, options?: RawAxiosRequestConfig) {
        return ShowInstancesApiFp(this.configuration).showInstancesPartialUpdate(id, patchedShowInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show instance.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowInstancesApi
     */
    public showInstancesRetrieve(id: number, options?: RawAxiosRequestConfig) {
        return ShowInstancesApiFp(this.configuration).showInstancesRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show instance.
     * @param {ShowInstance} showInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowInstancesApi
     */
    public showInstancesUpdate(id: number, showInstance: ShowInstance, options?: RawAxiosRequestConfig) {
        return ShowInstancesApiFp(this.configuration).showInstancesUpdate(id, showInstance, options).then((request) => request(this.axios, this.basePath));
    }
}

