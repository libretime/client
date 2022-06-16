<?php
/**
 * ShowInstance
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
 * ShowInstance Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class ShowInstance implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ShowInstance';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'item_url' => 'string',
        'id' => 'int',
        'description' => 'string',
        'starts' => '\DateTime',
        'ends' => '\DateTime',
        'record' => 'int',
        'rebroadcast' => 'int',
        'time_filled' => 'string',
        'created' => '\DateTime',
        'last_scheduled' => '\DateTime',
        'modified_instance' => 'bool',
        'autoplaylist_built' => 'bool',
        'show' => 'string',
        'show_id' => 'int',
        'instance' => 'string',
        'file' => 'string',
        'file_id' => 'int'
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
        'description' => null,
        'starts' => 'date-time',
        'ends' => 'date-time',
        'record' => null,
        'rebroadcast' => null,
        'time_filled' => null,
        'created' => 'date-time',
        'last_scheduled' => 'date-time',
        'modified_instance' => null,
        'autoplaylist_built' => null,
        'show' => 'uri',
        'show_id' => null,
        'instance' => 'uri',
        'file' => 'uri',
        'file_id' => null
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
        'description' => 'description',
        'starts' => 'starts',
        'ends' => 'ends',
        'record' => 'record',
        'rebroadcast' => 'rebroadcast',
        'time_filled' => 'time_filled',
        'created' => 'created',
        'last_scheduled' => 'last_scheduled',
        'modified_instance' => 'modified_instance',
        'autoplaylist_built' => 'autoplaylist_built',
        'show' => 'show',
        'show_id' => 'show_id',
        'instance' => 'instance',
        'file' => 'file',
        'file_id' => 'file_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'item_url' => 'setItemUrl',
        'id' => 'setId',
        'description' => 'setDescription',
        'starts' => 'setStarts',
        'ends' => 'setEnds',
        'record' => 'setRecord',
        'rebroadcast' => 'setRebroadcast',
        'time_filled' => 'setTimeFilled',
        'created' => 'setCreated',
        'last_scheduled' => 'setLastScheduled',
        'modified_instance' => 'setModifiedInstance',
        'autoplaylist_built' => 'setAutoplaylistBuilt',
        'show' => 'setShow',
        'show_id' => 'setShowId',
        'instance' => 'setInstance',
        'file' => 'setFile',
        'file_id' => 'setFileId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'item_url' => 'getItemUrl',
        'id' => 'getId',
        'description' => 'getDescription',
        'starts' => 'getStarts',
        'ends' => 'getEnds',
        'record' => 'getRecord',
        'rebroadcast' => 'getRebroadcast',
        'time_filled' => 'getTimeFilled',
        'created' => 'getCreated',
        'last_scheduled' => 'getLastScheduled',
        'modified_instance' => 'getModifiedInstance',
        'autoplaylist_built' => 'getAutoplaylistBuilt',
        'show' => 'getShow',
        'show_id' => 'getShowId',
        'instance' => 'getInstance',
        'file' => 'getFile',
        'file_id' => 'getFileId'
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
        $this->container['description'] = $data['description'] ?? null;
        $this->container['starts'] = $data['starts'] ?? null;
        $this->container['ends'] = $data['ends'] ?? null;
        $this->container['record'] = $data['record'] ?? null;
        $this->container['rebroadcast'] = $data['rebroadcast'] ?? null;
        $this->container['time_filled'] = $data['time_filled'] ?? null;
        $this->container['created'] = $data['created'] ?? null;
        $this->container['last_scheduled'] = $data['last_scheduled'] ?? null;
        $this->container['modified_instance'] = $data['modified_instance'] ?? null;
        $this->container['autoplaylist_built'] = $data['autoplaylist_built'] ?? null;
        $this->container['show'] = $data['show'] ?? null;
        $this->container['show_id'] = $data['show_id'] ?? null;
        $this->container['instance'] = $data['instance'] ?? null;
        $this->container['file'] = $data['file'] ?? null;
        $this->container['file_id'] = $data['file_id'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['item_url'] === null) {
            $invalidProperties[] = "'item_url' can't be null";
        }
        if ($this->container['id'] === null) {
            $invalidProperties[] = "'id' can't be null";
        }
        if (!is_null($this->container['description']) && (mb_strlen($this->container['description']) > 8192)) {
            $invalidProperties[] = "invalid value for 'description', the character length must be smaller than or equal to 8192.";
        }

        if ($this->container['starts'] === null) {
            $invalidProperties[] = "'starts' can't be null";
        }
        if ($this->container['ends'] === null) {
            $invalidProperties[] = "'ends' can't be null";
        }
        if (!is_null($this->container['record']) && ($this->container['record'] > 32767)) {
            $invalidProperties[] = "invalid value for 'record', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['record']) && ($this->container['record'] < -32768)) {
            $invalidProperties[] = "invalid value for 'record', must be bigger than or equal to -32768.";
        }

        if (!is_null($this->container['rebroadcast']) && ($this->container['rebroadcast'] > 32767)) {
            $invalidProperties[] = "invalid value for 'rebroadcast', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['rebroadcast']) && ($this->container['rebroadcast'] < -32768)) {
            $invalidProperties[] = "invalid value for 'rebroadcast', must be bigger than or equal to -32768.";
        }

        if ($this->container['created'] === null) {
            $invalidProperties[] = "'created' can't be null";
        }
        if ($this->container['modified_instance'] === null) {
            $invalidProperties[] = "'modified_instance' can't be null";
        }
        if ($this->container['autoplaylist_built'] === null) {
            $invalidProperties[] = "'autoplaylist_built' can't be null";
        }
        if ($this->container['show'] === null) {
            $invalidProperties[] = "'show' can't be null";
        }
        if ($this->container['show_id'] === null) {
            $invalidProperties[] = "'show_id' can't be null";
        }
        if ($this->container['file_id'] === null) {
            $invalidProperties[] = "'file_id' can't be null";
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
     * @return string
     */
    public function getItemUrl()
    {
        return $this->container['item_url'];
    }

    /**
     * Sets item_url
     *
     * @param string $item_url item_url
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
     * @return int
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int $id id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string|null $description description
     *
     * @return self
     */
    public function setDescription($description)
    {
        if (!is_null($description) && (mb_strlen($description) > 8192)) {
            throw new \InvalidArgumentException('invalid length for $description when calling ShowInstance., must be smaller than or equal to 8192.');
        }

        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets starts
     *
     * @return \DateTime
     */
    public function getStarts()
    {
        return $this->container['starts'];
    }

    /**
     * Sets starts
     *
     * @param \DateTime $starts starts
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
     * @return \DateTime
     */
    public function getEnds()
    {
        return $this->container['ends'];
    }

    /**
     * Sets ends
     *
     * @param \DateTime $ends ends
     *
     * @return self
     */
    public function setEnds($ends)
    {
        $this->container['ends'] = $ends;

        return $this;
    }

    /**
     * Gets record
     *
     * @return int|null
     */
    public function getRecord()
    {
        return $this->container['record'];
    }

    /**
     * Sets record
     *
     * @param int|null $record record
     *
     * @return self
     */
    public function setRecord($record)
    {

        if (!is_null($record) && ($record > 32767)) {
            throw new \InvalidArgumentException('invalid value for $record when calling ShowInstance., must be smaller than or equal to 32767.');
        }
        if (!is_null($record) && ($record < -32768)) {
            throw new \InvalidArgumentException('invalid value for $record when calling ShowInstance., must be bigger than or equal to -32768.');
        }

        $this->container['record'] = $record;

        return $this;
    }

    /**
     * Gets rebroadcast
     *
     * @return int|null
     */
    public function getRebroadcast()
    {
        return $this->container['rebroadcast'];
    }

    /**
     * Sets rebroadcast
     *
     * @param int|null $rebroadcast rebroadcast
     *
     * @return self
     */
    public function setRebroadcast($rebroadcast)
    {

        if (!is_null($rebroadcast) && ($rebroadcast > 32767)) {
            throw new \InvalidArgumentException('invalid value for $rebroadcast when calling ShowInstance., must be smaller than or equal to 32767.');
        }
        if (!is_null($rebroadcast) && ($rebroadcast < -32768)) {
            throw new \InvalidArgumentException('invalid value for $rebroadcast when calling ShowInstance., must be bigger than or equal to -32768.');
        }

        $this->container['rebroadcast'] = $rebroadcast;

        return $this;
    }

    /**
     * Gets time_filled
     *
     * @return string|null
     */
    public function getTimeFilled()
    {
        return $this->container['time_filled'];
    }

    /**
     * Sets time_filled
     *
     * @param string|null $time_filled time_filled
     *
     * @return self
     */
    public function setTimeFilled($time_filled)
    {
        $this->container['time_filled'] = $time_filled;

        return $this;
    }

    /**
     * Gets created
     *
     * @return \DateTime
     */
    public function getCreated()
    {
        return $this->container['created'];
    }

    /**
     * Sets created
     *
     * @param \DateTime $created created
     *
     * @return self
     */
    public function setCreated($created)
    {
        $this->container['created'] = $created;

        return $this;
    }

    /**
     * Gets last_scheduled
     *
     * @return \DateTime|null
     */
    public function getLastScheduled()
    {
        return $this->container['last_scheduled'];
    }

    /**
     * Sets last_scheduled
     *
     * @param \DateTime|null $last_scheduled last_scheduled
     *
     * @return self
     */
    public function setLastScheduled($last_scheduled)
    {
        $this->container['last_scheduled'] = $last_scheduled;

        return $this;
    }

    /**
     * Gets modified_instance
     *
     * @return bool
     */
    public function getModifiedInstance()
    {
        return $this->container['modified_instance'];
    }

    /**
     * Sets modified_instance
     *
     * @param bool $modified_instance modified_instance
     *
     * @return self
     */
    public function setModifiedInstance($modified_instance)
    {
        $this->container['modified_instance'] = $modified_instance;

        return $this;
    }

    /**
     * Gets autoplaylist_built
     *
     * @return bool
     */
    public function getAutoplaylistBuilt()
    {
        return $this->container['autoplaylist_built'];
    }

    /**
     * Sets autoplaylist_built
     *
     * @param bool $autoplaylist_built autoplaylist_built
     *
     * @return self
     */
    public function setAutoplaylistBuilt($autoplaylist_built)
    {
        $this->container['autoplaylist_built'] = $autoplaylist_built;

        return $this;
    }

    /**
     * Gets show
     *
     * @return string
     */
    public function getShow()
    {
        return $this->container['show'];
    }

    /**
     * Sets show
     *
     * @param string $show show
     *
     * @return self
     */
    public function setShow($show)
    {
        $this->container['show'] = $show;

        return $this;
    }

    /**
     * Gets show_id
     *
     * @return int
     */
    public function getShowId()
    {
        return $this->container['show_id'];
    }

    /**
     * Sets show_id
     *
     * @param int $show_id show_id
     *
     * @return self
     */
    public function setShowId($show_id)
    {
        $this->container['show_id'] = $show_id;

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
     * @return int
     */
    public function getFileId()
    {
        return $this->container['file_id'];
    }

    /**
     * Sets file_id
     *
     * @param int $file_id file_id
     *
     * @return self
     */
    public function setFileId($file_id)
    {
        $this->container['file_id'] = $file_id;

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


