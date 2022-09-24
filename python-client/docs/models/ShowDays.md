# libretime_client.model.show_days.ShowDays

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**duration** | str,  | str,  |  | 
**start_time** | str,  | str,  |  | 
**first_show_on** | str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD
**timezone** | str,  | str,  |  | 
**show** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**[repeat_kind](#repeat_kind)** | dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 
**last_show_on** | None, str, date,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 full-date YYYY-MM-DD
**[record_enabled](#record_enabled)** | dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | [optional] 
**[week_day](#week_day)** | dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | [optional] 
**repeat_next_on** | None, str, date,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 full-date YYYY-MM-DD
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# repeat_kind

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### allOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[RepeatKindEnum](RepeatKindEnum.md) | [**RepeatKindEnum**](RepeatKindEnum.md) | [**RepeatKindEnum**](RepeatKindEnum.md) |  | 

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

# week_day

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[WeekDayEnum](WeekDayEnum.md) | [**WeekDayEnum**](WeekDayEnum.md) | [**WeekDayEnum**](WeekDayEnum.md) |  | 
[NullEnum](NullEnum.md) | [**NullEnum**](NullEnum.md) | [**NullEnum**](NullEnum.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

