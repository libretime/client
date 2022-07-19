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


import { PositionStatusEnum } from './position-status-enum';

/**
 * 
 * @export
 * @interface PatchedSchedule
 */
export interface PatchedSchedule {
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'item_url'?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedSchedule
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'starts_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'ends_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'instance'?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedSchedule
     */
    'instance_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'file'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedSchedule
     */
    'file_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'stream'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedSchedule
     */
    'stream_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'length'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'fade_in'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'fade_out'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'cue_in'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedSchedule
     */
    'cue_out'?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedSchedule
     */
    'position'?: number;
    /**
     * 
     * @type {PositionStatusEnum}
     * @memberof PatchedSchedule
     */
    'position_status'?: PositionStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof PatchedSchedule
     */
    'broadcasted'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedSchedule
     */
    'played'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedSchedule
     */
    'overbooked'?: boolean;
}

