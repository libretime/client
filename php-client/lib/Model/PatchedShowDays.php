<?php
/**
 * PatchedShowDays
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * LibreTime API
 *
 * Radio Broadcast & Automation Platform
 *
 * The version of the OpenAPI document: 2.0.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 6.0.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Libretime\Client\Model;

use \ArrayAccess;
use \Libretime\Client\ObjectSerializer;

/**
 * PatchedShowDays Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class PatchedShowDays implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PatchedShowDays';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'item_url' => 'string',
        'first_show_on' => '\DateTime',
        'last_show_on' => '\DateTime',
        'start_time' => 'string',
        'timezone' => 'string',
        'duration' => 'string',
        'record_enabled' => '\Libretime\Client\Model\PatchedShowDaysRecordEnabled',
        'week_day' => '\Libretime\Client\Model\PatchedShowDaysWeekDay',
        'repeat_kind' => 'RepeatKindEnum',
        'repeat_next_on' => '\DateTime',
        'show' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'item_url' => 'uri',
        'first_show_on' => 'date',
        'last_show_on' => 'date',
        'start_time' => 'time',
        'timezone' => null,
        'duration' => null,
        'record_enabled' => null,
        'week_day' => null,
        'repeat_kind' => null,
        'repeat_next_on' => 'date',
        'show' => 'uri'
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'item_url' => 'item_url',
        'first_show_on' => 'first_show_on',
        'last_show_on' => 'last_show_on',
        'start_time' => 'start_time',
        'timezone' => 'timezone',
        'duration' => 'duration',
        'record_enabled' => 'record_enabled',
        'week_day' => 'week_day',
        'repeat_kind' => 'repeat_kind',
        'repeat_next_on' => 'repeat_next_on',
        'show' => 'show'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'item_url' => 'setItemUrl',
        'first_show_on' => 'setFirstShowOn',
        'last_show_on' => 'setLastShowOn',
        'start_time' => 'setStartTime',
        'timezone' => 'setTimezone',
        'duration' => 'setDuration',
        'record_enabled' => 'setRecordEnabled',
        'week_day' => 'setWeekDay',
        'repeat_kind' => 'setRepeatKind',
        'repeat_next_on' => 'setRepeatNextOn',
        'show' => 'setShow'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'item_url' => 'getItemUrl',
        'first_show_on' => 'getFirstShowOn',
        'last_show_on' => 'getLastShowOn',
        'start_time' => 'getStartTime',
        'timezone' => 'getTimezone',
        'duration' => 'getDuration',
        'record_enabled' => 'getRecordEnabled',
        'week_day' => 'getWeekDay',
        'repeat_kind' => 'getRepeatKind',
        'repeat_next_on' => 'getRepeatNextOn',
        'show' => 'getShow'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['item_url'] = $data['item_url'] ?? null;
        $this->container['first_show_on'] = $data['first_show_on'] ?? null;
        $this->container['last_show_on'] = $data['last_show_on'] ?? null;
        $this->container['start_time'] = $data['start_time'] ?? null;
        $this->container['timezone'] = $data['timezone'] ?? null;
        $this->container['duration'] = $data['duration'] ?? null;
        $this->container['record_enabled'] = $data['record_enabled'] ?? null;
        $this->container['week_day'] = $data['week_day'] ?? null;
        $this->container['repeat_kind'] = $data['repeat_kind'] ?? null;
        $this->container['repeat_next_on'] = $data['repeat_next_on'] ?? null;
        $this->container['show'] = $data['show'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['timezone']) && (mb_strlen($this->container['timezone']) > 1024)) {
            $invalidProperties[] = "invalid value for 'timezone', the character length must be smaller than or equal to 1024.";
        }

        if (!is_null($this->container['duration']) && (mb_strlen($this->container['duration']) > 1024)) {
            $invalidProperties[] = "invalid value for 'duration', the character length must be smaller than or equal to 1024.";
        }

        if (!is_null($this->container['repeat_kind']) && ($this->container['repeat_kind'] > 32767)) {
            $invalidProperties[] = "invalid value for 'repeat_kind', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['repeat_kind']) && ($this->container['repeat_kind'] < -32768)) {
            $invalidProperties[] = "invalid value for 'repeat_kind', must be bigger than or equal to -32768.";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets item_url
     *
     * @return string|null
     */
    public function getItemUrl()
    {
        return $this->container['item_url'];
    }

    /**
     * Sets item_url
     *
     * @param string|null $item_url item_url
     *
     * @return self
     */
    public function setItemUrl($item_url)
    {
        $this->container['item_url'] = $item_url;

        return $this;
    }

    /**
     * Gets first_show_on
     *
     * @return \DateTime|null
     */
    public function getFirstShowOn()
    {
        return $this->container['first_show_on'];
    }

    /**
     * Sets first_show_on
     *
     * @param \DateTime|null $first_show_on first_show_on
     *
     * @return self
     */
    public function setFirstShowOn($first_show_on)
    {
        $this->container['first_show_on'] = $first_show_on;

        return $this;
    }

    /**
     * Gets last_show_on
     *
     * @return \DateTime|null
     */
    public function getLastShowOn()
    {
        return $this->container['last_show_on'];
    }

    /**
     * Sets last_show_on
     *
     * @param \DateTime|null $last_show_on last_show_on
     *
     * @return self
     */
    public function setLastShowOn($last_show_on)
    {
        $this->container['last_show_on'] = $last_show_on;

        return $this;
    }

    /**
     * Gets start_time
     *
     * @return string|null
     */
    public function getStartTime()
    {
        return $this->container['start_time'];
    }

    /**
     * Sets start_time
     *
     * @param string|null $start_time start_time
     *
     * @return self
     */
    public function setStartTime($start_time)
    {
        $this->container['start_time'] = $start_time;

        return $this;
    }

    /**
     * Gets timezone
     *
     * @return string|null
     */
    public function getTimezone()
    {
        return $this->container['timezone'];
    }

    /**
     * Sets timezone
     *
     * @param string|null $timezone timezone
     *
     * @return self
     */
    public function setTimezone($timezone)
    {
        if (!is_null($timezone) && (mb_strlen($timezone) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $timezone when calling PatchedShowDays., must be smaller than or equal to 1024.');
        }

        $this->container['timezone'] = $timezone;

        return $this;
    }

    /**
     * Gets duration
     *
     * @return string|null
     */
    public function getDuration()
    {
        return $this->container['duration'];
    }

    /**
     * Sets duration
     *
     * @param string|null $duration duration
     *
     * @return self
     */
    public function setDuration($duration)
    {
        if (!is_null($duration) && (mb_strlen($duration) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $duration when calling PatchedShowDays., must be smaller than or equal to 1024.');
        }

        $this->container['duration'] = $duration;

        return $this;
    }

    /**
     * Gets record_enabled
     *
     * @return \Libretime\Client\Model\PatchedShowDaysRecordEnabled|null
     */
    public function getRecordEnabled()
    {
        return $this->container['record_enabled'];
    }

    /**
     * Sets record_enabled
     *
     * @param \Libretime\Client\Model\PatchedShowDaysRecordEnabled|null $record_enabled record_enabled
     *
     * @return self
     */
    public function setRecordEnabled($record_enabled)
    {
        $this->container['record_enabled'] = $record_enabled;

        return $this;
    }

    /**
     * Gets week_day
     *
     * @return \Libretime\Client\Model\PatchedShowDaysWeekDay|null
     */
    public function getWeekDay()
    {
        return $this->container['week_day'];
    }

    /**
     * Sets week_day
     *
     * @param \Libretime\Client\Model\PatchedShowDaysWeekDay|null $week_day week_day
     *
     * @return self
     */
    public function setWeekDay($week_day)
    {
        $this->container['week_day'] = $week_day;

        return $this;
    }

    /**
     * Gets repeat_kind
     *
     * @return RepeatKindEnum|null
     */
    public function getRepeatKind()
    {
        return $this->container['repeat_kind'];
    }

    /**
     * Sets repeat_kind
     *
     * @param RepeatKindEnum|null $repeat_kind repeat_kind
     *
     * @return self
     */
    public function setRepeatKind($repeat_kind)
    {

        if (!is_null($repeat_kind) && ($repeat_kind > 32767)) {
            throw new \InvalidArgumentException('invalid value for $repeat_kind when calling PatchedShowDays., must be smaller than or equal to 32767.');
        }
        if (!is_null($repeat_kind) && ($repeat_kind < -32768)) {
            throw new \InvalidArgumentException('invalid value for $repeat_kind when calling PatchedShowDays., must be bigger than or equal to -32768.');
        }

        $this->container['repeat_kind'] = $repeat_kind;

        return $this;
    }

    /**
     * Gets repeat_next_on
     *
     * @return \DateTime|null
     */
    public function getRepeatNextOn()
    {
        return $this->container['repeat_next_on'];
    }

    /**
     * Sets repeat_next_on
     *
     * @param \DateTime|null $repeat_next_on repeat_next_on
     *
     * @return self
     */
    public function setRepeatNextOn($repeat_next_on)
    {
        $this->container['repeat_next_on'] = $repeat_next_on;

        return $this;
    }

    /**
     * Gets show
     *
     * @return string|null
     */
    public function getShow()
    {
        return $this->container['show'];
    }

    /**
     * Sets show
     *
     * @param string|null $show show
     *
     * @return self
     */
    public function setShow($show)
    {
        $this->container['show'] = $show;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


