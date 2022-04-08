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
 * The Schedule model module.
 * @module model/Schedule
 * @version 2.0.0
 */
class Schedule {
    /**
     * Constructs a new <code>Schedule</code>.
     * @alias module:model/Schedule
     * @param itemUrl {String} 
     * @param id {Number} 
     * @param starts {Date} 
     * @param ends {Date} 
     * @param fileId {Number} 
     * @param streamId {Number} 
     * @param cueIn {String} 
     * @param cueOut {String} 
     * @param instance {String} 
     * @param instanceId {Number} 
     * @param playoutStatus {Number} 
     * @param broadcasted {Number} 
     * @param position {Number} 
     */
    constructor(itemUrl, id, starts, ends, fileId, streamId, cueIn, cueOut, instance, instanceId, playoutStatus, broadcasted, position) { 
        
        Schedule.initialize(this, itemUrl, id, starts, ends, fileId, streamId, cueIn, cueOut, instance, instanceId, playoutStatus, broadcasted, position);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemUrl, id, starts, ends, fileId, streamId, cueIn, cueOut, instance, instanceId, playoutStatus, broadcasted, position) { 
        obj['item_url'] = itemUrl;
        obj['id'] = id;
        obj['starts'] = starts;
        obj['ends'] = ends;
        obj['file_id'] = fileId;
        obj['stream_id'] = streamId;
        obj['cue_in'] = cueIn;
        obj['cue_out'] = cueOut;
        obj['instance'] = instance;
        obj['instance_id'] = instanceId;
        obj['playout_status'] = playoutStatus;
        obj['broadcasted'] = broadcasted;
        obj['position'] = position;
    }

    /**
     * Constructs a <code>Schedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Schedule} obj Optional instance to populate.
     * @return {module:model/Schedule} The populated <code>Schedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Schedule();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('starts')) {
                obj['starts'] = ApiClient.convertToType(data['starts'], 'Date');
            }
            if (data.hasOwnProperty('ends')) {
                obj['ends'] = ApiClient.convertToType(data['ends'], 'Date');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('file_id')) {
                obj['file_id'] = ApiClient.convertToType(data['file_id'], 'Number');
            }
            if (data.hasOwnProperty('stream')) {
                obj['stream'] = ApiClient.convertToType(data['stream'], 'String');
            }
            if (data.hasOwnProperty('stream_id')) {
                obj['stream_id'] = ApiClient.convertToType(data['stream_id'], 'Number');
            }
            if (data.hasOwnProperty('clip_length')) {
                obj['clip_length'] = ApiClient.convertToType(data['clip_length'], 'String');
            }
            if (data.hasOwnProperty('fade_in')) {
                obj['fade_in'] = ApiClient.convertToType(data['fade_in'], 'String');
            }
            if (data.hasOwnProperty('fade_out')) {
                obj['fade_out'] = ApiClient.convertToType(data['fade_out'], 'String');
            }
            if (data.hasOwnProperty('cue_in')) {
                obj['cue_in'] = ApiClient.convertToType(data['cue_in'], 'String');
            }
            if (data.hasOwnProperty('cue_out')) {
                obj['cue_out'] = ApiClient.convertToType(data['cue_out'], 'String');
            }
            if (data.hasOwnProperty('media_item_played')) {
                obj['media_item_played'] = ApiClient.convertToType(data['media_item_played'], 'Boolean');
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
            if (data.hasOwnProperty('instance_id')) {
                obj['instance_id'] = ApiClient.convertToType(data['instance_id'], 'Number');
            }
            if (data.hasOwnProperty('playout_status')) {
                obj['playout_status'] = ApiClient.convertToType(data['playout_status'], 'Number');
            }
            if (data.hasOwnProperty('broadcasted')) {
                obj['broadcasted'] = ApiClient.convertToType(data['broadcasted'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
Schedule.prototype['item_url'] = undefined;

/**
 * @member {Number} id
 */
Schedule.prototype['id'] = undefined;

/**
 * @member {Date} starts
 */
Schedule.prototype['starts'] = undefined;

/**
 * @member {Date} ends
 */
Schedule.prototype['ends'] = undefined;

/**
 * @member {String} file
 */
Schedule.prototype['file'] = undefined;

/**
 * @member {Number} file_id
 */
Schedule.prototype['file_id'] = undefined;

/**
 * @member {String} stream
 */
Schedule.prototype['stream'] = undefined;

/**
 * @member {Number} stream_id
 */
Schedule.prototype['stream_id'] = undefined;

/**
 * @member {String} clip_length
 */
Schedule.prototype['clip_length'] = undefined;

/**
 * @member {String} fade_in
 */
Schedule.prototype['fade_in'] = undefined;

/**
 * @member {String} fade_out
 */
Schedule.prototype['fade_out'] = undefined;

/**
 * @member {String} cue_in
 */
Schedule.prototype['cue_in'] = undefined;

/**
 * @member {String} cue_out
 */
Schedule.prototype['cue_out'] = undefined;

/**
 * @member {Boolean} media_item_played
 */
Schedule.prototype['media_item_played'] = undefined;

/**
 * @member {String} instance
 */
Schedule.prototype['instance'] = undefined;

/**
 * @member {Number} instance_id
 */
Schedule.prototype['instance_id'] = undefined;

/**
 * @member {Number} playout_status
 */
Schedule.prototype['playout_status'] = undefined;

/**
 * @member {Number} broadcasted
 */
Schedule.prototype['broadcasted'] = undefined;

/**
 * @member {Number} position
 */
Schedule.prototype['position'] = undefined;






export default Schedule;
