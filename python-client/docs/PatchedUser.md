# PatchedUser


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**role** | [**RoleEnum**](RoleEnum.md) |  | [optional] 
**username** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**login_attempts** | **int** |  | [optional] 
**last_login** | **datetime** |  | [optional] 
**last_failed_login** | **datetime** |  | [optional] 
**skype** | **str** |  | [optional] 
**jabber** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 

## Example

```python
from libretime_client.models.patched_user import PatchedUser

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedUser from a JSON string
patched_user_instance = PatchedUser.from_json(json)
# print the JSON string representation of the object
print PatchedUser.to_json()

# convert the object into a dict
patched_user_dict = patched_user_instance.to_dict()
# create an instance of PatchedUser from a dict
patched_user_form_dict = patched_user.from_dict(patched_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


