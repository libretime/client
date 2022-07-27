<?php
/**
 * PatchedShow
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
 * PatchedShow Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class PatchedShow implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PatchedShow';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'name' => 'string',
        'description' => 'string',
        'genre' => 'string',
        'url' => 'string',
        'image' => 'string',
        'foreground_color' => 'string',
        'background_color' => 'string',
        'linked' => 'bool',
        'linkable' => 'bool',
        'auto_playlist' => 'int',
        'auto_playlist_enabled' => 'bool',
        'auto_playlist_repeat' => 'bool'
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
        'name' => null,
        'description' => null,
        'genre' => null,
        'url' => null,
        'image' => null,
        'foreground_color' => null,
        'background_color' => null,
        'linked' => null,
        'linkable' => null,
        'auto_playlist' => null,
        'auto_playlist_enabled' => null,
        'auto_playlist_repeat' => null
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
        'name' => 'name',
        'description' => 'description',
        'genre' => 'genre',
        'url' => 'url',
        'image' => 'image',
        'foreground_color' => 'foreground_color',
        'background_color' => 'background_color',
        'linked' => 'linked',
        'linkable' => 'linkable',
        'auto_playlist' => 'auto_playlist',
        'auto_playlist_enabled' => 'auto_playlist_enabled',
        'auto_playlist_repeat' => 'auto_playlist_repeat'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'name' => 'setName',
        'description' => 'setDescription',
        'genre' => 'setGenre',
        'url' => 'setUrl',
        'image' => 'setImage',
        'foreground_color' => 'setForegroundColor',
        'background_color' => 'setBackgroundColor',
        'linked' => 'setLinked',
        'linkable' => 'setLinkable',
        'auto_playlist' => 'setAutoPlaylist',
        'auto_playlist_enabled' => 'setAutoPlaylistEnabled',
        'auto_playlist_repeat' => 'setAutoPlaylistRepeat'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'name' => 'getName',
        'description' => 'getDescription',
        'genre' => 'getGenre',
        'url' => 'getUrl',
        'image' => 'getImage',
        'foreground_color' => 'getForegroundColor',
        'background_color' => 'getBackgroundColor',
        'linked' => 'getLinked',
        'linkable' => 'getLinkable',
        'auto_playlist' => 'getAutoPlaylist',
        'auto_playlist_enabled' => 'getAutoPlaylistEnabled',
        'auto_playlist_repeat' => 'getAutoPlaylistRepeat'
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
        $this->container['name'] = $data['name'] ?? null;
        $this->container['description'] = $data['description'] ?? null;
        $this->container['genre'] = $data['genre'] ?? null;
        $this->container['url'] = $data['url'] ?? null;
        $this->container['image'] = $data['image'] ?? null;
        $this->container['foreground_color'] = $data['foreground_color'] ?? null;
        $this->container['background_color'] = $data['background_color'] ?? null;
        $this->container['linked'] = $data['linked'] ?? null;
        $this->container['linkable'] = $data['linkable'] ?? null;
        $this->container['auto_playlist'] = $data['auto_playlist'] ?? null;
        $this->container['auto_playlist_enabled'] = $data['auto_playlist_enabled'] ?? null;
        $this->container['auto_playlist_repeat'] = $data['auto_playlist_repeat'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['name']) && (mb_strlen($this->container['name']) > 255)) {
            $invalidProperties[] = "invalid value for 'name', the character length must be smaller than or equal to 255.";
        }

        if (!is_null($this->container['description']) && (mb_strlen($this->container['description']) > 8192)) {
            $invalidProperties[] = "invalid value for 'description', the character length must be smaller than or equal to 8192.";
        }

        if (!is_null($this->container['genre']) && (mb_strlen($this->container['genre']) > 255)) {
            $invalidProperties[] = "invalid value for 'genre', the character length must be smaller than or equal to 255.";
        }

        if (!is_null($this->container['url']) && (mb_strlen($this->container['url']) > 255)) {
            $invalidProperties[] = "invalid value for 'url', the character length must be smaller than or equal to 255.";
        }

        if (!is_null($this->container['image']) && (mb_strlen($this->container['image']) > 255)) {
            $invalidProperties[] = "invalid value for 'image', the character length must be smaller than or equal to 255.";
        }

        if (!is_null($this->container['foreground_color']) && (mb_strlen($this->container['foreground_color']) > 6)) {
            $invalidProperties[] = "invalid value for 'foreground_color', the character length must be smaller than or equal to 6.";
        }

        if (!is_null($this->container['background_color']) && (mb_strlen($this->container['background_color']) > 6)) {
            $invalidProperties[] = "invalid value for 'background_color', the character length must be smaller than or equal to 6.";
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
     * Gets name
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string|null $name name
     *
     * @return self
     */
    public function setName($name)
    {
        if (!is_null($name) && (mb_strlen($name) > 255)) {
            throw new \InvalidArgumentException('invalid length for $name when calling PatchedShow., must be smaller than or equal to 255.');
        }

        $this->container['name'] = $name;

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
            throw new \InvalidArgumentException('invalid length for $description when calling PatchedShow., must be smaller than or equal to 8192.');
        }

        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets genre
     *
     * @return string|null
     */
    public function getGenre()
    {
        return $this->container['genre'];
    }

    /**
     * Sets genre
     *
     * @param string|null $genre genre
     *
     * @return self
     */
    public function setGenre($genre)
    {
        if (!is_null($genre) && (mb_strlen($genre) > 255)) {
            throw new \InvalidArgumentException('invalid length for $genre when calling PatchedShow., must be smaller than or equal to 255.');
        }

        $this->container['genre'] = $genre;

        return $this;
    }

    /**
     * Gets url
     *
     * @return string|null
     */
    public function getUrl()
    {
        return $this->container['url'];
    }

    /**
     * Sets url
     *
     * @param string|null $url url
     *
     * @return self
     */
    public function setUrl($url)
    {
        if (!is_null($url) && (mb_strlen($url) > 255)) {
            throw new \InvalidArgumentException('invalid length for $url when calling PatchedShow., must be smaller than or equal to 255.');
        }

        $this->container['url'] = $url;

        return $this;
    }

    /**
     * Gets image
     *
     * @return string|null
     */
    public function getImage()
    {
        return $this->container['image'];
    }

    /**
     * Sets image
     *
     * @param string|null $image image
     *
     * @return self
     */
    public function setImage($image)
    {
        if (!is_null($image) && (mb_strlen($image) > 255)) {
            throw new \InvalidArgumentException('invalid length for $image when calling PatchedShow., must be smaller than or equal to 255.');
        }

        $this->container['image'] = $image;

        return $this;
    }

    /**
     * Gets foreground_color
     *
     * @return string|null
     */
    public function getForegroundColor()
    {
        return $this->container['foreground_color'];
    }

    /**
     * Sets foreground_color
     *
     * @param string|null $foreground_color foreground_color
     *
     * @return self
     */
    public function setForegroundColor($foreground_color)
    {
        if (!is_null($foreground_color) && (mb_strlen($foreground_color) > 6)) {
            throw new \InvalidArgumentException('invalid length for $foreground_color when calling PatchedShow., must be smaller than or equal to 6.');
        }

        $this->container['foreground_color'] = $foreground_color;

        return $this;
    }

    /**
     * Gets background_color
     *
     * @return string|null
     */
    public function getBackgroundColor()
    {
        return $this->container['background_color'];
    }

    /**
     * Sets background_color
     *
     * @param string|null $background_color background_color
     *
     * @return self
     */
    public function setBackgroundColor($background_color)
    {
        if (!is_null($background_color) && (mb_strlen($background_color) > 6)) {
            throw new \InvalidArgumentException('invalid length for $background_color when calling PatchedShow., must be smaller than or equal to 6.');
        }

        $this->container['background_color'] = $background_color;

        return $this;
    }

    /**
     * Gets linked
     *
     * @return bool|null
     */
    public function getLinked()
    {
        return $this->container['linked'];
    }

    /**
     * Sets linked
     *
     * @param bool|null $linked linked
     *
     * @return self
     */
    public function setLinked($linked)
    {
        $this->container['linked'] = $linked;

        return $this;
    }

    /**
     * Gets linkable
     *
     * @return bool|null
     */
    public function getLinkable()
    {
        return $this->container['linkable'];
    }

    /**
     * Sets linkable
     *
     * @param bool|null $linkable linkable
     *
     * @return self
     */
    public function setLinkable($linkable)
    {
        $this->container['linkable'] = $linkable;

        return $this;
    }

    /**
     * Gets auto_playlist
     *
     * @return int|null
     */
    public function getAutoPlaylist()
    {
        return $this->container['auto_playlist'];
    }

    /**
     * Sets auto_playlist
     *
     * @param int|null $auto_playlist auto_playlist
     *
     * @return self
     */
    public function setAutoPlaylist($auto_playlist)
    {
        $this->container['auto_playlist'] = $auto_playlist;

        return $this;
    }

    /**
     * Gets auto_playlist_enabled
     *
     * @return bool|null
     */
    public function getAutoPlaylistEnabled()
    {
        return $this->container['auto_playlist_enabled'];
    }

    /**
     * Sets auto_playlist_enabled
     *
     * @param bool|null $auto_playlist_enabled auto_playlist_enabled
     *
     * @return self
     */
    public function setAutoPlaylistEnabled($auto_playlist_enabled)
    {
        $this->container['auto_playlist_enabled'] = $auto_playlist_enabled;

        return $this;
    }

    /**
     * Gets auto_playlist_repeat
     *
     * @return bool|null
     */
    public function getAutoPlaylistRepeat()
    {
        return $this->container['auto_playlist_repeat'];
    }

    /**
     * Sets auto_playlist_repeat
     *
     * @param bool|null $auto_playlist_repeat auto_playlist_repeat
     *
     * @return self
     */
    public function setAutoPlaylistRepeat($auto_playlist_repeat)
    {
        $this->container['auto_playlist_repeat'] = $auto_playlist_repeat;

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


