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
import type { PatchedServiceRegister } from '../model';
// @ts-ignore
import type { ServiceRegister } from '../model';
/**
 * ServiceRegistersApi - axios parameter creator
 * @export
 */
export const ServiceRegistersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ServiceRegister} serviceRegister 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersCreate: async (serviceRegister: ServiceRegister, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceRegister' is not null or undefined
            assertParamExists('serviceRegistersCreate', 'serviceRegister', serviceRegister)
            const localVarPath = `/api/v2/service-registers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(serviceRegister, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersDestroy: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('serviceRegistersDestroy', 'name', name)
            const localVarPath = `/api/v2/service-registers/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
        serviceRegistersList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/service-registers`;
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
         * @param {string} name A unique value identifying this service register.
         * @param {PatchedServiceRegister} [patchedServiceRegister] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersPartialUpdate: async (name: string, patchedServiceRegister?: PatchedServiceRegister, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('serviceRegistersPartialUpdate', 'name', name)
            const localVarPath = `/api/v2/service-registers/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedServiceRegister, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersRetrieve: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('serviceRegistersRetrieve', 'name', name)
            const localVarPath = `/api/v2/service-registers/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
         * @param {string} name A unique value identifying this service register.
         * @param {ServiceRegister} serviceRegister 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersUpdate: async (name: string, serviceRegister: ServiceRegister, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('serviceRegistersUpdate', 'name', name)
            // verify required parameter 'serviceRegister' is not null or undefined
            assertParamExists('serviceRegistersUpdate', 'serviceRegister', serviceRegister)
            const localVarPath = `/api/v2/service-registers/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(serviceRegister, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ServiceRegistersApi - functional programming interface
 * @export
 */
export const ServiceRegistersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ServiceRegistersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ServiceRegister} serviceRegister 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serviceRegistersCreate(serviceRegister: ServiceRegister, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceRegister>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serviceRegistersCreate(serviceRegister, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ServiceRegistersApi.serviceRegistersCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serviceRegistersDestroy(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serviceRegistersDestroy(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ServiceRegistersApi.serviceRegistersDestroy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serviceRegistersList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ServiceRegister>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serviceRegistersList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ServiceRegistersApi.serviceRegistersList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {PatchedServiceRegister} [patchedServiceRegister] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serviceRegistersPartialUpdate(name: string, patchedServiceRegister?: PatchedServiceRegister, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceRegister>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serviceRegistersPartialUpdate(name, patchedServiceRegister, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ServiceRegistersApi.serviceRegistersPartialUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serviceRegistersRetrieve(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceRegister>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serviceRegistersRetrieve(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ServiceRegistersApi.serviceRegistersRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {ServiceRegister} serviceRegister 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serviceRegistersUpdate(name: string, serviceRegister: ServiceRegister, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceRegister>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serviceRegistersUpdate(name, serviceRegister, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ServiceRegistersApi.serviceRegistersUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ServiceRegistersApi - factory interface
 * @export
 */
export const ServiceRegistersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ServiceRegistersApiFp(configuration)
    return {
        /**
         * 
         * @param {ServiceRegister} serviceRegister 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersCreate(serviceRegister: ServiceRegister, options?: RawAxiosRequestConfig): AxiosPromise<ServiceRegister> {
            return localVarFp.serviceRegistersCreate(serviceRegister, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersDestroy(name: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.serviceRegistersDestroy(name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersList(options?: RawAxiosRequestConfig): AxiosPromise<Array<ServiceRegister>> {
            return localVarFp.serviceRegistersList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {PatchedServiceRegister} [patchedServiceRegister] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersPartialUpdate(name: string, patchedServiceRegister?: PatchedServiceRegister, options?: RawAxiosRequestConfig): AxiosPromise<ServiceRegister> {
            return localVarFp.serviceRegistersPartialUpdate(name, patchedServiceRegister, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersRetrieve(name: string, options?: RawAxiosRequestConfig): AxiosPromise<ServiceRegister> {
            return localVarFp.serviceRegistersRetrieve(name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} name A unique value identifying this service register.
         * @param {ServiceRegister} serviceRegister 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serviceRegistersUpdate(name: string, serviceRegister: ServiceRegister, options?: RawAxiosRequestConfig): AxiosPromise<ServiceRegister> {
            return localVarFp.serviceRegistersUpdate(name, serviceRegister, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ServiceRegistersApi - object-oriented interface
 * @export
 * @class ServiceRegistersApi
 * @extends {BaseAPI}
 */
export class ServiceRegistersApi extends BaseAPI {
    /**
     * 
     * @param {ServiceRegister} serviceRegister 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceRegistersApi
     */
    public serviceRegistersCreate(serviceRegister: ServiceRegister, options?: RawAxiosRequestConfig) {
        return ServiceRegistersApiFp(this.configuration).serviceRegistersCreate(serviceRegister, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} name A unique value identifying this service register.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceRegistersApi
     */
    public serviceRegistersDestroy(name: string, options?: RawAxiosRequestConfig) {
        return ServiceRegistersApiFp(this.configuration).serviceRegistersDestroy(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceRegistersApi
     */
    public serviceRegistersList(options?: RawAxiosRequestConfig) {
        return ServiceRegistersApiFp(this.configuration).serviceRegistersList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} name A unique value identifying this service register.
     * @param {PatchedServiceRegister} [patchedServiceRegister] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceRegistersApi
     */
    public serviceRegistersPartialUpdate(name: string, patchedServiceRegister?: PatchedServiceRegister, options?: RawAxiosRequestConfig) {
        return ServiceRegistersApiFp(this.configuration).serviceRegistersPartialUpdate(name, patchedServiceRegister, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} name A unique value identifying this service register.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceRegistersApi
     */
    public serviceRegistersRetrieve(name: string, options?: RawAxiosRequestConfig) {
        return ServiceRegistersApiFp(this.configuration).serviceRegistersRetrieve(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} name A unique value identifying this service register.
     * @param {ServiceRegister} serviceRegister 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServiceRegistersApi
     */
    public serviceRegistersUpdate(name: string, serviceRegister: ServiceRegister, options?: RawAxiosRequestConfig) {
        return ServiceRegistersApiFp(this.configuration).serviceRegistersUpdate(name, serviceRegister, options).then((request) => request(this.axios, this.basePath));
    }
}

