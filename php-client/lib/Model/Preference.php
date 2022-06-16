<?php
/**
 * Preference
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
 * Preference Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class Preference implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'Preference';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'item_url' => 'string',
        'keystr' => 'string',
        'valstr' => 'string',
        'subjid' => 'string'
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
        'keystr' => null,
        'valstr' => null,
        'subjid' => 'uri'
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
        'keystr' => 'keystr',
        'valstr' => 'valstr',
        'subjid' => 'subjid'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'item_url' => 'setItemUrl',
        'keystr' => 'setKeystr',
        'valstr' => 'setValstr',
        'subjid' => 'setSubjid'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'item_url' => 'getItemUrl',
        'keystr' => 'getKeystr',
        'valstr' => 'getValstr',
        'subjid' => 'getSubjid'
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
        $this->container['keystr'] = $data['keystr'] ?? null;
        $this->container['valstr'] = $data['valstr'] ?? null;
        $this->container['subjid'] = $data['subjid'] ?? null;
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
        if ($this->container['keystr'] === null) {
            $invalidProperties[] = "'keystr' can't be null";
        }
        if ((mb_strlen($this->container['keystr']) > 255)) {
            $invalidProperties[] = "invalid value for 'keystr', the character length must be smaller than or equal to 255.";
        }

        if ($this->container['subjid'] === null) {
            $invalidProperties[] = "'subjid' can't be null";
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
     * Gets keystr
     *
     * @return string
     */
    public function getKeystr()
    {
        return $this->container['keystr'];
    }

    /**
     * Sets keystr
     *
     * @param string $keystr keystr
     *
     * @return self
     */
    public function setKeystr($keystr)
    {
        if ((mb_strlen($keystr) > 255)) {
            throw new \InvalidArgumentException('invalid length for $keystr when calling Preference., must be smaller than or equal to 255.');
        }

        $this->container['keystr'] = $keystr;

        return $this;
    }

    /**
     * Gets valstr
     *
     * @return string|null
     */
    public function getValstr()
    {
        return $this->container['valstr'];
    }

    /**
     * Sets valstr
     *
     * @param string|null $valstr valstr
     *
     * @return self
     */
    public function setValstr($valstr)
    {
        $this->container['valstr'] = $valstr;

        return $this;
    }

    /**
     * Gets subjid
     *
     * @return string
     */
    public function getSubjid()
    {
        return $this->container['subjid'];
    }

    /**
     * Sets subjid
     *
     * @param string $subjid subjid
     *
     * @return self
     */
    public function setSubjid($subjid)
    {
        $this->container['subjid'] = $subjid;

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


