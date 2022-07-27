<?php
/**
 * ImportedPodcast
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
 * ImportedPodcast Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class ImportedPodcast implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ImportedPodcast';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'override_album' => 'bool',
        'auto_ingest' => 'bool',
        'auto_ingested_at' => '\DateTime',
        'podcast' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'id' => null,
        'override_album' => null,
        'auto_ingest' => null,
        'auto_ingested_at' => 'date-time',
        'podcast' => null
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
        'id' => 'id',
        'override_album' => 'override_album',
        'auto_ingest' => 'auto_ingest',
        'auto_ingested_at' => 'auto_ingested_at',
        'podcast' => 'podcast'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'override_album' => 'setOverrideAlbum',
        'auto_ingest' => 'setAutoIngest',
        'auto_ingested_at' => 'setAutoIngestedAt',
        'podcast' => 'setPodcast'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'override_album' => 'getOverrideAlbum',
        'auto_ingest' => 'getAutoIngest',
        'auto_ingested_at' => 'getAutoIngestedAt',
        'podcast' => 'getPodcast'
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
        $this->container['id'] = $data['id'] ?? null;
        $this->container['override_album'] = $data['override_album'] ?? null;
        $this->container['auto_ingest'] = $data['auto_ingest'] ?? null;
        $this->container['auto_ingested_at'] = $data['auto_ingested_at'] ?? null;
        $this->container['podcast'] = $data['podcast'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['id'] === null) {
            $invalidProperties[] = "'id' can't be null";
        }
        if ($this->container['override_album'] === null) {
            $invalidProperties[] = "'override_album' can't be null";
        }
        if ($this->container['auto_ingest'] === null) {
            $invalidProperties[] = "'auto_ingest' can't be null";
        }
        if ($this->container['podcast'] === null) {
            $invalidProperties[] = "'podcast' can't be null";
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
     * Gets override_album
     *
     * @return bool
     */
    public function getOverrideAlbum()
    {
        return $this->container['override_album'];
    }

    /**
     * Sets override_album
     *
     * @param bool $override_album override_album
     *
     * @return self
     */
    public function setOverrideAlbum($override_album)
    {
        $this->container['override_album'] = $override_album;

        return $this;
    }

    /**
     * Gets auto_ingest
     *
     * @return bool
     */
    public function getAutoIngest()
    {
        return $this->container['auto_ingest'];
    }

    /**
     * Sets auto_ingest
     *
     * @param bool $auto_ingest auto_ingest
     *
     * @return self
     */
    public function setAutoIngest($auto_ingest)
    {
        $this->container['auto_ingest'] = $auto_ingest;

        return $this;
    }

    /**
     * Gets auto_ingested_at
     *
     * @return \DateTime|null
     */
    public function getAutoIngestedAt()
    {
        return $this->container['auto_ingested_at'];
    }

    /**
     * Sets auto_ingested_at
     *
     * @param \DateTime|null $auto_ingested_at auto_ingested_at
     *
     * @return self
     */
    public function setAutoIngestedAt($auto_ingested_at)
    {
        $this->container['auto_ingested_at'] = $auto_ingested_at;

        return $this;
    }

    /**
     * Gets podcast
     *
     * @return int
     */
    public function getPodcast()
    {
        return $this->container['podcast'];
    }

    /**
     * Sets podcast
     *
     * @param int $podcast podcast
     *
     * @return self
     */
    public function setPodcast($podcast)
    {
        $this->container['podcast'] = $podcast;

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


