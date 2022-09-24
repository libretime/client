# libretime_client.model.webstream.Webstream

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**updated_at** | str, datetime,  | str,  |  | value must conform to RFC-3339 date-time
**length** | str,  | str,  |  | 
**name** | str,  | str,  |  | 
**created_at** | str, datetime,  | str,  |  | value must conform to RFC-3339 date-time
**description** | str,  | str,  |  | 
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**url** | str,  | str,  |  | 
**last_played_at** | None, str, datetime,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 date-time
**mime** | None, str,  | NoneClass, str,  |  | [optional] 
**owner** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

