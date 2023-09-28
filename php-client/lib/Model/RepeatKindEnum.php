<?php
/**
 * RepeatKindEnum
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
 * OpenAPI Generator version: 7.0.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Libretime\Client\Model;
use \Libretime\Client\ObjectSerializer;

/**
 * RepeatKindEnum Class Doc Comment
 *
 * @category Class
 * @description * &#x60;0&#x60; - Every week * &#x60;1&#x60; - Every 2 weeks * &#x60;4&#x60; - Every 3 weeks * &#x60;5&#x60; - Every 4 weeks * &#x60;2&#x60; - Every month
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class RepeatKindEnum
{
    /**
     * Possible values of this enum
     */
    public const NUMBER_0 = 0;

    public const NUMBER_1 = 1;

    public const NUMBER_4 = 4;

    public const NUMBER_5 = 5;

    public const NUMBER_2 = 2;

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::NUMBER_0,
            self::NUMBER_1,
            self::NUMBER_4,
            self::NUMBER_5,
            self::NUMBER_2
        ];
    }
}


