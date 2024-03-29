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



/**
 * 
 * @export
 * @interface Webstream
 */
export interface Webstream {
    /**
     * 
     * @type {number}
     * @memberof Webstream
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Webstream
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof Webstream
     */
    'updated_at': string;
    /**
     * 
     * @type {string}
     * @memberof Webstream
     */
    'last_played_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Webstream
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Webstream
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof Webstream
     */
    'url': string;
    /**
     * 
     * @type {string}
     * @memberof Webstream
     */
    'length': string;
    /**
     * 
     * @type {string}
     * @memberof Webstream
     */
    'mime'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Webstream
     */
    'owner'?: number | null;
}

