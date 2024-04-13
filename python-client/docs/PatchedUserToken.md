# PatchedUserToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**action** | **str** |  | [optional] 
**token** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**user** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_user_token import PatchedUserToken

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedUserToken from a JSON string
patched_user_token_instance = PatchedUserToken.from_json(json)
# print the JSON string representation of the object
print(PatchedUserToken.to_json())

# convert the object into a dict
patched_user_token_dict = patched_user_token_instance.to_dict()
# create an instance of PatchedUserToken from a dict
patched_user_token_form_dict = patched_user_token.from_dict(patched_user_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


