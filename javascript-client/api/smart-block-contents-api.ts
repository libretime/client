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
import { PatchedSmartBlockContent } from '../model';
// @ts-ignore
import { SmartBlockContent } from '../model';
/**
 * SmartBlockContentsApi - axios parameter creator
 * @export
 */
export const SmartBlockContentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {SmartBlockContent} smartBlockContent 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsCreate: async (smartBlockContent: SmartBlockContent, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'smartBlockContent' is not null or undefined
            assertParamExists('smartBlockContentsCreate', 'smartBlockContent', smartBlockContent)
            const localVarPath = `/api/v2/smart-block-contents`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(smartBlockContent, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('smartBlockContentsDestroy', 'id', id)
            const localVarPath = `/api/v2/smart-block-contents/{id}`
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
        smartBlockContentsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/smart-block-contents`;
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
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {PatchedSmartBlockContent} [patchedSmartBlockContent] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsPartialUpdate: async (id: number, patchedSmartBlockContent?: PatchedSmartBlockContent, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('smartBlockContentsPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/smart-block-contents/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedSmartBlockContent, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('smartBlockContentsRetrieve', 'id', id)
            const localVarPath = `/api/v2/smart-block-contents/{id}`
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
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {SmartBlockContent} smartBlockContent 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsUpdate: async (id: number, smartBlockContent: SmartBlockContent, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('smartBlockContentsUpdate', 'id', id)
            // verify required parameter 'smartBlockContent' is not null or undefined
            assertParamExists('smartBlockContentsUpdate', 'smartBlockContent', smartBlockContent)
            const localVarPath = `/api/v2/smart-block-contents/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(smartBlockContent, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SmartBlockContentsApi - functional programming interface
 * @export
 */
export const SmartBlockContentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SmartBlockContentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {SmartBlockContent} smartBlockContent 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smartBlockContentsCreate(smartBlockContent: SmartBlockContent, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmartBlockContent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smartBlockContentsCreate(smartBlockContent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smartBlockContentsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smartBlockContentsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smartBlockContentsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SmartBlockContent>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smartBlockContentsList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {PatchedSmartBlockContent} [patchedSmartBlockContent] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smartBlockContentsPartialUpdate(id: number, patchedSmartBlockContent?: PatchedSmartBlockContent, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmartBlockContent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smartBlockContentsPartialUpdate(id, patchedSmartBlockContent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smartBlockContentsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmartBlockContent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smartBlockContentsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {SmartBlockContent} smartBlockContent 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smartBlockContentsUpdate(id: number, smartBlockContent: SmartBlockContent, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmartBlockContent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smartBlockContentsUpdate(id, smartBlockContent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SmartBlockContentsApi - factory interface
 * @export
 */
export const SmartBlockContentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SmartBlockContentsApiFp(configuration)
    return {
        /**
         * 
         * @param {SmartBlockContent} smartBlockContent 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsCreate(smartBlockContent: SmartBlockContent, options?: any): AxiosPromise<SmartBlockContent> {
            return localVarFp.smartBlockContentsCreate(smartBlockContent, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.smartBlockContentsDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsList(options?: any): AxiosPromise<Array<SmartBlockContent>> {
            return localVarFp.smartBlockContentsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {PatchedSmartBlockContent} [patchedSmartBlockContent] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsPartialUpdate(id: number, patchedSmartBlockContent?: PatchedSmartBlockContent, options?: any): AxiosPromise<SmartBlockContent> {
            return localVarFp.smartBlockContentsPartialUpdate(id, patchedSmartBlockContent, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsRetrieve(id: number, options?: any): AxiosPromise<SmartBlockContent> {
            return localVarFp.smartBlockContentsRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this smart block content.
         * @param {SmartBlockContent} smartBlockContent 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smartBlockContentsUpdate(id: number, smartBlockContent: SmartBlockContent, options?: any): AxiosPromise<SmartBlockContent> {
            return localVarFp.smartBlockContentsUpdate(id, smartBlockContent, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SmartBlockContentsApi - object-oriented interface
 * @export
 * @class SmartBlockContentsApi
 * @extends {BaseAPI}
 */
export class SmartBlockContentsApi extends BaseAPI {
    /**
     * 
     * @param {SmartBlockContent} smartBlockContent 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartBlockContentsApi
     */
    public smartBlockContentsCreate(smartBlockContent: SmartBlockContent, options?: AxiosRequestConfig) {
        return SmartBlockContentsApiFp(this.configuration).smartBlockContentsCreate(smartBlockContent, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this smart block content.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartBlockContentsApi
     */
    public smartBlockContentsDestroy(id: number, options?: AxiosRequestConfig) {
        return SmartBlockContentsApiFp(this.configuration).smartBlockContentsDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartBlockContentsApi
     */
    public smartBlockContentsList(options?: AxiosRequestConfig) {
        return SmartBlockContentsApiFp(this.configuration).smartBlockContentsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this smart block content.
     * @param {PatchedSmartBlockContent} [patchedSmartBlockContent] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartBlockContentsApi
     */
    public smartBlockContentsPartialUpdate(id: number, patchedSmartBlockContent?: PatchedSmartBlockContent, options?: AxiosRequestConfig) {
        return SmartBlockContentsApiFp(this.configuration).smartBlockContentsPartialUpdate(id, patchedSmartBlockContent, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this smart block content.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartBlockContentsApi
     */
    public smartBlockContentsRetrieve(id: number, options?: AxiosRequestConfig) {
        return SmartBlockContentsApiFp(this.configuration).smartBlockContentsRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this smart block content.
     * @param {SmartBlockContent} smartBlockContent 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartBlockContentsApi
     */
    public smartBlockContentsUpdate(id: number, smartBlockContent: SmartBlockContent, options?: AxiosRequestConfig) {
        return SmartBlockContentsApiFp(this.configuration).smartBlockContentsUpdate(id, smartBlockContent, options).then((request) => request(this.axios, this.basePath));
    }
}

