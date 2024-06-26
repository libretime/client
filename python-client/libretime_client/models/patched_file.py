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
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from libretime_client.models.file_import_status_enum import FileImportStatusEnum
from typing import Optional, Set
from typing_extensions import Self

class PatchedFile(BaseModel):
    """
    PatchedFile
    """ # noqa: E501
    id: Optional[StrictInt] = None
    import_status: Optional[FileImportStatusEnum] = None
    filepath: Optional[StrictStr] = None
    size: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    exists: Optional[StrictBool] = None
    mime: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    md5: Optional[Annotated[str, Field(strict=True, max_length=32)]] = None
    hidden: Optional[StrictBool] = None
    accessed: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    scheduled: Optional[StrictBool] = None
    part_of_list: Optional[StrictBool] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    last_played_at: Optional[datetime] = None
    bit_rate: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    sample_rate: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    format: Optional[Annotated[str, Field(strict=True, max_length=128)]] = None
    channels: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    length: Optional[StrictStr] = None
    bpm: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    replay_gain: Optional[Annotated[str, Field(strict=True)]] = None
    cue_in: Optional[StrictStr] = None
    cue_out: Optional[StrictStr] = None
    name: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    description: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    artwork: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    artist_name: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    artist_url: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    original_artist: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    album_title: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    track_title: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    genre: Optional[Annotated[str, Field(strict=True, max_length=64)]] = None
    mood: Optional[Annotated[str, Field(strict=True, max_length=64)]] = None
    var_date: Optional[Annotated[str, Field(strict=True, max_length=16)]] = Field(default=None, alias="date")
    track_number: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    disc_number: Optional[Annotated[str, Field(strict=True, max_length=8)]] = None
    comment: Optional[StrictStr] = None
    language: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    label: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    copyright: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    composer: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    conductor: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    orchestra: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    encoder: Optional[Annotated[str, Field(strict=True, max_length=64)]] = None
    encoded_by: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    isrc: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    lyrics: Optional[StrictStr] = None
    lyricist: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    original_lyricist: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    subject: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    contributor: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    rating: Optional[Annotated[str, Field(strict=True, max_length=8)]] = None
    url: Optional[Annotated[str, Field(strict=True, max_length=1024)]] = None
    info_url: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    audio_source_url: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    buy_this_url: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    catalog_number: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    radio_station_name: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    radio_station_url: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    report_datetime: Optional[Annotated[str, Field(strict=True, max_length=32)]] = None
    report_location: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    report_organization: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    library: Optional[StrictInt] = None
    owner: Optional[StrictInt] = None
    edited_by: Optional[StrictInt] = None
    __properties: ClassVar[List[str]] = ["id", "import_status", "filepath", "size", "exists", "mime", "md5", "hidden", "accessed", "scheduled", "part_of_list", "created_at", "updated_at", "last_played_at", "bit_rate", "sample_rate", "format", "channels", "length", "bpm", "replay_gain", "cue_in", "cue_out", "name", "description", "artwork", "artist_name", "artist_url", "original_artist", "album_title", "track_title", "genre", "mood", "date", "track_number", "disc_number", "comment", "language", "label", "copyright", "composer", "conductor", "orchestra", "encoder", "encoded_by", "isrc", "lyrics", "lyricist", "original_lyricist", "subject", "contributor", "rating", "url", "info_url", "audio_source_url", "buy_this_url", "catalog_number", "radio_station_name", "radio_station_url", "report_datetime", "report_location", "report_organization", "library", "owner", "edited_by"]

    @field_validator('replay_gain')
    def replay_gain_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^-?\d{0,6}(?:\.\d{0,2})?$", value):
            raise ValueError(r"must validate the regular expression /^-?\d{0,6}(?:\.\d{0,2})?$/")
        return value

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
        """Create an instance of PatchedFile from a JSON string"""
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
        # set to None if filepath (nullable) is None
        # and model_fields_set contains the field
        if self.filepath is None and "filepath" in self.model_fields_set:
            _dict['filepath'] = None

        # set to None if exists (nullable) is None
        # and model_fields_set contains the field
        if self.exists is None and "exists" in self.model_fields_set:
            _dict['exists'] = None

        # set to None if md5 (nullable) is None
        # and model_fields_set contains the field
        if self.md5 is None and "md5" in self.model_fields_set:
            _dict['md5'] = None

        # set to None if hidden (nullable) is None
        # and model_fields_set contains the field
        if self.hidden is None and "hidden" in self.model_fields_set:
            _dict['hidden'] = None

        # set to None if scheduled (nullable) is None
        # and model_fields_set contains the field
        if self.scheduled is None and "scheduled" in self.model_fields_set:
            _dict['scheduled'] = None

        # set to None if part_of_list (nullable) is None
        # and model_fields_set contains the field
        if self.part_of_list is None and "part_of_list" in self.model_fields_set:
            _dict['part_of_list'] = None

        # set to None if created_at (nullable) is None
        # and model_fields_set contains the field
        if self.created_at is None and "created_at" in self.model_fields_set:
            _dict['created_at'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        # set to None if last_played_at (nullable) is None
        # and model_fields_set contains the field
        if self.last_played_at is None and "last_played_at" in self.model_fields_set:
            _dict['last_played_at'] = None

        # set to None if bit_rate (nullable) is None
        # and model_fields_set contains the field
        if self.bit_rate is None and "bit_rate" in self.model_fields_set:
            _dict['bit_rate'] = None

        # set to None if sample_rate (nullable) is None
        # and model_fields_set contains the field
        if self.sample_rate is None and "sample_rate" in self.model_fields_set:
            _dict['sample_rate'] = None

        # set to None if format (nullable) is None
        # and model_fields_set contains the field
        if self.format is None and "format" in self.model_fields_set:
            _dict['format'] = None

        # set to None if channels (nullable) is None
        # and model_fields_set contains the field
        if self.channels is None and "channels" in self.model_fields_set:
            _dict['channels'] = None

        # set to None if length (nullable) is None
        # and model_fields_set contains the field
        if self.length is None and "length" in self.model_fields_set:
            _dict['length'] = None

        # set to None if bpm (nullable) is None
        # and model_fields_set contains the field
        if self.bpm is None and "bpm" in self.model_fields_set:
            _dict['bpm'] = None

        # set to None if replay_gain (nullable) is None
        # and model_fields_set contains the field
        if self.replay_gain is None and "replay_gain" in self.model_fields_set:
            _dict['replay_gain'] = None

        # set to None if cue_in (nullable) is None
        # and model_fields_set contains the field
        if self.cue_in is None and "cue_in" in self.model_fields_set:
            _dict['cue_in'] = None

        # set to None if cue_out (nullable) is None
        # and model_fields_set contains the field
        if self.cue_out is None and "cue_out" in self.model_fields_set:
            _dict['cue_out'] = None

        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        # set to None if artwork (nullable) is None
        # and model_fields_set contains the field
        if self.artwork is None and "artwork" in self.model_fields_set:
            _dict['artwork'] = None

        # set to None if artist_name (nullable) is None
        # and model_fields_set contains the field
        if self.artist_name is None and "artist_name" in self.model_fields_set:
            _dict['artist_name'] = None

        # set to None if artist_url (nullable) is None
        # and model_fields_set contains the field
        if self.artist_url is None and "artist_url" in self.model_fields_set:
            _dict['artist_url'] = None

        # set to None if original_artist (nullable) is None
        # and model_fields_set contains the field
        if self.original_artist is None and "original_artist" in self.model_fields_set:
            _dict['original_artist'] = None

        # set to None if album_title (nullable) is None
        # and model_fields_set contains the field
        if self.album_title is None and "album_title" in self.model_fields_set:
            _dict['album_title'] = None

        # set to None if track_title (nullable) is None
        # and model_fields_set contains the field
        if self.track_title is None and "track_title" in self.model_fields_set:
            _dict['track_title'] = None

        # set to None if genre (nullable) is None
        # and model_fields_set contains the field
        if self.genre is None and "genre" in self.model_fields_set:
            _dict['genre'] = None

        # set to None if mood (nullable) is None
        # and model_fields_set contains the field
        if self.mood is None and "mood" in self.model_fields_set:
            _dict['mood'] = None

        # set to None if var_date (nullable) is None
        # and model_fields_set contains the field
        if self.var_date is None and "var_date" in self.model_fields_set:
            _dict['date'] = None

        # set to None if track_number (nullable) is None
        # and model_fields_set contains the field
        if self.track_number is None and "track_number" in self.model_fields_set:
            _dict['track_number'] = None

        # set to None if disc_number (nullable) is None
        # and model_fields_set contains the field
        if self.disc_number is None and "disc_number" in self.model_fields_set:
            _dict['disc_number'] = None

        # set to None if comment (nullable) is None
        # and model_fields_set contains the field
        if self.comment is None and "comment" in self.model_fields_set:
            _dict['comment'] = None

        # set to None if language (nullable) is None
        # and model_fields_set contains the field
        if self.language is None and "language" in self.model_fields_set:
            _dict['language'] = None

        # set to None if label (nullable) is None
        # and model_fields_set contains the field
        if self.label is None and "label" in self.model_fields_set:
            _dict['label'] = None

        # set to None if copyright (nullable) is None
        # and model_fields_set contains the field
        if self.copyright is None and "copyright" in self.model_fields_set:
            _dict['copyright'] = None

        # set to None if composer (nullable) is None
        # and model_fields_set contains the field
        if self.composer is None and "composer" in self.model_fields_set:
            _dict['composer'] = None

        # set to None if conductor (nullable) is None
        # and model_fields_set contains the field
        if self.conductor is None and "conductor" in self.model_fields_set:
            _dict['conductor'] = None

        # set to None if orchestra (nullable) is None
        # and model_fields_set contains the field
        if self.orchestra is None and "orchestra" in self.model_fields_set:
            _dict['orchestra'] = None

        # set to None if encoder (nullable) is None
        # and model_fields_set contains the field
        if self.encoder is None and "encoder" in self.model_fields_set:
            _dict['encoder'] = None

        # set to None if encoded_by (nullable) is None
        # and model_fields_set contains the field
        if self.encoded_by is None and "encoded_by" in self.model_fields_set:
            _dict['encoded_by'] = None

        # set to None if isrc (nullable) is None
        # and model_fields_set contains the field
        if self.isrc is None and "isrc" in self.model_fields_set:
            _dict['isrc'] = None

        # set to None if lyrics (nullable) is None
        # and model_fields_set contains the field
        if self.lyrics is None and "lyrics" in self.model_fields_set:
            _dict['lyrics'] = None

        # set to None if lyricist (nullable) is None
        # and model_fields_set contains the field
        if self.lyricist is None and "lyricist" in self.model_fields_set:
            _dict['lyricist'] = None

        # set to None if original_lyricist (nullable) is None
        # and model_fields_set contains the field
        if self.original_lyricist is None and "original_lyricist" in self.model_fields_set:
            _dict['original_lyricist'] = None

        # set to None if subject (nullable) is None
        # and model_fields_set contains the field
        if self.subject is None and "subject" in self.model_fields_set:
            _dict['subject'] = None

        # set to None if contributor (nullable) is None
        # and model_fields_set contains the field
        if self.contributor is None and "contributor" in self.model_fields_set:
            _dict['contributor'] = None

        # set to None if rating (nullable) is None
        # and model_fields_set contains the field
        if self.rating is None and "rating" in self.model_fields_set:
            _dict['rating'] = None

        # set to None if url (nullable) is None
        # and model_fields_set contains the field
        if self.url is None and "url" in self.model_fields_set:
            _dict['url'] = None

        # set to None if info_url (nullable) is None
        # and model_fields_set contains the field
        if self.info_url is None and "info_url" in self.model_fields_set:
            _dict['info_url'] = None

        # set to None if audio_source_url (nullable) is None
        # and model_fields_set contains the field
        if self.audio_source_url is None and "audio_source_url" in self.model_fields_set:
            _dict['audio_source_url'] = None

        # set to None if buy_this_url (nullable) is None
        # and model_fields_set contains the field
        if self.buy_this_url is None and "buy_this_url" in self.model_fields_set:
            _dict['buy_this_url'] = None

        # set to None if catalog_number (nullable) is None
        # and model_fields_set contains the field
        if self.catalog_number is None and "catalog_number" in self.model_fields_set:
            _dict['catalog_number'] = None

        # set to None if radio_station_name (nullable) is None
        # and model_fields_set contains the field
        if self.radio_station_name is None and "radio_station_name" in self.model_fields_set:
            _dict['radio_station_name'] = None

        # set to None if radio_station_url (nullable) is None
        # and model_fields_set contains the field
        if self.radio_station_url is None and "radio_station_url" in self.model_fields_set:
            _dict['radio_station_url'] = None

        # set to None if report_datetime (nullable) is None
        # and model_fields_set contains the field
        if self.report_datetime is None and "report_datetime" in self.model_fields_set:
            _dict['report_datetime'] = None

        # set to None if report_location (nullable) is None
        # and model_fields_set contains the field
        if self.report_location is None and "report_location" in self.model_fields_set:
            _dict['report_location'] = None

        # set to None if report_organization (nullable) is None
        # and model_fields_set contains the field
        if self.report_organization is None and "report_organization" in self.model_fields_set:
            _dict['report_organization'] = None

        # set to None if library (nullable) is None
        # and model_fields_set contains the field
        if self.library is None and "library" in self.model_fields_set:
            _dict['library'] = None

        # set to None if owner (nullable) is None
        # and model_fields_set contains the field
        if self.owner is None and "owner" in self.model_fields_set:
            _dict['owner'] = None

        # set to None if edited_by (nullable) is None
        # and model_fields_set contains the field
        if self.edited_by is None and "edited_by" in self.model_fields_set:
            _dict['edited_by'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PatchedFile from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "import_status": obj.get("import_status"),
            "filepath": obj.get("filepath"),
            "size": obj.get("size"),
            "exists": obj.get("exists"),
            "mime": obj.get("mime"),
            "md5": obj.get("md5"),
            "hidden": obj.get("hidden"),
            "accessed": obj.get("accessed"),
            "scheduled": obj.get("scheduled"),
            "part_of_list": obj.get("part_of_list"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "last_played_at": obj.get("last_played_at"),
            "bit_rate": obj.get("bit_rate"),
            "sample_rate": obj.get("sample_rate"),
            "format": obj.get("format"),
            "channels": obj.get("channels"),
            "length": obj.get("length"),
            "bpm": obj.get("bpm"),
            "replay_gain": obj.get("replay_gain"),
            "cue_in": obj.get("cue_in"),
            "cue_out": obj.get("cue_out"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "artwork": obj.get("artwork"),
            "artist_name": obj.get("artist_name"),
            "artist_url": obj.get("artist_url"),
            "original_artist": obj.get("original_artist"),
            "album_title": obj.get("album_title"),
            "track_title": obj.get("track_title"),
            "genre": obj.get("genre"),
            "mood": obj.get("mood"),
            "date": obj.get("date"),
            "track_number": obj.get("track_number"),
            "disc_number": obj.get("disc_number"),
            "comment": obj.get("comment"),
            "language": obj.get("language"),
            "label": obj.get("label"),
            "copyright": obj.get("copyright"),
            "composer": obj.get("composer"),
            "conductor": obj.get("conductor"),
            "orchestra": obj.get("orchestra"),
            "encoder": obj.get("encoder"),
            "encoded_by": obj.get("encoded_by"),
            "isrc": obj.get("isrc"),
            "lyrics": obj.get("lyrics"),
            "lyricist": obj.get("lyricist"),
            "original_lyricist": obj.get("original_lyricist"),
            "subject": obj.get("subject"),
            "contributor": obj.get("contributor"),
            "rating": obj.get("rating"),
            "url": obj.get("url"),
            "info_url": obj.get("info_url"),
            "audio_source_url": obj.get("audio_source_url"),
            "buy_this_url": obj.get("buy_this_url"),
            "catalog_number": obj.get("catalog_number"),
            "radio_station_name": obj.get("radio_station_name"),
            "radio_station_url": obj.get("radio_station_url"),
            "report_datetime": obj.get("report_datetime"),
            "report_location": obj.get("report_location"),
            "report_organization": obj.get("report_organization"),
            "library": obj.get("library"),
            "owner": obj.get("owner"),
            "edited_by": obj.get("edited_by")
        })
        return _obj


