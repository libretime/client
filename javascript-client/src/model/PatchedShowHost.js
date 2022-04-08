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

import ApiClient from '../ApiClient';

/**
 * The PatchedShowHost model module.
 * @module model/PatchedShowHost
 * @version 2.0.0
 */
class PatchedShowHost {
    /**
     * Constructs a new <code>PatchedShowHost</code>.
     * @alias module:model/PatchedShowHost
     */
    constructor() { 
        
        PatchedShowHost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedShowHost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedShowHost} obj Optional instance to populate.
     * @return {module:model/PatchedShowHost} The populated <code>PatchedShowHost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedShowHost();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('show')) {
                obj['show'] = ApiClient.convertToType(data['show'], 'String');
            }
            if (data.hasOwnProperty('subjs')) {
                obj['subjs'] = ApiClient.convertToType(data['subjs'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
PatchedShowHost.prototype['item_url'] = undefined;

/**
 * @member {String} show
 */
PatchedShowHost.prototype['show'] = undefined;

/**
 * @member {String} subjs
 */
PatchedShowHost.prototype['subjs'] = undefined;






export default PatchedShowHost;
