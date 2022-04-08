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
 *
 */


import ApiClient from "../ApiClient";
import PatchedShowInstance from '../model/PatchedShowInstance';
import ShowInstance from '../model/ShowInstance';

/**
* ShowInstances service.
* @module api/ShowInstancesApi
* @version 2.0.0
*/
export default class ShowInstancesApi {

    /**
    * Constructs a new ShowInstancesApi. 
    * @alias module:api/ShowInstancesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the showInstancesCreate operation.
     * @callback module:api/ShowInstancesApi~showInstancesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShowInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ShowInstance} showInstance 
     * @param {module:api/ShowInstancesApi~showInstancesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShowInstance}
     */
    showInstancesCreate(showInstance, callback) {
      let postBody = showInstance;
      // verify the required parameter 'showInstance' is set
      if (showInstance === undefined || showInstance === null) {
        throw new Error("Missing the required parameter 'showInstance' when calling showInstancesCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ShowInstance;
      return this.apiClient.callApi(
        '/api/v2/show-instances/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showInstancesDestroy operation.
     * @callback module:api/ShowInstancesApi~showInstancesDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this show instance.
     * @param {module:api/ShowInstancesApi~showInstancesDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    showInstancesDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling showInstancesDestroy");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/show-instances/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showInstancesList operation.
     * @callback module:api/ShowInstancesApi~showInstancesListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ShowInstance>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ShowInstancesApi~showInstancesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ShowInstance>}
     */
    showInstancesList(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ShowInstance];
      return this.apiClient.callApi(
        '/api/v2/show-instances/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showInstancesPartialUpdate operation.
     * @callback module:api/ShowInstancesApi~showInstancesPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShowInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this show instance.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedShowInstance} opts.patchedShowInstance 
     * @param {module:api/ShowInstancesApi~showInstancesPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShowInstance}
     */
    showInstancesPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedShowInstance'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling showInstancesPartialUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ShowInstance;
      return this.apiClient.callApi(
        '/api/v2/show-instances/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showInstancesRetrieve operation.
     * @callback module:api/ShowInstancesApi~showInstancesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShowInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this show instance.
     * @param {module:api/ShowInstancesApi~showInstancesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShowInstance}
     */
    showInstancesRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling showInstancesRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ShowInstance;
      return this.apiClient.callApi(
        '/api/v2/show-instances/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showInstancesUpdate operation.
     * @callback module:api/ShowInstancesApi~showInstancesUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShowInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this show instance.
     * @param {module:model/ShowInstance} showInstance 
     * @param {module:api/ShowInstancesApi~showInstancesUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShowInstance}
     */
    showInstancesUpdate(id, showInstance, callback) {
      let postBody = showInstance;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling showInstancesUpdate");
      }
      // verify the required parameter 'showInstance' is set
      if (showInstance === undefined || showInstance === null) {
        throw new Error("Missing the required parameter 'showInstance' when calling showInstancesUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ShowInstance;
      return this.apiClient.callApi(
        '/api/v2/show-instances/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}