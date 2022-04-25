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
import { PatchedStreamSetting } from '../model';
// @ts-ignore
import { StreamSetting } from '../model';
/**
 * StreamSettingsApi - axios parameter creator
 * @export
 */
export const StreamSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {StreamSetting} streamSetting 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsCreate: async (streamSetting: StreamSetting, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'streamSetting' is not null or undefined
            assertParamExists('streamSettingsCreate', 'streamSetting', streamSetting)
            const localVarPath = `/api/v2/stream-settings/`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(streamSetting, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsDestroy: async (keyname: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyname' is not null or undefined
            assertParamExists('streamSettingsDestroy', 'keyname', keyname)
            const localVarPath = `/api/v2/stream-settings/{keyname}/`
                .replace(`{${"keyname"}}`, encodeURIComponent(String(keyname)));
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
        streamSettingsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/stream-settings/`;
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
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {PatchedStreamSetting} [patchedStreamSetting] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsPartialUpdate: async (keyname: string, patchedStreamSetting?: PatchedStreamSetting, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyname' is not null or undefined
            assertParamExists('streamSettingsPartialUpdate', 'keyname', keyname)
            const localVarPath = `/api/v2/stream-settings/{keyname}/`
                .replace(`{${"keyname"}}`, encodeURIComponent(String(keyname)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedStreamSetting, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsRetrieve: async (keyname: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyname' is not null or undefined
            assertParamExists('streamSettingsRetrieve', 'keyname', keyname)
            const localVarPath = `/api/v2/stream-settings/{keyname}/`
                .replace(`{${"keyname"}}`, encodeURIComponent(String(keyname)));
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
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {StreamSetting} streamSetting 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsUpdate: async (keyname: string, streamSetting: StreamSetting, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyname' is not null or undefined
            assertParamExists('streamSettingsUpdate', 'keyname', keyname)
            // verify required parameter 'streamSetting' is not null or undefined
            assertParamExists('streamSettingsUpdate', 'streamSetting', streamSetting)
            const localVarPath = `/api/v2/stream-settings/{keyname}/`
                .replace(`{${"keyname"}}`, encodeURIComponent(String(keyname)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(streamSetting, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StreamSettingsApi - functional programming interface
 * @export
 */
export const StreamSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StreamSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {StreamSetting} streamSetting 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSettingsCreate(streamSetting: StreamSetting, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StreamSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamSettingsCreate(streamSetting, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSettingsDestroy(keyname: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamSettingsDestroy(keyname, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSettingsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StreamSetting>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamSettingsList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {PatchedStreamSetting} [patchedStreamSetting] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSettingsPartialUpdate(keyname: string, patchedStreamSetting?: PatchedStreamSetting, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StreamSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamSettingsPartialUpdate(keyname, patchedStreamSetting, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSettingsRetrieve(keyname: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StreamSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamSettingsRetrieve(keyname, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {StreamSetting} streamSetting 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSettingsUpdate(keyname: string, streamSetting: StreamSetting, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StreamSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamSettingsUpdate(keyname, streamSetting, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StreamSettingsApi - factory interface
 * @export
 */
export const StreamSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StreamSettingsApiFp(configuration)
    return {
        /**
         * 
         * @param {StreamSetting} streamSetting 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsCreate(streamSetting: StreamSetting, options?: any): AxiosPromise<StreamSetting> {
            return localVarFp.streamSettingsCreate(streamSetting, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsDestroy(keyname: string, options?: any): AxiosPromise<void> {
            return localVarFp.streamSettingsDestroy(keyname, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsList(options?: any): AxiosPromise<Array<StreamSetting>> {
            return localVarFp.streamSettingsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {PatchedStreamSetting} [patchedStreamSetting] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsPartialUpdate(keyname: string, patchedStreamSetting?: PatchedStreamSetting, options?: any): AxiosPromise<StreamSetting> {
            return localVarFp.streamSettingsPartialUpdate(keyname, patchedStreamSetting, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsRetrieve(keyname: string, options?: any): AxiosPromise<StreamSetting> {
            return localVarFp.streamSettingsRetrieve(keyname, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} keyname A unique value identifying this stream setting.
         * @param {StreamSetting} streamSetting 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSettingsUpdate(keyname: string, streamSetting: StreamSetting, options?: any): AxiosPromise<StreamSetting> {
            return localVarFp.streamSettingsUpdate(keyname, streamSetting, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StreamSettingsApi - object-oriented interface
 * @export
 * @class StreamSettingsApi
 * @extends {BaseAPI}
 */
export class StreamSettingsApi extends BaseAPI {
    /**
     * 
     * @param {StreamSetting} streamSetting 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSettingsApi
     */
    public streamSettingsCreate(streamSetting: StreamSetting, options?: AxiosRequestConfig) {
        return StreamSettingsApiFp(this.configuration).streamSettingsCreate(streamSetting, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} keyname A unique value identifying this stream setting.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSettingsApi
     */
    public streamSettingsDestroy(keyname: string, options?: AxiosRequestConfig) {
        return StreamSettingsApiFp(this.configuration).streamSettingsDestroy(keyname, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSettingsApi
     */
    public streamSettingsList(options?: AxiosRequestConfig) {
        return StreamSettingsApiFp(this.configuration).streamSettingsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} keyname A unique value identifying this stream setting.
     * @param {PatchedStreamSetting} [patchedStreamSetting] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSettingsApi
     */
    public streamSettingsPartialUpdate(keyname: string, patchedStreamSetting?: PatchedStreamSetting, options?: AxiosRequestConfig) {
        return StreamSettingsApiFp(this.configuration).streamSettingsPartialUpdate(keyname, patchedStreamSetting, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} keyname A unique value identifying this stream setting.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSettingsApi
     */
    public streamSettingsRetrieve(keyname: string, options?: AxiosRequestConfig) {
        return StreamSettingsApiFp(this.configuration).streamSettingsRetrieve(keyname, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} keyname A unique value identifying this stream setting.
     * @param {StreamSetting} streamSetting 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSettingsApi
     */
    public streamSettingsUpdate(keyname: string, streamSetting: StreamSetting, options?: AxiosRequestConfig) {
        return StreamSettingsApiFp(this.configuration).streamSettingsUpdate(keyname, streamSetting, options).then((request) => request(this.axios, this.basePath));
    }
}
