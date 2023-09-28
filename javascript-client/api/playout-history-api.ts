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
import { PatchedPlayoutHistory } from '../model';
// @ts-ignore
import { PlayoutHistory } from '../model';
/**
 * PlayoutHistoryApi - axios parameter creator
 * @export
 */
export const PlayoutHistoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {PlayoutHistory} playoutHistory 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryCreate: async (playoutHistory: PlayoutHistory, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'playoutHistory' is not null or undefined
            assertParamExists('playoutHistoryCreate', 'playoutHistory', playoutHistory)
            const localVarPath = `/api/v2/playout-history`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(playoutHistory, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('playoutHistoryDestroy', 'id', id)
            const localVarPath = `/api/v2/playout-history/{id}`
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
        playoutHistoryList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/playout-history`;
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
         * @param {number} id A unique integer value identifying this playout history.
         * @param {PatchedPlayoutHistory} [patchedPlayoutHistory] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryPartialUpdate: async (id: number, patchedPlayoutHistory?: PatchedPlayoutHistory, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('playoutHistoryPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/playout-history/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedPlayoutHistory, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('playoutHistoryRetrieve', 'id', id)
            const localVarPath = `/api/v2/playout-history/{id}`
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
         * @param {number} id A unique integer value identifying this playout history.
         * @param {PlayoutHistory} playoutHistory 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryUpdate: async (id: number, playoutHistory: PlayoutHistory, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('playoutHistoryUpdate', 'id', id)
            // verify required parameter 'playoutHistory' is not null or undefined
            assertParamExists('playoutHistoryUpdate', 'playoutHistory', playoutHistory)
            const localVarPath = `/api/v2/playout-history/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(playoutHistory, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlayoutHistoryApi - functional programming interface
 * @export
 */
export const PlayoutHistoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlayoutHistoryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {PlayoutHistory} playoutHistory 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playoutHistoryCreate(playoutHistory: PlayoutHistory, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayoutHistory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playoutHistoryCreate(playoutHistory, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playoutHistoryDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playoutHistoryDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playoutHistoryList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PlayoutHistory>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playoutHistoryList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {PatchedPlayoutHistory} [patchedPlayoutHistory] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playoutHistoryPartialUpdate(id: number, patchedPlayoutHistory?: PatchedPlayoutHistory, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayoutHistory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playoutHistoryPartialUpdate(id, patchedPlayoutHistory, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playoutHistoryRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayoutHistory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playoutHistoryRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {PlayoutHistory} playoutHistory 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playoutHistoryUpdate(id: number, playoutHistory: PlayoutHistory, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayoutHistory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playoutHistoryUpdate(id, playoutHistory, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlayoutHistoryApi - factory interface
 * @export
 */
export const PlayoutHistoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlayoutHistoryApiFp(configuration)
    return {
        /**
         * 
         * @param {PlayoutHistory} playoutHistory 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryCreate(playoutHistory: PlayoutHistory, options?: any): AxiosPromise<PlayoutHistory> {
            return localVarFp.playoutHistoryCreate(playoutHistory, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.playoutHistoryDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryList(options?: any): AxiosPromise<Array<PlayoutHistory>> {
            return localVarFp.playoutHistoryList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {PatchedPlayoutHistory} [patchedPlayoutHistory] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryPartialUpdate(id: number, patchedPlayoutHistory?: PatchedPlayoutHistory, options?: any): AxiosPromise<PlayoutHistory> {
            return localVarFp.playoutHistoryPartialUpdate(id, patchedPlayoutHistory, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryRetrieve(id: number, options?: any): AxiosPromise<PlayoutHistory> {
            return localVarFp.playoutHistoryRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playout history.
         * @param {PlayoutHistory} playoutHistory 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playoutHistoryUpdate(id: number, playoutHistory: PlayoutHistory, options?: any): AxiosPromise<PlayoutHistory> {
            return localVarFp.playoutHistoryUpdate(id, playoutHistory, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlayoutHistoryApi - object-oriented interface
 * @export
 * @class PlayoutHistoryApi
 * @extends {BaseAPI}
 */
export class PlayoutHistoryApi extends BaseAPI {
    /**
     * 
     * @param {PlayoutHistory} playoutHistory 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayoutHistoryApi
     */
    public playoutHistoryCreate(playoutHistory: PlayoutHistory, options?: AxiosRequestConfig) {
        return PlayoutHistoryApiFp(this.configuration).playoutHistoryCreate(playoutHistory, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this playout history.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayoutHistoryApi
     */
    public playoutHistoryDestroy(id: number, options?: AxiosRequestConfig) {
        return PlayoutHistoryApiFp(this.configuration).playoutHistoryDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayoutHistoryApi
     */
    public playoutHistoryList(options?: AxiosRequestConfig) {
        return PlayoutHistoryApiFp(this.configuration).playoutHistoryList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this playout history.
     * @param {PatchedPlayoutHistory} [patchedPlayoutHistory] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayoutHistoryApi
     */
    public playoutHistoryPartialUpdate(id: number, patchedPlayoutHistory?: PatchedPlayoutHistory, options?: AxiosRequestConfig) {
        return PlayoutHistoryApiFp(this.configuration).playoutHistoryPartialUpdate(id, patchedPlayoutHistory, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this playout history.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayoutHistoryApi
     */
    public playoutHistoryRetrieve(id: number, options?: AxiosRequestConfig) {
        return PlayoutHistoryApiFp(this.configuration).playoutHistoryRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this playout history.
     * @param {PlayoutHistory} playoutHistory 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayoutHistoryApi
     */
    public playoutHistoryUpdate(id: number, playoutHistory: PlayoutHistory, options?: AxiosRequestConfig) {
        return PlayoutHistoryApiFp(this.configuration).playoutHistoryUpdate(id, playoutHistory, options).then((request) => request(this.axios, this.basePath));
    }
}

