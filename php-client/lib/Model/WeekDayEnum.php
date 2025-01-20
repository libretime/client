<?php
/**
 * WeekDayEnum
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
 * Generator version: 7.11.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Libretime\Client\Model;
use \Libretime\Client\ObjectSerializer;

/**
 * WeekDayEnum Class Doc Comment
 *
 * @category Class
 * @description * &#x60;0&#x60; - Monday * &#x60;1&#x60; - Tuesday * &#x60;2&#x60; - Wednesday * &#x60;3&#x60; - Thursday * &#x60;4&#x60; - Friday * &#x60;5&#x60; - Saturday * &#x60;6&#x60; - Sunday
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class WeekDayEnum
{
    /**
     * Possible values of this enum
     */
    public const NUMBER_0 = 0;

    public const NUMBER_1 = 1;

    public const NUMBER_2 = 2;

    public const NUMBER_3 = 3;

    public const NUMBER_4 = 4;

    public const NUMBER_5 = 5;

    public const NUMBER_6 = 6;

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::NUMBER_0,
            self::NUMBER_1,
            self::NUMBER_2,
            self::NUMBER_3,
            self::NUMBER_4,
            self::NUMBER_5,
            self::NUMBER_6
        ];
    }
}


