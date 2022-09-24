# libretime_client.model.patched_schedule.PatchedSchedule

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**cue_out** | str,  | str,  |  | [optional] 
**ends_at** | str, datetime,  | str,  |  | [optional] value must conform to RFC-3339 date-time
**starts_at** | str, datetime,  | str,  |  | [optional] value must conform to RFC-3339 date-time
**length** | None, str,  | NoneClass, str,  |  | [optional] 
**fade_in** | None, str,  | NoneClass, str,  |  | [optional] 
**fade_out** | None, str,  | NoneClass, str,  |  | [optional] 
**cue_in** | str,  | str,  |  | [optional] 
**position** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**[position_status](#position_status)** | dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | [optional] 
**broadcasted** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**played** | None, bool,  | NoneClass, BoolClass,  |  | [optional] 
**instance** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**file** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**stream** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# position_status

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### allOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[PositionStatusEnum](PositionStatusEnum.md) | [**PositionStatusEnum**](PositionStatusEnum.md) | [**PositionStatusEnum**](PositionStatusEnum.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

