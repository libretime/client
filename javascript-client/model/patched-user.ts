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
import type { RoleEnum } from './role-enum';

/**
 * 
 * @export
 * @interface PatchedUser
 */
export interface PatchedUser {
    /**
     * 
     * @type {number}
     * @memberof PatchedUser
     */
    'id'?: number;
    /**
     * 
     * @type {RoleEnum}
     * @memberof PatchedUser
     */
    'role'?: RoleEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'last_name'?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedUser
     */
    'login_attempts'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'last_login'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'last_failed_login'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'skype'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'jabber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    'phone'?: string | null;
}



