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
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ListenerCount } from '../model';
// @ts-ignore
import { PatchedListenerCount } from '../model';
/**
 * ListenerCountsApi - axios parameter creator
 * @export
 */
export const ListenerCountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ListenerCount} listenerCount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsCreate: async (listenerCount: ListenerCount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listenerCount' is not null or undefined
            assertParamExists('listenerCountsCreate', 'listenerCount', listenerCount)
            const localVarPath = `/api/v2/listener-counts`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(listenerCount, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('listenerCountsDestroy', 'id', id)
            const localVarPath = `/api/v2/listener-counts/{id}`
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
        listenerCountsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/listener-counts`;
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
         * @param {number} id A unique integer value identifying this listener count.
         * @param {PatchedListenerCount} [patchedListenerCount] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsPartialUpdate: async (id: number, patchedListenerCount?: PatchedListenerCount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('listenerCountsPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/listener-counts/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedListenerCount, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('listenerCountsRetrieve', 'id', id)
            const localVarPath = `/api/v2/listener-counts/{id}`
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
         * @param {number} id A unique integer value identifying this listener count.
         * @param {ListenerCount} listenerCount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsUpdate: async (id: number, listenerCount: ListenerCount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('listenerCountsUpdate', 'id', id)
            // verify required parameter 'listenerCount' is not null or undefined
            assertParamExists('listenerCountsUpdate', 'listenerCount', listenerCount)
            const localVarPath = `/api/v2/listener-counts/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(listenerCount, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListenerCountsApi - functional programming interface
 * @export
 */
export const ListenerCountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ListenerCountsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ListenerCount} listenerCount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listenerCountsCreate(listenerCount: ListenerCount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListenerCount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listenerCountsCreate(listenerCount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listenerCountsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listenerCountsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listenerCountsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ListenerCount>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listenerCountsList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {PatchedListenerCount} [patchedListenerCount] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listenerCountsPartialUpdate(id: number, patchedListenerCount?: PatchedListenerCount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListenerCount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listenerCountsPartialUpdate(id, patchedListenerCount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listenerCountsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListenerCount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listenerCountsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {ListenerCount} listenerCount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listenerCountsUpdate(id: number, listenerCount: ListenerCount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListenerCount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listenerCountsUpdate(id, listenerCount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ListenerCountsApi - factory interface
 * @export
 */
export const ListenerCountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ListenerCountsApiFp(configuration)
    return {
        /**
         * 
         * @param {ListenerCount} listenerCount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsCreate(listenerCount: ListenerCount, options?: any): AxiosPromise<ListenerCount> {
            return localVarFp.listenerCountsCreate(listenerCount, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.listenerCountsDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsList(options?: any): AxiosPromise<Array<ListenerCount>> {
            return localVarFp.listenerCountsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {PatchedListenerCount} [patchedListenerCount] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsPartialUpdate(id: number, patchedListenerCount?: PatchedListenerCount, options?: any): AxiosPromise<ListenerCount> {
            return localVarFp.listenerCountsPartialUpdate(id, patchedListenerCount, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsRetrieve(id: number, options?: any): AxiosPromise<ListenerCount> {
            return localVarFp.listenerCountsRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this listener count.
         * @param {ListenerCount} listenerCount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listenerCountsUpdate(id: number, listenerCount: ListenerCount, options?: any): AxiosPromise<ListenerCount> {
            return localVarFp.listenerCountsUpdate(id, listenerCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ListenerCountsApi - object-oriented interface
 * @export
 * @class ListenerCountsApi
 * @extends {BaseAPI}
 */
export class ListenerCountsApi extends BaseAPI {
    /**
     * 
     * @param {ListenerCount} listenerCount 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListenerCountsApi
     */
    public listenerCountsCreate(listenerCount: ListenerCount, options?: AxiosRequestConfig) {
        return ListenerCountsApiFp(this.configuration).listenerCountsCreate(listenerCount, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this listener count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListenerCountsApi
     */
    public listenerCountsDestroy(id: number, options?: AxiosRequestConfig) {
        return ListenerCountsApiFp(this.configuration).listenerCountsDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListenerCountsApi
     */
    public listenerCountsList(options?: AxiosRequestConfig) {
        return ListenerCountsApiFp(this.configuration).listenerCountsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this listener count.
     * @param {PatchedListenerCount} [patchedListenerCount] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListenerCountsApi
     */
    public listenerCountsPartialUpdate(id: number, patchedListenerCount?: PatchedListenerCount, options?: AxiosRequestConfig) {
        return ListenerCountsApiFp(this.configuration).listenerCountsPartialUpdate(id, patchedListenerCount, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this listener count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListenerCountsApi
     */
    public listenerCountsRetrieve(id: number, options?: AxiosRequestConfig) {
        return ListenerCountsApiFp(this.configuration).listenerCountsRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this listener count.
     * @param {ListenerCount} listenerCount 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListenerCountsApi
     */
    public listenerCountsUpdate(id: number, listenerCount: ListenerCount, options?: AxiosRequestConfig) {
        return ListenerCountsApiFp(this.configuration).listenerCountsUpdate(id, listenerCount, options).then((request) => request(this.axios, this.basePath));
    }
}

