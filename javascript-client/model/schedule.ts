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


// May contain unused imports in some cases
// @ts-ignore
import type { PositionStatusEnum } from './position-status-enum';

/**
 * 
 * @export
 * @interface Schedule
 */
export interface Schedule {
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'cue_out': string;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'ends_at': string;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'starts_at': string;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'length'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'fade_in'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'fade_out'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'cue_in': string;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'position': number;
    /**
     * 
     * @type {PositionStatusEnum}
     * @memberof Schedule
     */
    'position_status'?: PositionStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'broadcasted': number;
    /**
     * 
     * @type {boolean}
     * @memberof Schedule
     */
    'played'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'instance': number;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'file'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'stream'?: number | null;
}



