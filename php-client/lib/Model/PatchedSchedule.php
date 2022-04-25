<?php
/**
 * PatchedSchedule
 *
 * PHP version 7.3
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
 * OpenAPI Generator version: 6.0.0-beta
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
 * PatchedSchedule Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class PatchedSchedule implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PatchedSchedule';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'item_url' => 'string',
        'id' => 'int',
        'starts' => '\DateTime',
        'ends' => '\DateTime',
        'file' => 'string',
        'file_id' => 'int',
        'stream' => 'string',
        'stream_id' => 'int',
        'clip_length' => 'string',
        'fade_in' => 'string',
        'fade_out' => 'string',
        'cue_in' => 'string',
        'cue_out' => 'string',
        'media_item_played' => 'bool',
        'instance' => 'string',
        'instance_id' => 'int',
        'playout_status' => 'int',
        'broadcasted' => 'int',
        'position' => 'int'
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
        'id' => null,
        'starts' => 'date-time',
        'ends' => 'date-time',
        'file' => 'uri',
        'file_id' => null,
        'stream' => 'uri',
        'stream_id' => null,
        'clip_length' => null,
        'fade_in' => 'time',
        'fade_out' => 'time',
        'cue_in' => null,
        'cue_out' => null,
        'media_item_played' => null,
        'instance' => 'uri',
        'instance_id' => null,
        'playout_status' => null,
        'broadcasted' => null,
        'position' => null
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
        'id' => 'id',
        'starts' => 'starts',
        'ends' => 'ends',
        'file' => 'file',
        'file_id' => 'file_id',
        'stream' => 'stream',
        'stream_id' => 'stream_id',
        'clip_length' => 'clip_length',
        'fade_in' => 'fade_in',
        'fade_out' => 'fade_out',
        'cue_in' => 'cue_in',
        'cue_out' => 'cue_out',
        'media_item_played' => 'media_item_played',
        'instance' => 'instance',
        'instance_id' => 'instance_id',
        'playout_status' => 'playout_status',
        'broadcasted' => 'broadcasted',
        'position' => 'position'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'item_url' => 'setItemUrl',
        'id' => 'setId',
        'starts' => 'setStarts',
        'ends' => 'setEnds',
        'file' => 'setFile',
        'file_id' => 'setFileId',
        'stream' => 'setStream',
        'stream_id' => 'setStreamId',
        'clip_length' => 'setClipLength',
        'fade_in' => 'setFadeIn',
        'fade_out' => 'setFadeOut',
        'cue_in' => 'setCueIn',
        'cue_out' => 'setCueOut',
        'media_item_played' => 'setMediaItemPlayed',
        'instance' => 'setInstance',
        'instance_id' => 'setInstanceId',
        'playout_status' => 'setPlayoutStatus',
        'broadcasted' => 'setBroadcasted',
        'position' => 'setPosition'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'item_url' => 'getItemUrl',
        'id' => 'getId',
        'starts' => 'getStarts',
        'ends' => 'getEnds',
        'file' => 'getFile',
        'file_id' => 'getFileId',
        'stream' => 'getStream',
        'stream_id' => 'getStreamId',
        'clip_length' => 'getClipLength',
        'fade_in' => 'getFadeIn',
        'fade_out' => 'getFadeOut',
        'cue_in' => 'getCueIn',
        'cue_out' => 'getCueOut',
        'media_item_played' => 'getMediaItemPlayed',
        'instance' => 'getInstance',
        'instance_id' => 'getInstanceId',
        'playout_status' => 'getPlayoutStatus',
        'broadcasted' => 'getBroadcasted',
        'position' => 'getPosition'
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
        $this->container['id'] = $data['id'] ?? null;
        $this->container['starts'] = $data['starts'] ?? null;
        $this->container['ends'] = $data['ends'] ?? null;
        $this->container['file'] = $data['file'] ?? null;
        $this->container['file_id'] = $data['file_id'] ?? null;
        $this->container['stream'] = $data['stream'] ?? null;
        $this->container['stream_id'] = $data['stream_id'] ?? null;
        $this->container['clip_length'] = $data['clip_length'] ?? null;
        $this->container['fade_in'] = $data['fade_in'] ?? null;
        $this->container['fade_out'] = $data['fade_out'] ?? null;
        $this->container['cue_in'] = $data['cue_in'] ?? null;
        $this->container['cue_out'] = $data['cue_out'] ?? null;
        $this->container['media_item_played'] = $data['media_item_played'] ?? null;
        $this->container['instance'] = $data['instance'] ?? null;
        $this->container['instance_id'] = $data['instance_id'] ?? null;
        $this->container['playout_status'] = $data['playout_status'] ?? null;
        $this->container['broadcasted'] = $data['broadcasted'] ?? null;
        $this->container['position'] = $data['position'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['playout_status']) && ($this->container['playout_status'] > 32767)) {
            $invalidProperties[] = "invalid value for 'playout_status', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['playout_status']) && ($this->container['playout_status'] < -32768)) {
            $invalidProperties[] = "invalid value for 'playout_status', must be bigger than or equal to -32768.";
        }

        if (!is_null($this->container['broadcasted']) && ($this->container['broadcasted'] > 32767)) {
            $invalidProperties[] = "invalid value for 'broadcasted', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['broadcasted']) && ($this->container['broadcasted'] < -32768)) {
            $invalidProperties[] = "invalid value for 'broadcasted', must be bigger than or equal to -32768.";
        }

        if (!is_null($this->container['position']) && ($this->container['position'] > 2147483647)) {
            $invalidProperties[] = "invalid value for 'position', must be smaller than or equal to 2147483647.";
        }

        if (!is_null($this->container['position']) && ($this->container['position'] < -2147483648)) {
            $invalidProperties[] = "invalid value for 'position', must be bigger than or equal to -2147483648.";
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
     * Gets id
     *
     * @return int|null
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int|null $id id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets starts
     *
     * @return \DateTime|null
     */
    public function getStarts()
    {
        return $this->container['starts'];
    }

    /**
     * Sets starts
     *
     * @param \DateTime|null $starts starts
     *
     * @return self
     */
    public function setStarts($starts)
    {
        $this->container['starts'] = $starts;

        return $this;
    }

    /**
     * Gets ends
     *
     * @return \DateTime|null
     */
    public function getEnds()
    {
        return $this->container['ends'];
    }

    /**
     * Sets ends
     *
     * @param \DateTime|null $ends ends
     *
     * @return self
     */
    public function setEnds($ends)
    {
        $this->container['ends'] = $ends;

        return $this;
    }

    /**
     * Gets file
     *
     * @return string|null
     */
    public function getFile()
    {
        return $this->container['file'];
    }

    /**
     * Sets file
     *
     * @param string|null $file file
     *
     * @return self
     */
    public function setFile($file)
    {
        $this->container['file'] = $file;

        return $this;
    }

    /**
     * Gets file_id
     *
     * @return int|null
     */
    public function getFileId()
    {
        return $this->container['file_id'];
    }

    /**
     * Sets file_id
     *
     * @param int|null $file_id file_id
     *
     * @return self
     */
    public function setFileId($file_id)
    {
        $this->container['file_id'] = $file_id;

        return $this;
    }

    /**
     * Gets stream
     *
     * @return string|null
     */
    public function getStream()
    {
        return $this->container['stream'];
    }

    /**
     * Sets stream
     *
     * @param string|null $stream stream
     *
     * @return self
     */
    public function setStream($stream)
    {
        $this->container['stream'] = $stream;

        return $this;
    }

    /**
     * Gets stream_id
     *
     * @return int|null
     */
    public function getStreamId()
    {
        return $this->container['stream_id'];
    }

    /**
     * Sets stream_id
     *
     * @param int|null $stream_id stream_id
     *
     * @return self
     */
    public function setStreamId($stream_id)
    {
        $this->container['stream_id'] = $stream_id;

        return $this;
    }

    /**
     * Gets clip_length
     *
     * @return string|null
     */
    public function getClipLength()
    {
        return $this->container['clip_length'];
    }

    /**
     * Sets clip_length
     *
     * @param string|null $clip_length clip_length
     *
     * @return self
     */
    public function setClipLength($clip_length)
    {
        $this->container['clip_length'] = $clip_length;

        return $this;
    }

    /**
     * Gets fade_in
     *
     * @return string|null
     */
    public function getFadeIn()
    {
        return $this->container['fade_in'];
    }

    /**
     * Sets fade_in
     *
     * @param string|null $fade_in fade_in
     *
     * @return self
     */
    public function setFadeIn($fade_in)
    {
        $this->container['fade_in'] = $fade_in;

        return $this;
    }

    /**
     * Gets fade_out
     *
     * @return string|null
     */
    public function getFadeOut()
    {
        return $this->container['fade_out'];
    }

    /**
     * Sets fade_out
     *
     * @param string|null $fade_out fade_out
     *
     * @return self
     */
    public function setFadeOut($fade_out)
    {
        $this->container['fade_out'] = $fade_out;

        return $this;
    }

    /**
     * Gets cue_in
     *
     * @return string|null
     */
    public function getCueIn()
    {
        return $this->container['cue_in'];
    }

    /**
     * Sets cue_in
     *
     * @param string|null $cue_in cue_in
     *
     * @return self
     */
    public function setCueIn($cue_in)
    {
        $this->container['cue_in'] = $cue_in;

        return $this;
    }

    /**
     * Gets cue_out
     *
     * @return string|null
     */
    public function getCueOut()
    {
        return $this->container['cue_out'];
    }

    /**
     * Sets cue_out
     *
     * @param string|null $cue_out cue_out
     *
     * @return self
     */
    public function setCueOut($cue_out)
    {
        $this->container['cue_out'] = $cue_out;

        return $this;
    }

    /**
     * Gets media_item_played
     *
     * @return bool|null
     */
    public function getMediaItemPlayed()
    {
        return $this->container['media_item_played'];
    }

    /**
     * Sets media_item_played
     *
     * @param bool|null $media_item_played media_item_played
     *
     * @return self
     */
    public function setMediaItemPlayed($media_item_played)
    {
        $this->container['media_item_played'] = $media_item_played;

        return $this;
    }

    /**
     * Gets instance
     *
     * @return string|null
     */
    public function getInstance()
    {
        return $this->container['instance'];
    }

    /**
     * Sets instance
     *
     * @param string|null $instance instance
     *
     * @return self
     */
    public function setInstance($instance)
    {
        $this->container['instance'] = $instance;

        return $this;
    }

    /**
     * Gets instance_id
     *
     * @return int|null
     */
    public function getInstanceId()
    {
        return $this->container['instance_id'];
    }

    /**
     * Sets instance_id
     *
     * @param int|null $instance_id instance_id
     *
     * @return self
     */
    public function setInstanceId($instance_id)
    {
        $this->container['instance_id'] = $instance_id;

        return $this;
    }

    /**
     * Gets playout_status
     *
     * @return int|null
     */
    public function getPlayoutStatus()
    {
        return $this->container['playout_status'];
    }

    /**
     * Sets playout_status
     *
     * @param int|null $playout_status playout_status
     *
     * @return self
     */
    public function setPlayoutStatus($playout_status)
    {

        if (!is_null($playout_status) && ($playout_status > 32767)) {
            throw new \InvalidArgumentException('invalid value for $playout_status when calling PatchedSchedule., must be smaller than or equal to 32767.');
        }
        if (!is_null($playout_status) && ($playout_status < -32768)) {
            throw new \InvalidArgumentException('invalid value for $playout_status when calling PatchedSchedule., must be bigger than or equal to -32768.');
        }

        $this->container['playout_status'] = $playout_status;

        return $this;
    }

    /**
     * Gets broadcasted
     *
     * @return int|null
     */
    public function getBroadcasted()
    {
        return $this->container['broadcasted'];
    }

    /**
     * Sets broadcasted
     *
     * @param int|null $broadcasted broadcasted
     *
     * @return self
     */
    public function setBroadcasted($broadcasted)
    {

        if (!is_null($broadcasted) && ($broadcasted > 32767)) {
            throw new \InvalidArgumentException('invalid value for $broadcasted when calling PatchedSchedule., must be smaller than or equal to 32767.');
        }
        if (!is_null($broadcasted) && ($broadcasted < -32768)) {
            throw new \InvalidArgumentException('invalid value for $broadcasted when calling PatchedSchedule., must be bigger than or equal to -32768.');
        }

        $this->container['broadcasted'] = $broadcasted;

        return $this;
    }

    /**
     * Gets position
     *
     * @return int|null
     */
    public function getPosition()
    {
        return $this->container['position'];
    }

    /**
     * Sets position
     *
     * @param int|null $position position
     *
     * @return self
     */
    public function setPosition($position)
    {

        if (!is_null($position) && ($position > 2147483647)) {
            throw new \InvalidArgumentException('invalid value for $position when calling PatchedSchedule., must be smaller than or equal to 2147483647.');
        }
        if (!is_null($position) && ($position < -2147483648)) {
            throw new \InvalidArgumentException('invalid value for $position when calling PatchedSchedule., must be bigger than or equal to -2147483648.');
        }

        $this->container['position'] = $position;

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


