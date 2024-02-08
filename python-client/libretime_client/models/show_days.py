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

from datetime import date
from pydantic import BaseModel, Field, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from libretime_client.models.record_enabled_enum import RecordEnabledEnum
from libretime_client.models.repeat_kind_enum import RepeatKindEnum
from libretime_client.models.week_day_enum import WeekDayEnum
from typing import Optional, Set
from typing_extensions import Self

class ShowDays(BaseModel):
    """
    ShowDays
    """ # noqa: E501
    id: StrictInt
    first_show_on: date
    last_show_on: Optional[date] = None
    start_time: StrictStr
    timezone: Annotated[str, Field(strict=True, max_length=1024)]
    duration: Annotated[str, Field(strict=True, max_length=1024)]
    record_enabled: Optional[RecordEnabledEnum] = None
    week_day: Optional[WeekDayEnum] = None
    repeat_kind: RepeatKindEnum
    repeat_next_on: Optional[date] = None
    show: StrictInt
    __properties: ClassVar[List[str]] = ["id", "first_show_on", "last_show_on", "start_time", "timezone", "duration", "record_enabled", "week_day", "repeat_kind", "repeat_next_on", "show"]

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
        """Create an instance of ShowDays from a JSON string"""
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
        # set to None if last_show_on (nullable) is None
        # and model_fields_set contains the field
        if self.last_show_on is None and "last_show_on" in self.model_fields_set:
            _dict['last_show_on'] = None

        # set to None if record_enabled (nullable) is None
        # and model_fields_set contains the field
        if self.record_enabled is None and "record_enabled" in self.model_fields_set:
            _dict['record_enabled'] = None

        # set to None if week_day (nullable) is None
        # and model_fields_set contains the field
        if self.week_day is None and "week_day" in self.model_fields_set:
            _dict['week_day'] = None

        # set to None if repeat_next_on (nullable) is None
        # and model_fields_set contains the field
        if self.repeat_next_on is None and "repeat_next_on" in self.model_fields_set:
            _dict['repeat_next_on'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ShowDays from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "first_show_on": obj.get("first_show_on"),
            "last_show_on": obj.get("last_show_on"),
            "start_time": obj.get("start_time"),
            "timezone": obj.get("timezone"),
            "duration": obj.get("duration"),
            "record_enabled": obj.get("record_enabled"),
            "week_day": obj.get("week_day"),
            "repeat_kind": obj.get("repeat_kind"),
            "repeat_next_on": obj.get("repeat_next_on"),
            "show": obj.get("show")
        })
        return _obj


