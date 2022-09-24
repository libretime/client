# libretime_client.model.show_instance.ShowInstance

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**starts_at** | str, datetime,  | str,  |  | value must conform to RFC-3339 date-time
**auto_playlist_built** | bool,  | BoolClass,  |  | 
**show** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**created_at** | str, datetime,  | str,  |  | value must conform to RFC-3339 date-time
**modified** | bool,  | BoolClass,  |  | 
**ends_at** | str, datetime,  | str,  |  | value must conform to RFC-3339 date-time
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**filled_time** | None, str,  | NoneClass, str,  |  | [optional] 
**last_scheduled_at** | None, str, datetime,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 date-time
**description** | None, str,  | NoneClass, str,  |  | [optional] 
**rebroadcast** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**[record_enabled](#record_enabled)** | dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | [optional] 
**instance** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**record_file** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# record_enabled

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[RecordEnabledEnum](RecordEnabledEnum.md) | [**RecordEnabledEnum**](RecordEnabledEnum.md) | [**RecordEnabledEnum**](RecordEnabledEnum.md) |  | 
[NullEnum](NullEnum.md) | [**NullEnum**](NullEnum.md) | [**NullEnum**](NullEnum.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

