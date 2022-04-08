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
 * The ShowDays model module.
 * @module model/ShowDays
 * @version 2.0.0
 */
class ShowDays {
    /**
     * Constructs a new <code>ShowDays</code>.
     * @alias module:model/ShowDays
     * @param itemUrl {String} 
     * @param firstShow {Date} 
     * @param startTime {String} 
     * @param timezone {String} 
     * @param duration {String} 
     * @param repeatType {Number} 
     * @param show {String} 
     */
    constructor(itemUrl, firstShow, startTime, timezone, duration, repeatType, show) { 
        
        ShowDays.initialize(this, itemUrl, firstShow, startTime, timezone, duration, repeatType, show);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemUrl, firstShow, startTime, timezone, duration, repeatType, show) { 
        obj['item_url'] = itemUrl;
        obj['first_show'] = firstShow;
        obj['start_time'] = startTime;
        obj['timezone'] = timezone;
        obj['duration'] = duration;
        obj['repeat_type'] = repeatType;
        obj['show'] = show;
    }

    /**
     * Constructs a <code>ShowDays</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowDays} obj Optional instance to populate.
     * @return {module:model/ShowDays} The populated <code>ShowDays</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShowDays();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('first_show')) {
                obj['first_show'] = ApiClient.convertToType(data['first_show'], 'Date');
            }
            if (data.hasOwnProperty('last_show')) {
                obj['last_show'] = ApiClient.convertToType(data['last_show'], 'Date');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
            if (data.hasOwnProperty('repeat_type')) {
                obj['repeat_type'] = ApiClient.convertToType(data['repeat_type'], 'Number');
            }
            if (data.hasOwnProperty('next_pop_date')) {
                obj['next_pop_date'] = ApiClient.convertToType(data['next_pop_date'], 'Date');
            }
            if (data.hasOwnProperty('record')) {
                obj['record'] = ApiClient.convertToType(data['record'], 'Number');
            }
            if (data.hasOwnProperty('show')) {
                obj['show'] = ApiClient.convertToType(data['show'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
ShowDays.prototype['item_url'] = undefined;

/**
 * @member {Date} first_show
 */
ShowDays.prototype['first_show'] = undefined;

/**
 * @member {Date} last_show
 */
ShowDays.prototype['last_show'] = undefined;

/**
 * @member {String} start_time
 */
ShowDays.prototype['start_time'] = undefined;

/**
 * @member {String} timezone
 */
ShowDays.prototype['timezone'] = undefined;

/**
 * @member {String} duration
 */
ShowDays.prototype['duration'] = undefined;

/**
 * @member {Number} day
 */
ShowDays.prototype['day'] = undefined;

/**
 * @member {Number} repeat_type
 */
ShowDays.prototype['repeat_type'] = undefined;

/**
 * @member {Date} next_pop_date
 */
ShowDays.prototype['next_pop_date'] = undefined;

/**
 * @member {Number} record
 */
ShowDays.prototype['record'] = undefined;

/**
 * @member {String} show
 */
ShowDays.prototype['show'] = undefined;






export default ShowDays;
