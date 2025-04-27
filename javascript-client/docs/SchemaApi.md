# SchemaApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**schemaRetrieve**](#schemaretrieve) | **GET** /api/v2/schema | |

# **schemaRetrieve**
> { [key: string]: any; } schemaRetrieve()

OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

### Example

```typescript
import {
    SchemaApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SchemaApi(configuration);

let format: 'json' | 'yaml'; // (optional) (default to undefined)
let lang: 'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'ckb' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant'; // (optional) (default to undefined)

const { status, data } = await apiInstance.schemaRetrieve(
    format,
    lang
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **format** | [**&#39;json&#39; | &#39;yaml&#39;**]**Array<&#39;json&#39; &#124; &#39;yaml&#39;>** |  | (optional) defaults to undefined|
| **lang** | [**&#39;af&#39; | &#39;ar&#39; | &#39;ar-dz&#39; | &#39;ast&#39; | &#39;az&#39; | &#39;be&#39; | &#39;bg&#39; | &#39;bn&#39; | &#39;br&#39; | &#39;bs&#39; | &#39;ca&#39; | &#39;ckb&#39; | &#39;cs&#39; | &#39;cy&#39; | &#39;da&#39; | &#39;de&#39; | &#39;dsb&#39; | &#39;el&#39; | &#39;en&#39; | &#39;en-au&#39; | &#39;en-gb&#39; | &#39;eo&#39; | &#39;es&#39; | &#39;es-ar&#39; | &#39;es-co&#39; | &#39;es-mx&#39; | &#39;es-ni&#39; | &#39;es-ve&#39; | &#39;et&#39; | &#39;eu&#39; | &#39;fa&#39; | &#39;fi&#39; | &#39;fr&#39; | &#39;fy&#39; | &#39;ga&#39; | &#39;gd&#39; | &#39;gl&#39; | &#39;he&#39; | &#39;hi&#39; | &#39;hr&#39; | &#39;hsb&#39; | &#39;hu&#39; | &#39;hy&#39; | &#39;ia&#39; | &#39;id&#39; | &#39;ig&#39; | &#39;io&#39; | &#39;is&#39; | &#39;it&#39; | &#39;ja&#39; | &#39;ka&#39; | &#39;kab&#39; | &#39;kk&#39; | &#39;km&#39; | &#39;kn&#39; | &#39;ko&#39; | &#39;ky&#39; | &#39;lb&#39; | &#39;lt&#39; | &#39;lv&#39; | &#39;mk&#39; | &#39;ml&#39; | &#39;mn&#39; | &#39;mr&#39; | &#39;ms&#39; | &#39;my&#39; | &#39;nb&#39; | &#39;ne&#39; | &#39;nl&#39; | &#39;nn&#39; | &#39;os&#39; | &#39;pa&#39; | &#39;pl&#39; | &#39;pt&#39; | &#39;pt-br&#39; | &#39;ro&#39; | &#39;ru&#39; | &#39;sk&#39; | &#39;sl&#39; | &#39;sq&#39; | &#39;sr&#39; | &#39;sr-latn&#39; | &#39;sv&#39; | &#39;sw&#39; | &#39;ta&#39; | &#39;te&#39; | &#39;tg&#39; | &#39;th&#39; | &#39;tk&#39; | &#39;tr&#39; | &#39;tt&#39; | &#39;udm&#39; | &#39;uk&#39; | &#39;ur&#39; | &#39;uz&#39; | &#39;vi&#39; | &#39;zh-hans&#39; | &#39;zh-hant&#39;**]**Array<&#39;af&#39; &#124; &#39;ar&#39; &#124; &#39;ar-dz&#39; &#124; &#39;ast&#39; &#124; &#39;az&#39; &#124; &#39;be&#39; &#124; &#39;bg&#39; &#124; &#39;bn&#39; &#124; &#39;br&#39; &#124; &#39;bs&#39; &#124; &#39;ca&#39; &#124; &#39;ckb&#39; &#124; &#39;cs&#39; &#124; &#39;cy&#39; &#124; &#39;da&#39; &#124; &#39;de&#39; &#124; &#39;dsb&#39; &#124; &#39;el&#39; &#124; &#39;en&#39; &#124; &#39;en-au&#39; &#124; &#39;en-gb&#39; &#124; &#39;eo&#39; &#124; &#39;es&#39; &#124; &#39;es-ar&#39; &#124; &#39;es-co&#39; &#124; &#39;es-mx&#39; &#124; &#39;es-ni&#39; &#124; &#39;es-ve&#39; &#124; &#39;et&#39; &#124; &#39;eu&#39; &#124; &#39;fa&#39; &#124; &#39;fi&#39; &#124; &#39;fr&#39; &#124; &#39;fy&#39; &#124; &#39;ga&#39; &#124; &#39;gd&#39; &#124; &#39;gl&#39; &#124; &#39;he&#39; &#124; &#39;hi&#39; &#124; &#39;hr&#39; &#124; &#39;hsb&#39; &#124; &#39;hu&#39; &#124; &#39;hy&#39; &#124; &#39;ia&#39; &#124; &#39;id&#39; &#124; &#39;ig&#39; &#124; &#39;io&#39; &#124; &#39;is&#39; &#124; &#39;it&#39; &#124; &#39;ja&#39; &#124; &#39;ka&#39; &#124; &#39;kab&#39; &#124; &#39;kk&#39; &#124; &#39;km&#39; &#124; &#39;kn&#39; &#124; &#39;ko&#39; &#124; &#39;ky&#39; &#124; &#39;lb&#39; &#124; &#39;lt&#39; &#124; &#39;lv&#39; &#124; &#39;mk&#39; &#124; &#39;ml&#39; &#124; &#39;mn&#39; &#124; &#39;mr&#39; &#124; &#39;ms&#39; &#124; &#39;my&#39; &#124; &#39;nb&#39; &#124; &#39;ne&#39; &#124; &#39;nl&#39; &#124; &#39;nn&#39; &#124; &#39;os&#39; &#124; &#39;pa&#39; &#124; &#39;pl&#39; &#124; &#39;pt&#39; &#124; &#39;pt-br&#39; &#124; &#39;ro&#39; &#124; &#39;ru&#39; &#124; &#39;sk&#39; &#124; &#39;sl&#39; &#124; &#39;sq&#39; &#124; &#39;sr&#39; &#124; &#39;sr-latn&#39; &#124; &#39;sv&#39; &#124; &#39;sw&#39; &#124; &#39;ta&#39; &#124; &#39;te&#39; &#124; &#39;tg&#39; &#124; &#39;th&#39; &#124; &#39;tk&#39; &#124; &#39;tr&#39; &#124; &#39;tt&#39; &#124; &#39;udm&#39; &#124; &#39;uk&#39; &#124; &#39;ur&#39; &#124; &#39;uz&#39; &#124; &#39;vi&#39; &#124; &#39;zh-hans&#39; &#124; &#39;zh-hant&#39;>** |  | (optional) defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

