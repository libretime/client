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
 * @interface SmartBlockCriteria
 */
export interface SmartBlockCriteria {
    /**
     * 
     * @type {number}
     * @memberof SmartBlockCriteria
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof SmartBlockCriteria
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SmartBlockCriteria
     */
    'criteria': string;
    /**
     * 
     * @type {string}
     * @memberof SmartBlockCriteria
     */
    'condition': string;
    /**
     * 
     * @type {string}
     * @memberof SmartBlockCriteria
     */
    'value': string;
    /**
     * 
     * @type {string}
     * @memberof SmartBlockCriteria
     */
    'extra'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SmartBlockCriteria
     */
    'block': number;
}

