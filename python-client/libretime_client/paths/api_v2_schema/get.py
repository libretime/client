# coding: utf-8

"""


    Generated by: https://openapi-generator.tech
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from urllib3._collections import HTTPHeaderDict

from libretime_client import api_client, exceptions
from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from libretime_client import schemas  # noqa: F401

from . import path

# Query params


class FormatSchema(
    schemas.EnumBase,
    schemas.StrSchema
):


    class MetaOapg:
        enum_value_to_name = {
            "json": "JSON",
            "yaml": "YAML",
        }
    
    @schemas.classproperty
    def JSON(cls):
        return cls("json")
    
    @schemas.classproperty
    def YAML(cls):
        return cls("yaml")


class LangSchema(
    schemas.EnumBase,
    schemas.StrSchema
):


    class MetaOapg:
        enum_value_to_name = {
            "af": "AF",
            "ar": "AR",
            "ar-dz": "ARDZ",
            "ast": "AST",
            "az": "AZ",
            "be": "BE",
            "bg": "BG",
            "bn": "BN",
            "br": "BR",
            "bs": "BS",
            "ca": "CA",
            "cs": "CS",
            "cy": "CY",
            "da": "DA",
            "de": "DE",
            "dsb": "DSB",
            "el": "EL",
            "en": "EN",
            "en-au": "ENAU",
            "en-gb": "ENGB",
            "eo": "EO",
            "es": "ES",
            "es-ar": "ESAR",
            "es-co": "ESCO",
            "es-mx": "ESMX",
            "es-ni": "ESNI",
            "es-ve": "ESVE",
            "et": "ET",
            "eu": "EU",
            "fa": "FA",
            "fi": "FI",
            "fr": "FR",
            "fy": "FY",
            "ga": "GA",
            "gd": "GD",
            "gl": "GL",
            "he": "HE",
            "hi": "HI",
            "hr": "HR",
            "hsb": "HSB",
            "hu": "HU",
            "hy": "HY",
            "ia": "IA",
            "id": "ID",
            "ig": "IG",
            "io": "IO",
            "is": "IS",
            "it": "IT",
            "ja": "JA",
            "ka": "KA",
            "kab": "KAB",
            "kk": "KK",
            "km": "KM",
            "kn": "KN",
            "ko": "KO",
            "ky": "KY",
            "lb": "LB",
            "lt": "LT",
            "lv": "LV",
            "mk": "MK",
            "ml": "ML",
            "mn": "MN",
            "mr": "MR",
            "my": "MY",
            "nb": "NB",
            "ne": "NE",
            "nl": "NL",
            "nn": "NN",
            "os": "OS",
            "pa": "PA",
            "pl": "PL",
            "pt": "PT",
            "pt-br": "PTBR",
            "ro": "RO",
            "ru": "RU",
            "sk": "SK",
            "sl": "SL",
            "sq": "SQ",
            "sr": "SR",
            "sr-latn": "SRLATN",
            "sv": "SV",
            "sw": "SW",
            "ta": "TA",
            "te": "TE",
            "tg": "TG",
            "th": "TH",
            "tk": "TK",
            "tr": "TR",
            "tt": "TT",
            "udm": "UDM",
            "uk": "UK",
            "ur": "UR",
            "uz": "UZ",
            "vi": "VI",
            "zh-hans": "ZHHANS",
            "zh-hant": "ZHHANT",
        }
    
    @schemas.classproperty
    def AF(cls):
        return cls("af")
    
    @schemas.classproperty
    def AR(cls):
        return cls("ar")
    
    @schemas.classproperty
    def ARDZ(cls):
        return cls("ar-dz")
    
    @schemas.classproperty
    def AST(cls):
        return cls("ast")
    
    @schemas.classproperty
    def AZ(cls):
        return cls("az")
    
    @schemas.classproperty
    def BE(cls):
        return cls("be")
    
    @schemas.classproperty
    def BG(cls):
        return cls("bg")
    
    @schemas.classproperty
    def BN(cls):
        return cls("bn")
    
    @schemas.classproperty
    def BR(cls):
        return cls("br")
    
    @schemas.classproperty
    def BS(cls):
        return cls("bs")
    
    @schemas.classproperty
    def CA(cls):
        return cls("ca")
    
    @schemas.classproperty
    def CS(cls):
        return cls("cs")
    
    @schemas.classproperty
    def CY(cls):
        return cls("cy")
    
    @schemas.classproperty
    def DA(cls):
        return cls("da")
    
    @schemas.classproperty
    def DE(cls):
        return cls("de")
    
    @schemas.classproperty
    def DSB(cls):
        return cls("dsb")
    
    @schemas.classproperty
    def EL(cls):
        return cls("el")
    
    @schemas.classproperty
    def EN(cls):
        return cls("en")
    
    @schemas.classproperty
    def ENAU(cls):
        return cls("en-au")
    
    @schemas.classproperty
    def ENGB(cls):
        return cls("en-gb")
    
    @schemas.classproperty
    def EO(cls):
        return cls("eo")
    
    @schemas.classproperty
    def ES(cls):
        return cls("es")
    
    @schemas.classproperty
    def ESAR(cls):
        return cls("es-ar")
    
    @schemas.classproperty
    def ESCO(cls):
        return cls("es-co")
    
    @schemas.classproperty
    def ESMX(cls):
        return cls("es-mx")
    
    @schemas.classproperty
    def ESNI(cls):
        return cls("es-ni")
    
    @schemas.classproperty
    def ESVE(cls):
        return cls("es-ve")
    
    @schemas.classproperty
    def ET(cls):
        return cls("et")
    
    @schemas.classproperty
    def EU(cls):
        return cls("eu")
    
    @schemas.classproperty
    def FA(cls):
        return cls("fa")
    
    @schemas.classproperty
    def FI(cls):
        return cls("fi")
    
    @schemas.classproperty
    def FR(cls):
        return cls("fr")
    
    @schemas.classproperty
    def FY(cls):
        return cls("fy")
    
    @schemas.classproperty
    def GA(cls):
        return cls("ga")
    
    @schemas.classproperty
    def GD(cls):
        return cls("gd")
    
    @schemas.classproperty
    def GL(cls):
        return cls("gl")
    
    @schemas.classproperty
    def HE(cls):
        return cls("he")
    
    @schemas.classproperty
    def HI(cls):
        return cls("hi")
    
    @schemas.classproperty
    def HR(cls):
        return cls("hr")
    
    @schemas.classproperty
    def HSB(cls):
        return cls("hsb")
    
    @schemas.classproperty
    def HU(cls):
        return cls("hu")
    
    @schemas.classproperty
    def HY(cls):
        return cls("hy")
    
    @schemas.classproperty
    def IA(cls):
        return cls("ia")
    
    @schemas.classproperty
    def ID(cls):
        return cls("id")
    
    @schemas.classproperty
    def IG(cls):
        return cls("ig")
    
    @schemas.classproperty
    def IO(cls):
        return cls("io")
    
    @schemas.classproperty
    def IS(cls):
        return cls("is")
    
    @schemas.classproperty
    def IT(cls):
        return cls("it")
    
    @schemas.classproperty
    def JA(cls):
        return cls("ja")
    
    @schemas.classproperty
    def KA(cls):
        return cls("ka")
    
    @schemas.classproperty
    def KAB(cls):
        return cls("kab")
    
    @schemas.classproperty
    def KK(cls):
        return cls("kk")
    
    @schemas.classproperty
    def KM(cls):
        return cls("km")
    
    @schemas.classproperty
    def KN(cls):
        return cls("kn")
    
    @schemas.classproperty
    def KO(cls):
        return cls("ko")
    
    @schemas.classproperty
    def KY(cls):
        return cls("ky")
    
    @schemas.classproperty
    def LB(cls):
        return cls("lb")
    
    @schemas.classproperty
    def LT(cls):
        return cls("lt")
    
    @schemas.classproperty
    def LV(cls):
        return cls("lv")
    
    @schemas.classproperty
    def MK(cls):
        return cls("mk")
    
    @schemas.classproperty
    def ML(cls):
        return cls("ml")
    
    @schemas.classproperty
    def MN(cls):
        return cls("mn")
    
    @schemas.classproperty
    def MR(cls):
        return cls("mr")
    
    @schemas.classproperty
    def MY(cls):
        return cls("my")
    
    @schemas.classproperty
    def NB(cls):
        return cls("nb")
    
    @schemas.classproperty
    def NE(cls):
        return cls("ne")
    
    @schemas.classproperty
    def NL(cls):
        return cls("nl")
    
    @schemas.classproperty
    def NN(cls):
        return cls("nn")
    
    @schemas.classproperty
    def OS(cls):
        return cls("os")
    
    @schemas.classproperty
    def PA(cls):
        return cls("pa")
    
    @schemas.classproperty
    def PL(cls):
        return cls("pl")
    
    @schemas.classproperty
    def PT(cls):
        return cls("pt")
    
    @schemas.classproperty
    def PTBR(cls):
        return cls("pt-br")
    
    @schemas.classproperty
    def RO(cls):
        return cls("ro")
    
    @schemas.classproperty
    def RU(cls):
        return cls("ru")
    
    @schemas.classproperty
    def SK(cls):
        return cls("sk")
    
    @schemas.classproperty
    def SL(cls):
        return cls("sl")
    
    @schemas.classproperty
    def SQ(cls):
        return cls("sq")
    
    @schemas.classproperty
    def SR(cls):
        return cls("sr")
    
    @schemas.classproperty
    def SRLATN(cls):
        return cls("sr-latn")
    
    @schemas.classproperty
    def SV(cls):
        return cls("sv")
    
    @schemas.classproperty
    def SW(cls):
        return cls("sw")
    
    @schemas.classproperty
    def TA(cls):
        return cls("ta")
    
    @schemas.classproperty
    def TE(cls):
        return cls("te")
    
    @schemas.classproperty
    def TG(cls):
        return cls("tg")
    
    @schemas.classproperty
    def TH(cls):
        return cls("th")
    
    @schemas.classproperty
    def TK(cls):
        return cls("tk")
    
    @schemas.classproperty
    def TR(cls):
        return cls("tr")
    
    @schemas.classproperty
    def TT(cls):
        return cls("tt")
    
    @schemas.classproperty
    def UDM(cls):
        return cls("udm")
    
    @schemas.classproperty
    def UK(cls):
        return cls("uk")
    
    @schemas.classproperty
    def UR(cls):
        return cls("ur")
    
    @schemas.classproperty
    def UZ(cls):
        return cls("uz")
    
    @schemas.classproperty
    def VI(cls):
        return cls("vi")
    
    @schemas.classproperty
    def ZHHANS(cls):
        return cls("zh-hans")
    
    @schemas.classproperty
    def ZHHANT(cls):
        return cls("zh-hant")
RequestRequiredQueryParams = typing_extensions.TypedDict(
    'RequestRequiredQueryParams',
    {
    }
)
RequestOptionalQueryParams = typing_extensions.TypedDict(
    'RequestOptionalQueryParams',
    {
        'format': typing.Union[FormatSchema, str, ],
        'lang': typing.Union[LangSchema, str, ],
    },
    total=False
)


class RequestQueryParams(RequestRequiredQueryParams, RequestOptionalQueryParams):
    pass


request_query_format = api_client.QueryParameter(
    name="format",
    style=api_client.ParameterStyle.FORM,
    schema=FormatSchema,
    explode=True,
)
request_query_lang = api_client.QueryParameter(
    name="lang",
    style=api_client.ParameterStyle.FORM,
    schema=LangSchema,
    explode=True,
)
_auth = [
    'basicAuth',
    'cookieAuth',
]


class SchemaFor200ResponseBodyApplicationVndOaiOpenapi(
    schemas.DictSchema
):


    class MetaOapg:
        additional_properties = schemas.AnyTypeSchema
    
    def __getitem__(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    def get_item_oapg(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'SchemaFor200ResponseBodyApplicationVndOaiOpenapi':
        return super().__new__(
            cls,
            *args,
            _configuration=_configuration,
            **kwargs,
        )


class SchemaFor200ResponseBodyApplicationYaml(
    schemas.DictSchema
):


    class MetaOapg:
        additional_properties = schemas.AnyTypeSchema
    
    def __getitem__(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    def get_item_oapg(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'SchemaFor200ResponseBodyApplicationYaml':
        return super().__new__(
            cls,
            *args,
            _configuration=_configuration,
            **kwargs,
        )


class SchemaFor200ResponseBodyApplicationVndOaiOpenapijson(
    schemas.DictSchema
):


    class MetaOapg:
        additional_properties = schemas.AnyTypeSchema
    
    def __getitem__(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    def get_item_oapg(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'SchemaFor200ResponseBodyApplicationVndOaiOpenapijson':
        return super().__new__(
            cls,
            *args,
            _configuration=_configuration,
            **kwargs,
        )


class SchemaFor200ResponseBodyApplicationJson(
    schemas.DictSchema
):


    class MetaOapg:
        additional_properties = schemas.AnyTypeSchema
    
    def __getitem__(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    def get_item_oapg(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'SchemaFor200ResponseBodyApplicationJson':
        return super().__new__(
            cls,
            *args,
            _configuration=_configuration,
            **kwargs,
        )


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    response: urllib3.HTTPResponse
    body: typing.Union[
        SchemaFor200ResponseBodyApplicationVndOaiOpenapi,
        SchemaFor200ResponseBodyApplicationYaml,
        SchemaFor200ResponseBodyApplicationVndOaiOpenapijson,
        SchemaFor200ResponseBodyApplicationJson,
    ]
    headers: schemas.Unset = schemas.unset


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    content={
        'application/vnd.oai.openapi': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationVndOaiOpenapi),
        'application/yaml': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationYaml),
        'application/vnd.oai.openapi+json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationVndOaiOpenapijson),
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
_status_code_to_response = {
    '200': _response_for_200,
}
_all_accept_content_types = (
    'application/vnd.oai.openapi',
    'application/yaml',
    'application/vnd.oai.openapi+json',
    'application/json',
)


class BaseApi(api_client.Api):
    @typing.overload
    def _schema_retrieve_oapg(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: typing_extensions.Literal[False] = ...,
    ) -> typing.Union[
        ApiResponseFor200,
    ]: ...

    @typing.overload
    def _schema_retrieve_oapg(
        self,
        skip_deserialization: typing_extensions.Literal[True],
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
    ) -> api_client.ApiResponseWithoutDeserialization: ...

    @typing.overload
    def _schema_retrieve_oapg(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: bool = ...,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]: ...

    def _schema_retrieve_oapg(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: bool = False,
    ):
        """
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestQueryParams, query_params)
        used_path = path.value

        prefix_separator_iterator = None
        for parameter in (
            request_query_format,
            request_query_lang,
        ):
            parameter_data = query_params.get(parameter.name, schemas.unset)
            if parameter_data is schemas.unset:
                continue
            if prefix_separator_iterator is None:
                prefix_separator_iterator = parameter.get_prefix_separator_iterator()
            serialized_data = parameter.serialize(parameter_data, prefix_separator_iterator)
            for serialized_value in serialized_data.values():
                used_path += serialized_value

        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)

        response = self.api_client.call_api(
            resource_path=used_path,
            method='get'.upper(),
            headers=_headers,
            auth_settings=_auth,
            stream=stream,
            timeout=timeout,
        )

        if skip_deserialization:
            api_response = api_client.ApiResponseWithoutDeserialization(response=response)
        else:
            response_for_status = _status_code_to_response.get(str(response.status))
            if response_for_status:
                api_response = response_for_status.deserialize(response, self.api_client.configuration)
            else:
                api_response = api_client.ApiResponseWithoutDeserialization(response=response)

        if not 200 <= response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)

        return api_response


