# User


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**role** | [**RoleEnum**](RoleEnum.md) |  | 
**username** | **str** |  | 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**login_attempts** | **int** |  | [optional] 
**last_login** | **datetime** |  | [optional] 
**last_failed_login** | **datetime** |  | [optional] 
**skype** | **str** |  | [optional] 
**jabber** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 

## Example

```python
from libretime_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print User.to_json()

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_form_dict = user.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


