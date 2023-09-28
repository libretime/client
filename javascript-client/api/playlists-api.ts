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
import { PatchedPlaylist } from '../model';
// @ts-ignore
import { Playlist } from '../model';
/**
 * PlaylistsApi - axios parameter creator
 * @export
 */
export const PlaylistsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Playlist} playlist 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsCreate: async (playlist: Playlist, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlist' is not null or undefined
            assertParamExists('playlistsCreate', 'playlist', playlist)
            const localVarPath = `/api/v2/playlists`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(playlist, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('playlistsDestroy', 'id', id)
            const localVarPath = `/api/v2/playlists/{id}`
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
        playlistsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/playlists`;
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
         * @param {number} id A unique integer value identifying this playlist.
         * @param {PatchedPlaylist} [patchedPlaylist] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsPartialUpdate: async (id: number, patchedPlaylist?: PatchedPlaylist, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('playlistsPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/playlists/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedPlaylist, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('playlistsRetrieve', 'id', id)
            const localVarPath = `/api/v2/playlists/{id}`
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
         * @param {number} id A unique integer value identifying this playlist.
         * @param {Playlist} playlist 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsUpdate: async (id: number, playlist: Playlist, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('playlistsUpdate', 'id', id)
            // verify required parameter 'playlist' is not null or undefined
            assertParamExists('playlistsUpdate', 'playlist', playlist)
            const localVarPath = `/api/v2/playlists/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(playlist, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlaylistsApi - functional programming interface
 * @export
 */
export const PlaylistsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlaylistsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Playlist} playlist 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playlistsCreate(playlist: Playlist, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Playlist>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playlistsCreate(playlist, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playlistsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playlistsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playlistsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Playlist>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playlistsList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {PatchedPlaylist} [patchedPlaylist] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playlistsPartialUpdate(id: number, patchedPlaylist?: PatchedPlaylist, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Playlist>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playlistsPartialUpdate(id, patchedPlaylist, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playlistsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Playlist>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playlistsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {Playlist} playlist 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playlistsUpdate(id: number, playlist: Playlist, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Playlist>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playlistsUpdate(id, playlist, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlaylistsApi - factory interface
 * @export
 */
export const PlaylistsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlaylistsApiFp(configuration)
    return {
        /**
         * 
         * @param {Playlist} playlist 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsCreate(playlist: Playlist, options?: any): AxiosPromise<Playlist> {
            return localVarFp.playlistsCreate(playlist, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.playlistsDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsList(options?: any): AxiosPromise<Array<Playlist>> {
            return localVarFp.playlistsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {PatchedPlaylist} [patchedPlaylist] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsPartialUpdate(id: number, patchedPlaylist?: PatchedPlaylist, options?: any): AxiosPromise<Playlist> {
            return localVarFp.playlistsPartialUpdate(id, patchedPlaylist, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsRetrieve(id: number, options?: any): AxiosPromise<Playlist> {
            return localVarFp.playlistsRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this playlist.
         * @param {Playlist} playlist 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlistsUpdate(id: number, playlist: Playlist, options?: any): AxiosPromise<Playlist> {
            return localVarFp.playlistsUpdate(id, playlist, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlaylistsApi - object-oriented interface
 * @export
 * @class PlaylistsApi
 * @extends {BaseAPI}
 */
export class PlaylistsApi extends BaseAPI {
    /**
     * 
     * @param {Playlist} playlist 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public playlistsCreate(playlist: Playlist, options?: AxiosRequestConfig) {
        return PlaylistsApiFp(this.configuration).playlistsCreate(playlist, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this playlist.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public playlistsDestroy(id: number, options?: AxiosRequestConfig) {
        return PlaylistsApiFp(this.configuration).playlistsDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public playlistsList(options?: AxiosRequestConfig) {
        return PlaylistsApiFp(this.configuration).playlistsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this playlist.
     * @param {PatchedPlaylist} [patchedPlaylist] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public playlistsPartialUpdate(id: number, patchedPlaylist?: PatchedPlaylist, options?: AxiosRequestConfig) {
        return PlaylistsApiFp(this.configuration).playlistsPartialUpdate(id, patchedPlaylist, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this playlist.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public playlistsRetrieve(id: number, options?: AxiosRequestConfig) {
        return PlaylistsApiFp(this.configuration).playlistsRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this playlist.
     * @param {Playlist} playlist 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public playlistsUpdate(id: number, playlist: Playlist, options?: AxiosRequestConfig) {
        return PlaylistsApiFp(this.configuration).playlistsUpdate(id, playlist, options).then((request) => request(this.axios, this.basePath));
    }
}