class SchemaRetrieve(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    @typing.overload
    def schema_retrieve(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: typing_extensions.Literal[False] = ...,
    ) -> typing.Union[
        ApiResponseFor200,
    ]: ...

    @typing.overload
    def schema_retrieve(
        self,
        skip_deserialization: typing_extensions.Literal[True],
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
    ) -> api_client.ApiResponseWithoutDeserialization: ...

    @typing.overload
    def schema_retrieve(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: bool = ...,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]: ...

    def schema_retrieve(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: bool = False,
    ):
        return self._schema_retrieve_oapg(
            query_params=query_params,
            accept_content_types=accept_content_types,
            stream=stream,
            timeout=timeout,
            skip_deserialization=skip_deserialization
        )


class ApiForget(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    @typing.overload
    def get(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: typing_extensions.Literal[False] = ...,
    ) -> typing.Union[
        ApiResponseFor200,
    ]: ...

    @typing.overload
    def get(
        self,
        skip_deserialization: typing_extensions.Literal[True],
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
    ) -> api_client.ApiResponseWithoutDeserialization: ...

    @typing.overload
    def get(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: bool = ...,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]: ...

    def get(
        self,
        query_params: RequestQueryParams = frozendict.frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: bool = False,
    ):
        return self._schema_retrieve_oapg(
            query_params=query_params,
            accept_content_types=accept_content_types,
            stream=stream,
            timeout=timeout,
            skip_deserialization=skip_deserialization
        )


