# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictInt
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class PatchedPodcast(BaseModel):
    """
    PatchedPodcast
    """ # noqa: E501
    id: Optional[StrictInt] = None
    url: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    title: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    creator: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    description: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    language: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    copyright: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    link: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    itunes_author: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    itunes_keywords: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    itunes_summary: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    itunes_subtitle: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    itunes_category: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    itunes_explicit: Optional[Annotated[str, Field(strict=True, max_length=4096)]] = None
    owner: Optional[StrictInt] = None
    __properties: ClassVar[List[str]] = ["id", "url", "title", "creator", "description", "language", "copyright", "link", "itunes_author", "itunes_keywords", "itunes_summary", "itunes_subtitle", "itunes_category", "itunes_explicit", "owner"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of PatchedPodcast from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * OpenAPI `readOnly` fields are excluded.
        """
        excluded_fields: Set[str] = set([
            "id",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # set to None if creator (nullable) is None
        # and model_fields_set contains the field
        if self.creator is None and "creator" in self.model_fields_set:
            _dict['creator'] = None

        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        # set to None if language (nullable) is None
        # and model_fields_set contains the field
        if self.language is None and "language" in self.model_fields_set:
            _dict['language'] = None

        # set to None if copyright (nullable) is None
        # and model_fields_set contains the field
        if self.copyright is None and "copyright" in self.model_fields_set:
            _dict['copyright'] = None

        # set to None if link (nullable) is None
        # and model_fields_set contains the field
        if self.link is None and "link" in self.model_fields_set:
            _dict['link'] = None

        # set to None if itunes_author (nullable) is None
        # and model_fields_set contains the field
        if self.itunes_author is None and "itunes_author" in self.model_fields_set:
            _dict['itunes_author'] = None

        # set to None if itunes_keywords (nullable) is None
        # and model_fields_set contains the field
        if self.itunes_keywords is None and "itunes_keywords" in self.model_fields_set:
            _dict['itunes_keywords'] = None

        # set to None if itunes_summary (nullable) is None
        # and model_fields_set contains the field
        if self.itunes_summary is None and "itunes_summary" in self.model_fields_set:
            _dict['itunes_summary'] = None

        # set to None if itunes_subtitle (nullable) is None
        # and model_fields_set contains the field
        if self.itunes_subtitle is None and "itunes_subtitle" in self.model_fields_set:
            _dict['itunes_subtitle'] = None

        # set to None if itunes_category (nullable) is None
        # and model_fields_set contains the field
        if self.itunes_category is None and "itunes_category" in self.model_fields_set:
            _dict['itunes_category'] = None

        # set to None if itunes_explicit (nullable) is None
        # and model_fields_set contains the field
        if self.itunes_explicit is None and "itunes_explicit" in self.model_fields_set:
            _dict['itunes_explicit'] = None

        # set to None if owner (nullable) is None
        # and model_fields_set contains the field
        if self.owner is None and "owner" in self.model_fields_set:
            _dict['owner'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PatchedPodcast from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "url": obj.get("url"),
            "title": obj.get("title"),
            "creator": obj.get("creator"),
            "description": obj.get("description"),
            "language": obj.get("language"),
            "copyright": obj.get("copyright"),
            "link": obj.get("link"),
            "itunes_author": obj.get("itunes_author"),
            "itunes_keywords": obj.get("itunes_keywords"),
            "itunes_summary": obj.get("itunes_summary"),
            "itunes_subtitle": obj.get("itunes_subtitle"),
            "itunes_category": obj.get("itunes_category"),
            "itunes_explicit": obj.get("itunes_explicit"),
            "owner": obj.get("owner")
        })
        return _obj


