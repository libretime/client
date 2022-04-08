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
import PatchedTrackType from '../model/PatchedTrackType';
import TrackType from '../model/TrackType';

/**
* TrackTypes service.
* @module api/TrackTypesApi
* @version 2.0.0
*/
export default class TrackTypesApi {

    /**
    * Constructs a new TrackTypesApi. 
    * @alias module:api/TrackTypesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the trackTypesCreate operation.
     * @callback module:api/TrackTypesApi~trackTypesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/TrackType} trackType 
     * @param {module:api/TrackTypesApi~trackTypesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackType}
     */
    trackTypesCreate(trackType, callback) {
      let postBody = trackType;
      // verify the required parameter 'trackType' is set
      if (trackType === undefined || trackType === null) {
        throw new Error("Missing the required parameter 'trackType' when calling trackTypesCreate");
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
      let returnType = TrackType;
      return this.apiClient.callApi(
        '/api/v2/track-types/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trackTypesDestroy operation.
     * @callback module:api/TrackTypesApi~trackTypesDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this track type.
     * @param {module:api/TrackTypesApi~trackTypesDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    trackTypesDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trackTypesDestroy");
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
        '/api/v2/track-types/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trackTypesList operation.
     * @callback module:api/TrackTypesApi~trackTypesListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TrackType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TrackTypesApi~trackTypesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TrackType>}
     */
    trackTypesList(callback) {
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
      let returnType = [TrackType];
      return this.apiClient.callApi(
        '/api/v2/track-types/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trackTypesPartialUpdate operation.
     * @callback module:api/TrackTypesApi~trackTypesPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this track type.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedTrackType} opts.patchedTrackType 
     * @param {module:api/TrackTypesApi~trackTypesPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackType}
     */
    trackTypesPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedTrackType'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trackTypesPartialUpdate");
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
      let returnType = TrackType;
      return this.apiClient.callApi(
        '/api/v2/track-types/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trackTypesRetrieve operation.
     * @callback module:api/TrackTypesApi~trackTypesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this track type.
     * @param {module:api/TrackTypesApi~trackTypesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackType}
     */
    trackTypesRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trackTypesRetrieve");
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
      let returnType = TrackType;
      return this.apiClient.callApi(
        '/api/v2/track-types/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trackTypesUpdate operation.
     * @callback module:api/TrackTypesApi~trackTypesUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this track type.
     * @param {module:model/TrackType} trackType 
     * @param {module:api/TrackTypesApi~trackTypesUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackType}
     */
    trackTypesUpdate(id, trackType, callback) {
      let postBody = trackType;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trackTypesUpdate");
      }
      // verify the required parameter 'trackType' is set
      if (trackType === undefined || trackType === null) {
        throw new Error("Missing the required parameter 'trackType' when calling trackTypesUpdate");
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
      let returnType = TrackType;
      return this.apiClient.callApi(
        '/api/v2/track-types/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}