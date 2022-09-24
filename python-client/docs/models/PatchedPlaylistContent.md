# libretime_client.model.patched_playlist_content.PatchedPlaylistContent

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**[kind](#kind)** | dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | [optional] 
**position** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**offset** | decimal.Decimal, int, float,  | decimal.Decimal,  |  | [optional] value must be a 64 bit float
**length** | None, str,  | NoneClass, str,  |  | [optional] 
**cue_in** | None, str,  | NoneClass, str,  |  | [optional] 
**cue_out** | None, str,  | NoneClass, str,  |  | [optional] 
**fade_in** | None, str,  | NoneClass, str,  |  | [optional] 
**fade_out** | None, str,  | NoneClass, str,  |  | [optional] 
**playlist** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**file** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**stream** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**block** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# kind

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

