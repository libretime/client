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

from datetime import datetime
from pydantic import BaseModel, Field, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class PodcastEpisode(BaseModel):
    """
    PodcastEpisode
    """ # noqa: E501
    id: StrictInt
    published_at: datetime
    download_url: Annotated[str, Field(strict=True, max_length=4096)]
    episode_guid: Annotated[str, Field(strict=True, max_length=4096)]
    episode_title: Annotated[str, Field(strict=True, max_length=4096)]
    episode_description: StrictStr
    podcast: StrictInt
    file: Optional[StrictInt] = None
    __properties: ClassVar[List[str]] = ["id", "published_at", "download_url", "episode_guid", "episode_title", "episode_description", "podcast", "file"]

    model_config = {
        "populate_by_name": True,
        "validate_assignment": True,
        "protected_namespaces": (),
    }


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of PodcastEpisode from a JSON string"""
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
        # set to None if file (nullable) is None
        # and model_fields_set contains the field
        if self.file is None and "file" in self.model_fields_set:
            _dict['file'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PodcastEpisode from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "published_at": obj.get("published_at"),
            "download_url": obj.get("download_url"),
            "episode_guid": obj.get("episode_guid"),
            "episode_title": obj.get("episode_title"),
            "episode_description": obj.get("episode_description"),
            "podcast": obj.get("podcast"),
            "file": obj.get("file")
        })
        return _obj


