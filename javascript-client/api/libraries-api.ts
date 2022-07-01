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
import { Library } from '../model';
// @ts-ignore
import { PatchedLibrary } from '../model';
/**
 * LibrariesApi - axios parameter creator
 * @export
 */
export const LibrariesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Library} library 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesCreate: async (library: Library, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'library' is not null or undefined
            assertParamExists('librariesCreate', 'library', library)
            const localVarPath = `/api/v2/libraries/`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(library, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('librariesDestroy', 'id', id)
            const localVarPath = `/api/v2/libraries/{id}/`
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
        librariesList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/libraries/`;
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
         * @param {number} id A unique integer value identifying this library.
         * @param {PatchedLibrary} [patchedLibrary] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesPartialUpdate: async (id: number, patchedLibrary?: PatchedLibrary, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('librariesPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/libraries/{id}/`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedLibrary, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('librariesRetrieve', 'id', id)
            const localVarPath = `/api/v2/libraries/{id}/`
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
         * @param {number} id A unique integer value identifying this library.
         * @param {Library} library 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesUpdate: async (id: number, library: Library, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('librariesUpdate', 'id', id)
            // verify required parameter 'library' is not null or undefined
            assertParamExists('librariesUpdate', 'library', library)
            const localVarPath = `/api/v2/libraries/{id}/`
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
            localVarRequestOptions.data = serializeDataIfNeeded(library, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LibrariesApi - functional programming interface
 * @export
 */
export const LibrariesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LibrariesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Library} library 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async librariesCreate(library: Library, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Library>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.librariesCreate(library, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async librariesDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.librariesDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async librariesList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Library>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.librariesList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {PatchedLibrary} [patchedLibrary] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async librariesPartialUpdate(id: number, patchedLibrary?: PatchedLibrary, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Library>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.librariesPartialUpdate(id, patchedLibrary, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async librariesRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Library>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.librariesRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {Library} library 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async librariesUpdate(id: number, library: Library, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Library>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.librariesUpdate(id, library, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LibrariesApi - factory interface
 * @export
 */
export const LibrariesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LibrariesApiFp(configuration)
    return {
        /**
         * 
         * @param {Library} library 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesCreate(library: Library, options?: any): AxiosPromise<Library> {
            return localVarFp.librariesCreate(library, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.librariesDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesList(options?: any): AxiosPromise<Array<Library>> {
            return localVarFp.librariesList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {PatchedLibrary} [patchedLibrary] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesPartialUpdate(id: number, patchedLibrary?: PatchedLibrary, options?: any): AxiosPromise<Library> {
            return localVarFp.librariesPartialUpdate(id, patchedLibrary, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesRetrieve(id: number, options?: any): AxiosPromise<Library> {
            return localVarFp.librariesRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this library.
         * @param {Library} library 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        librariesUpdate(id: number, library: Library, options?: any): AxiosPromise<Library> {
            return localVarFp.librariesUpdate(id, library, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LibrariesApi - object-oriented interface
 * @export
 * @class LibrariesApi
 * @extends {BaseAPI}
 */
export class LibrariesApi extends BaseAPI {
    /**
     * 
     * @param {Library} library 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibrariesApi
     */
    public librariesCreate(library: Library, options?: AxiosRequestConfig) {
        return LibrariesApiFp(this.configuration).librariesCreate(library, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this library.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibrariesApi
     */
    public librariesDestroy(id: number, options?: AxiosRequestConfig) {
        return LibrariesApiFp(this.configuration).librariesDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibrariesApi
     */
    public librariesList(options?: AxiosRequestConfig) {
        return LibrariesApiFp(this.configuration).librariesList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this library.
     * @param {PatchedLibrary} [patchedLibrary] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibrariesApi
     */
    public librariesPartialUpdate(id: number, patchedLibrary?: PatchedLibrary, options?: AxiosRequestConfig) {
        return LibrariesApiFp(this.configuration).librariesPartialUpdate(id, patchedLibrary, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this library.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibrariesApi
     */
    public librariesRetrieve(id: number, options?: AxiosRequestConfig) {
        return LibrariesApiFp(this.configuration).librariesRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this library.
     * @param {Library} library 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibrariesApi
     */
    public librariesUpdate(id: number, library: Library, options?: AxiosRequestConfig) {
        return LibrariesApiFp(this.configuration).librariesUpdate(id, library, options).then((request) => request(this.axios, this.basePath));
    }
}