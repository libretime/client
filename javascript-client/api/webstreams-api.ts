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
import { PatchedWebstream } from '../model';
// @ts-ignore
import { Webstream } from '../model';
/**
 * WebstreamsApi - axios parameter creator
 * @export
 */
export const WebstreamsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Webstream} webstream 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsCreate: async (webstream: Webstream, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webstream' is not null or undefined
            assertParamExists('webstreamsCreate', 'webstream', webstream)
            const localVarPath = `/api/v2/webstreams`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webstream, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('webstreamsDestroy', 'id', id)
            const localVarPath = `/api/v2/webstreams/{id}`
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
        webstreamsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/webstreams`;
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
         * @param {number} id A unique integer value identifying this webstream.
         * @param {PatchedWebstream} [patchedWebstream] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsPartialUpdate: async (id: number, patchedWebstream?: PatchedWebstream, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('webstreamsPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/webstreams/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedWebstream, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('webstreamsRetrieve', 'id', id)
            const localVarPath = `/api/v2/webstreams/{id}`
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
         * @param {number} id A unique integer value identifying this webstream.
         * @param {Webstream} webstream 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsUpdate: async (id: number, webstream: Webstream, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('webstreamsUpdate', 'id', id)
            // verify required parameter 'webstream' is not null or undefined
            assertParamExists('webstreamsUpdate', 'webstream', webstream)
            const localVarPath = `/api/v2/webstreams/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(webstream, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebstreamsApi - functional programming interface
 * @export
 */
export const WebstreamsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebstreamsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Webstream} webstream 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async webstreamsCreate(webstream: Webstream, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webstream>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.webstreamsCreate(webstream, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async webstreamsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.webstreamsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async webstreamsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Webstream>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.webstreamsList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {PatchedWebstream} [patchedWebstream] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async webstreamsPartialUpdate(id: number, patchedWebstream?: PatchedWebstream, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webstream>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.webstreamsPartialUpdate(id, patchedWebstream, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async webstreamsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webstream>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.webstreamsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {Webstream} webstream 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async webstreamsUpdate(id: number, webstream: Webstream, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webstream>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.webstreamsUpdate(id, webstream, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebstreamsApi - factory interface
 * @export
 */
export const WebstreamsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebstreamsApiFp(configuration)
    return {
        /**
         * 
         * @param {Webstream} webstream 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsCreate(webstream: Webstream, options?: any): AxiosPromise<Webstream> {
            return localVarFp.webstreamsCreate(webstream, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.webstreamsDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsList(options?: any): AxiosPromise<Array<Webstream>> {
            return localVarFp.webstreamsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {PatchedWebstream} [patchedWebstream] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsPartialUpdate(id: number, patchedWebstream?: PatchedWebstream, options?: any): AxiosPromise<Webstream> {
            return localVarFp.webstreamsPartialUpdate(id, patchedWebstream, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsRetrieve(id: number, options?: any): AxiosPromise<Webstream> {
            return localVarFp.webstreamsRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this webstream.
         * @param {Webstream} webstream 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        webstreamsUpdate(id: number, webstream: Webstream, options?: any): AxiosPromise<Webstream> {
            return localVarFp.webstreamsUpdate(id, webstream, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebstreamsApi - object-oriented interface
 * @export
 * @class WebstreamsApi
 * @extends {BaseAPI}
 */
export class WebstreamsApi extends BaseAPI {
    /**
     * 
     * @param {Webstream} webstream 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebstreamsApi
     */
    public webstreamsCreate(webstream: Webstream, options?: AxiosRequestConfig) {
        return WebstreamsApiFp(this.configuration).webstreamsCreate(webstream, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this webstream.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebstreamsApi
     */
    public webstreamsDestroy(id: number, options?: AxiosRequestConfig) {
        return WebstreamsApiFp(this.configuration).webstreamsDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebstreamsApi
     */
    public webstreamsList(options?: AxiosRequestConfig) {
        return WebstreamsApiFp(this.configuration).webstreamsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this webstream.
     * @param {PatchedWebstream} [patchedWebstream] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebstreamsApi
     */
    public webstreamsPartialUpdate(id: number, patchedWebstream?: PatchedWebstream, options?: AxiosRequestConfig) {
        return WebstreamsApiFp(this.configuration).webstreamsPartialUpdate(id, patchedWebstream, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this webstream.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebstreamsApi
     */
    public webstreamsRetrieve(id: number, options?: AxiosRequestConfig) {
        return WebstreamsApiFp(this.configuration).webstreamsRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this webstream.
     * @param {Webstream} webstream 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebstreamsApi
     */
    public webstreamsUpdate(id: number, webstream: Webstream, options?: AxiosRequestConfig) {
        return WebstreamsApiFp(this.configuration).webstreamsUpdate(id, webstream, options).then((request) => request(this.axios, this.basePath));
    }
}

