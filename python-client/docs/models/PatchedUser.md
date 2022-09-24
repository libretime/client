# libretime_client.model.patched_user.PatchedUser

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**role** | [**RoleEnum**](RoleEnum.md) | [**RoleEnum**](RoleEnum.md) |  | [optional] 
**username** | str,  | str,  |  | [optional] 
**email** | None, str,  | NoneClass, str,  |  | [optional] 
**first_name** | str,  | str,  |  | [optional] 
**last_name** | str,  | str,  |  | [optional] 
**login_attempts** | None, decimal.Decimal, int,  | NoneClass, decimal.Decimal,  |  | [optional] 
**last_login** | None, str, datetime,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 date-time
**last_failed_login** | None, str, datetime,  | NoneClass, str,  |  | [optional] value must conform to RFC-3339 date-time
**skype** | None, str,  | NoneClass, str,  |  | [optional] 
**jabber** | None, str,  | NoneClass, str,  |  | [optional] 
**phone** | None, str,  | NoneClass, str,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

