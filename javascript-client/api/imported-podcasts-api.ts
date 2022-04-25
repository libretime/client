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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ImportedPodcast } from '../model';
// @ts-ignore
import { PatchedImportedPodcast } from '../model';
/**
 * ImportedPodcastsApi - axios parameter creator
 * @export
 */
export const ImportedPodcastsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ImportedPodcast} importedPodcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsCreate: async (importedPodcast: ImportedPodcast, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'importedPodcast' is not null or undefined
            assertParamExists('importedPodcastsCreate', 'importedPodcast', importedPodcast)
            const localVarPath = `/api/v2/imported-podcasts/`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(importedPodcast, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('importedPodcastsDestroy', 'id', id)
            const localVarPath = `/api/v2/imported-podcasts/{id}/`
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
        importedPodcastsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/imported-podcasts/`;
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
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {PatchedImportedPodcast} [patchedImportedPodcast] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsPartialUpdate: async (id: number, patchedImportedPodcast?: PatchedImportedPodcast, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('importedPodcastsPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/imported-podcasts/{id}/`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedImportedPodcast, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('importedPodcastsRetrieve', 'id', id)
            const localVarPath = `/api/v2/imported-podcasts/{id}/`
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
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {ImportedPodcast} importedPodcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsUpdate: async (id: number, importedPodcast: ImportedPodcast, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('importedPodcastsUpdate', 'id', id)
            // verify required parameter 'importedPodcast' is not null or undefined
            assertParamExists('importedPodcastsUpdate', 'importedPodcast', importedPodcast)
            const localVarPath = `/api/v2/imported-podcasts/{id}/`
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
            localVarRequestOptions.data = serializeDataIfNeeded(importedPodcast, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ImportedPodcastsApi - functional programming interface
 * @export
 */
export const ImportedPodcastsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ImportedPodcastsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ImportedPodcast} importedPodcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importedPodcastsCreate(importedPodcast: ImportedPodcast, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ImportedPodcast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importedPodcastsCreate(importedPodcast, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importedPodcastsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importedPodcastsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importedPodcastsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImportedPodcast>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importedPodcastsList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {PatchedImportedPodcast} [patchedImportedPodcast] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importedPodcastsPartialUpdate(id: number, patchedImportedPodcast?: PatchedImportedPodcast, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ImportedPodcast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importedPodcastsPartialUpdate(id, patchedImportedPodcast, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importedPodcastsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ImportedPodcast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importedPodcastsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {ImportedPodcast} importedPodcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importedPodcastsUpdate(id: number, importedPodcast: ImportedPodcast, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ImportedPodcast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importedPodcastsUpdate(id, importedPodcast, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ImportedPodcastsApi - factory interface
 * @export
 */
export const ImportedPodcastsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ImportedPodcastsApiFp(configuration)
    return {
        /**
         * 
         * @param {ImportedPodcast} importedPodcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsCreate(importedPodcast: ImportedPodcast, options?: any): AxiosPromise<ImportedPodcast> {
            return localVarFp.importedPodcastsCreate(importedPodcast, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.importedPodcastsDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsList(options?: any): AxiosPromise<Array<ImportedPodcast>> {
            return localVarFp.importedPodcastsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {PatchedImportedPodcast} [patchedImportedPodcast] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsPartialUpdate(id: number, patchedImportedPodcast?: PatchedImportedPodcast, options?: any): AxiosPromise<ImportedPodcast> {
            return localVarFp.importedPodcastsPartialUpdate(id, patchedImportedPodcast, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsRetrieve(id: number, options?: any): AxiosPromise<ImportedPodcast> {
            return localVarFp.importedPodcastsRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this imported podcast.
         * @param {ImportedPodcast} importedPodcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importedPodcastsUpdate(id: number, importedPodcast: ImportedPodcast, options?: any): AxiosPromise<ImportedPodcast> {
            return localVarFp.importedPodcastsUpdate(id, importedPodcast, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ImportedPodcastsApi - object-oriented interface
 * @export
 * @class ImportedPodcastsApi
 * @extends {BaseAPI}
 */
export class ImportedPodcastsApi extends BaseAPI {
    /**
     * 
     * @param {ImportedPodcast} importedPodcast 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportedPodcastsApi
     */
    public importedPodcastsCreate(importedPodcast: ImportedPodcast, options?: AxiosRequestConfig) {
        return ImportedPodcastsApiFp(this.configuration).importedPodcastsCreate(importedPodcast, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this imported podcast.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportedPodcastsApi
     */
    public importedPodcastsDestroy(id: number, options?: AxiosRequestConfig) {
        return ImportedPodcastsApiFp(this.configuration).importedPodcastsDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportedPodcastsApi
     */
    public importedPodcastsList(options?: AxiosRequestConfig) {
        return ImportedPodcastsApiFp(this.configuration).importedPodcastsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this imported podcast.
     * @param {PatchedImportedPodcast} [patchedImportedPodcast] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportedPodcastsApi
     */
    public importedPodcastsPartialUpdate(id: number, patchedImportedPodcast?: PatchedImportedPodcast, options?: AxiosRequestConfig) {
        return ImportedPodcastsApiFp(this.configuration).importedPodcastsPartialUpdate(id, patchedImportedPodcast, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this imported podcast.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportedPodcastsApi
     */
    public importedPodcastsRetrieve(id: number, options?: AxiosRequestConfig) {
        return ImportedPodcastsApiFp(this.configuration).importedPodcastsRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this imported podcast.
     * @param {ImportedPodcast} importedPodcast 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportedPodcastsApi
     */
    public importedPodcastsUpdate(id: number, importedPodcast: ImportedPodcast, options?: AxiosRequestConfig) {
        return ImportedPodcastsApiFp(this.configuration).importedPodcastsUpdate(id, importedPodcast, options).then((request) => request(this.axios, this.basePath));
    }
}
