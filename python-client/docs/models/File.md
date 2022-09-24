# libretime_client.model.file.File

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**size** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**mime** | str,  | str,  |  | 
**name** | str,  | str,  |  | 
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**accessed** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**[import_status](#import_status)** | dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | [optional] 
**filepath** | None, str,  | NoneClass, str,  |  | [optional] 
**exists** | None, bool,  | NoneClass, BoolClass,  |  | [optional] 
**md5** | None, str,  | NoneClass, str,  |  | [optional] 
**hidden** | None, bool,  | NoneClass, BoolClass,  |  | [optional] 
**scheduled** | None, bool,  | NoneClass, BoolClass,  |  | [optional] 
**part_of_list** | None, bool,  | NoneClass, BoolClass,  |  | [optional] 
**created_at** | None, str, datetime,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 date-time
**updated_at** | None, str, datetime,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 date-time
**last_played_at** | None, str, datetime,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 date-time
**bit_rate** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**sample_rate** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**format** | None, str,  | NoneClass, str,  |  | [optional] 
**channels** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**length** | None, str,  | NoneClass, str,  |  | [optional] 
**bpm** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**replay_gain** | None, str,  | NoneClass, str,  |  | [optional] 
**cue_in** | None, str,  | NoneClass, str,  |  | [optional] 
**cue_out** | None, str,  | NoneClass, str,  |  | [optional] 
**description** | None, str,  | NoneClass, str,  |  | [optional] 
**artwork** | None, str,  | NoneClass, str,  |  | [optional] 
**artist_name** | None, str,  | NoneClass, str,  |  | [optional] 
**artist_url** | None, str,  | NoneClass, str,  |  | [optional] 
**original_artist** | None, str,  | NoneClass, str,  |  | [optional] 
**album_title** | None, str,  | NoneClass, str,  |  | [optional] 
**track_title** | None, str,  | NoneClass, str,  |  | [optional] 
**genre** | None, str,  | NoneClass, str,  |  | [optional] 
**mood** | None, str,  | NoneClass, str,  |  | [optional] 
**date** | None, str,  | NoneClass, str,  |  | [optional] 
**track_number** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**disc_number** | None, str,  | NoneClass, str,  |  | [optional] 
**comment** | None, str,  | NoneClass, str,  |  | [optional] 
**language** | None, str,  | NoneClass, str,  |  | [optional] 
**label** | None, str,  | NoneClass, str,  |  | [optional] 
**copyright** | None, str,  | NoneClass, str,  |  | [optional] 
**composer** | None, str,  | NoneClass, str,  |  | [optional] 
**conductor** | None, str,  | NoneClass, str,  |  | [optional] 
**orchestra** | None, str,  | NoneClass, str,  |  | [optional] 
**encoder** | None, str,  | NoneClass, str,  |  | [optional] 
**encoded_by** | None, str,  | NoneClass, str,  |  | [optional] 
**isrc** | None, str,  | NoneClass, str,  |  | [optional] 
**lyrics** | None, str,  | NoneClass, str,  |  | [optional] 
**lyricist** | None, str,  | NoneClass, str,  |  | [optional] 
**original_lyricist** | None, str,  | NoneClass, str,  |  | [optional] 
**subject** | None, str,  | NoneClass, str,  |  | [optional] 
**contributor** | None, str,  | NoneClass, str,  |  | [optional] 
**rating** | None, str,  | NoneClass, str,  |  | [optional] 
**url** | None, str,  | NoneClass, str,  |  | [optional] 
**info_url** | None, str,  | NoneClass, str,  |  | [optional] 
**audio_source_url** | None, str,  | NoneClass, str,  |  | [optional] 
**buy_this_url** | None, str,  | NoneClass, str,  |  | [optional] 
**catalog_number** | None, str,  | NoneClass, str,  |  | [optional] 
**radio_station_name** | None, str,  | NoneClass, str,  |  | [optional] 
**radio_station_url** | None, str,  | NoneClass, str,  |  | [optional] 
**report_datetime** | None, str,  | NoneClass, str,  |  | [optional] 
**report_location** | None, str,  | NoneClass, str,  |  | [optional] 
**report_organization** | None, str,  | NoneClass, str,  |  | [optional] 
**library** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**owner** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**edited_by** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# import_status

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### allOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[PlaylistContentKindEnum](PlaylistContentKindEnum.md) | [**PlaylistContentKindEnum**](PlaylistContentKindEnum.md) | [**PlaylistContentKindEnum**](PlaylistContentKindEnum.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

