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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class Show(BaseModel):
    """
    Show
    """ # noqa: E501
    id: StrictInt
    name: Annotated[str, Field(strict=True, max_length=255)]
    description: Optional[Annotated[str, Field(strict=True, max_length=8192)]] = None
    genre: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    url: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    image: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    foreground_color: Optional[Annotated[str, Field(strict=True, max_length=6)]] = None
    background_color: Optional[Annotated[str, Field(strict=True, max_length=6)]] = None
    live_enabled: StrictBool
    linked: StrictBool
    linkable: StrictBool
    auto_playlist: Optional[StrictInt] = None
    auto_playlist_enabled: StrictBool
    auto_playlist_repeat: StrictBool
    intro_playlist: Optional[StrictInt] = None
    override_intro_playlist: StrictBool
    outro_playlist: Optional[StrictInt] = None
    override_outro_playlist: StrictBool
    __properties: ClassVar[List[str]] = ["id", "name", "description", "genre", "url", "image", "foreground_color", "background_color", "live_enabled", "linked", "linkable", "auto_playlist", "auto_playlist_enabled", "auto_playlist_repeat", "intro_playlist", "override_intro_playlist", "outro_playlist", "override_outro_playlist"]

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
        """Create an instance of Show from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        """
        excluded_fields: Set[str] = set([
            "id",
            "live_enabled",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        # set to None if genre (nullable) is None
        # and model_fields_set contains the field
        if self.genre is None and "genre" in self.model_fields_set:
            _dict['genre'] = None

        # set to None if url (nullable) is None
        # and model_fields_set contains the field
        if self.url is None and "url" in self.model_fields_set:
            _dict['url'] = None

        # set to None if image (nullable) is None
        # and model_fields_set contains the field
        if self.image is None and "image" in self.model_fields_set:
            _dict['image'] = None

        # set to None if foreground_color (nullable) is None
        # and model_fields_set contains the field
        if self.foreground_color is None and "foreground_color" in self.model_fields_set:
            _dict['foreground_color'] = None

        # set to None if background_color (nullable) is None
        # and model_fields_set contains the field
        if self.background_color is None and "background_color" in self.model_fields_set:
            _dict['background_color'] = None

        # set to None if auto_playlist (nullable) is None
        # and model_fields_set contains the field
        if self.auto_playlist is None and "auto_playlist" in self.model_fields_set:
            _dict['auto_playlist'] = None

        # set to None if intro_playlist (nullable) is None
        # and model_fields_set contains the field
        if self.intro_playlist is None and "intro_playlist" in self.model_fields_set:
            _dict['intro_playlist'] = None

        # set to None if outro_playlist (nullable) is None
        # and model_fields_set contains the field
        if self.outro_playlist is None and "outro_playlist" in self.model_fields_set:
            _dict['outro_playlist'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Show from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "genre": obj.get("genre"),
            "url": obj.get("url"),
            "image": obj.get("image"),
            "foreground_color": obj.get("foreground_color"),
            "background_color": obj.get("background_color"),
            "live_enabled": obj.get("live_enabled"),
            "linked": obj.get("linked"),
            "linkable": obj.get("linkable"),
            "auto_playlist": obj.get("auto_playlist"),
            "auto_playlist_enabled": obj.get("auto_playlist_enabled"),
            "auto_playlist_repeat": obj.get("auto_playlist_repeat"),
            "intro_playlist": obj.get("intro_playlist"),
            "override_intro_playlist": obj.get("override_intro_playlist"),
            "outro_playlist": obj.get("outro_playlist"),
            "override_outro_playlist": obj.get("override_outro_playlist")
        })
        return _obj


