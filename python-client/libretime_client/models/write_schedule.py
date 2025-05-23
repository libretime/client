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
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from libretime_client.models.position_status_enum import PositionStatusEnum
from typing import Optional, Set
from typing_extensions import Self

class WriteSchedule(BaseModel):
    """
    WriteSchedule
    """ # noqa: E501
    id: StrictInt
    starts_at: datetime
    ends_at: datetime
    length: Optional[StrictStr] = None
    fade_in: Optional[StrictStr] = None
    fade_out: Optional[StrictStr] = None
    cue_in: StrictStr
    cue_out: StrictStr
    position: Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]
    position_status: Optional[PositionStatusEnum] = None
    broadcasted: Annotated[int, Field(le=32767, strict=True, ge=-32768)]
    played: Optional[StrictBool] = None
    instance: StrictInt
    file: Optional[StrictInt] = None
    stream: Optional[StrictInt] = None
    __properties: ClassVar[List[str]] = ["id", "starts_at", "ends_at", "length", "fade_in", "fade_out", "cue_in", "cue_out", "position", "position_status", "broadcasted", "played", "instance", "file", "stream"]

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
        """Create an instance of WriteSchedule from a JSON string"""
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
        # set to None if length (nullable) is None
        # and model_fields_set contains the field
        if self.length is None and "length" in self.model_fields_set:
            _dict['length'] = None

        # set to None if fade_in (nullable) is None
        # and model_fields_set contains the field
        if self.fade_in is None and "fade_in" in self.model_fields_set:
            _dict['fade_in'] = None

        # set to None if fade_out (nullable) is None
        # and model_fields_set contains the field
        if self.fade_out is None and "fade_out" in self.model_fields_set:
            _dict['fade_out'] = None

        # set to None if played (nullable) is None
        # and model_fields_set contains the field
        if self.played is None and "played" in self.model_fields_set:
            _dict['played'] = None

        # set to None if file (nullable) is None
        # and model_fields_set contains the field
        if self.file is None and "file" in self.model_fields_set:
            _dict['file'] = None

        # set to None if stream (nullable) is None
        # and model_fields_set contains the field
        if self.stream is None and "stream" in self.model_fields_set:
            _dict['stream'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of WriteSchedule from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "starts_at": obj.get("starts_at"),
            "ends_at": obj.get("ends_at"),
            "length": obj.get("length"),
            "fade_in": obj.get("fade_in"),
            "fade_out": obj.get("fade_out"),
            "cue_in": obj.get("cue_in"),
            "cue_out": obj.get("cue_out"),
            "position": obj.get("position"),
            "position_status": obj.get("position_status"),
            "broadcasted": obj.get("broadcasted"),
            "played": obj.get("played"),
            "instance": obj.get("instance"),
            "file": obj.get("file"),
            "stream": obj.get("stream")
        })
        return _obj


