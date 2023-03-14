<?php
/**
 * RoleEnum
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
 * OpenAPI Generator version: 6.4.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Libretime\Client\Model;
use \Libretime\Client\ObjectSerializer;

/**
 * RoleEnum Class Doc Comment
 *
 * @category Class
 * @description * &#x60;G&#x60; - Guest * &#x60;H&#x60; - Host * &#x60;P&#x60; - Manager * &#x60;A&#x60; - Admin
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class RoleEnum
{
    /**
     * Possible values of this enum
     */
    public const G = 'G';

    public const H = 'H';

    public const P = 'P';

    public const A = 'A';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::G,
            self::H,
            self::P,
            self::A
        ];
    }
}


