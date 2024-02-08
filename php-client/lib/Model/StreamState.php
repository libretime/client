<?php
/**
 * StreamState
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
 * OpenAPI Generator version: 7.3.0
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
 * StreamState Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class StreamState implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'StreamState';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'input_main_connected' => 'bool',
        'input_main_streaming' => 'bool',
        'input_show_connected' => 'bool',
        'input_show_streaming' => 'bool',
        'schedule_streaming' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'input_main_connected' => null,
        'input_main_streaming' => null,
        'input_show_connected' => null,
        'input_show_streaming' => null,
        'schedule_streaming' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'input_main_connected' => false,
        'input_main_streaming' => false,
        'input_show_connected' => false,
        'input_show_streaming' => false,
        'schedule_streaming' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

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
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'input_main_connected' => 'input_main_connected',
        'input_main_streaming' => 'input_main_streaming',
        'input_show_connected' => 'input_show_connected',
        'input_show_streaming' => 'input_show_streaming',
        'schedule_streaming' => 'schedule_streaming'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'input_main_connected' => 'setInputMainConnected',
        'input_main_streaming' => 'setInputMainStreaming',
        'input_show_connected' => 'setInputShowConnected',
        'input_show_streaming' => 'setInputShowStreaming',
        'schedule_streaming' => 'setScheduleStreaming'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'input_main_connected' => 'getInputMainConnected',
        'input_main_streaming' => 'getInputMainStreaming',
        'input_show_connected' => 'getInputShowConnected',
        'input_show_streaming' => 'getInputShowStreaming',
        'schedule_streaming' => 'getScheduleStreaming'
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
        $this->setIfExists('input_main_connected', $data ?? [], null);
        $this->setIfExists('input_main_streaming', $data ?? [], null);
        $this->setIfExists('input_show_connected', $data ?? [], null);
        $this->setIfExists('input_show_streaming', $data ?? [], null);
        $this->setIfExists('schedule_streaming', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['input_main_connected'] === null) {
            $invalidProperties[] = "'input_main_connected' can't be null";
        }
        if ($this->container['input_main_streaming'] === null) {
            $invalidProperties[] = "'input_main_streaming' can't be null";
        }
        if ($this->container['input_show_connected'] === null) {
            $invalidProperties[] = "'input_show_connected' can't be null";
        }
        if ($this->container['input_show_streaming'] === null) {
            $invalidProperties[] = "'input_show_streaming' can't be null";
        }
        if ($this->container['schedule_streaming'] === null) {
            $invalidProperties[] = "'schedule_streaming' can't be null";
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
     * Gets input_main_connected
     *
     * @return bool
     */
    public function getInputMainConnected()
    {
        return $this->container['input_main_connected'];
    }

    /**
     * Sets input_main_connected
     *
     * @param bool $input_main_connected input_main_connected
     *
     * @return self
     */
    public function setInputMainConnected($input_main_connected)
    {
        if (is_null($input_main_connected)) {
            throw new \InvalidArgumentException('non-nullable input_main_connected cannot be null');
        }
        $this->container['input_main_connected'] = $input_main_connected;

        return $this;
    }

    /**
     * Gets input_main_streaming
     *
     * @return bool
     */
    public function getInputMainStreaming()
    {
        return $this->container['input_main_streaming'];
    }

    /**
     * Sets input_main_streaming
     *
     * @param bool $input_main_streaming input_main_streaming
     *
     * @return self
     */
    public function setInputMainStreaming($input_main_streaming)
    {
        if (is_null($input_main_streaming)) {
            throw new \InvalidArgumentException('non-nullable input_main_streaming cannot be null');
        }
        $this->container['input_main_streaming'] = $input_main_streaming;

        return $this;
    }

    /**
     * Gets input_show_connected
     *
     * @return bool
     */
    public function getInputShowConnected()
    {
        return $this->container['input_show_connected'];
    }

    /**
     * Sets input_show_connected
     *
     * @param bool $input_show_connected input_show_connected
     *
     * @return self
     */
    public function setInputShowConnected($input_show_connected)
    {
        if (is_null($input_show_connected)) {
            throw new \InvalidArgumentException('non-nullable input_show_connected cannot be null');
        }
        $this->container['input_show_connected'] = $input_show_connected;

        return $this;
    }

    /**
     * Gets input_show_streaming
     *
     * @return bool
     */
    public function getInputShowStreaming()
    {
        return $this->container['input_show_streaming'];
    }

    /**
     * Sets input_show_streaming
     *
     * @param bool $input_show_streaming input_show_streaming
     *
     * @return self
     */
    public function setInputShowStreaming($input_show_streaming)
    {
        if (is_null($input_show_streaming)) {
            throw new \InvalidArgumentException('non-nullable input_show_streaming cannot be null');
        }
        $this->container['input_show_streaming'] = $input_show_streaming;

        return $this;
    }

    /**
     * Gets schedule_streaming
     *
     * @return bool
     */
    public function getScheduleStreaming()
    {
        return $this->container['schedule_streaming'];
    }

    /**
     * Sets schedule_streaming
     *
     * @param bool $schedule_streaming schedule_streaming
     *
     * @return self
     */
    public function setScheduleStreaming($schedule_streaming)
    {
        if (is_null($schedule_streaming)) {
            throw new \InvalidArgumentException('non-nullable schedule_streaming cannot be null');
        }
        $this->container['schedule_streaming'] = $schedule_streaming;

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


