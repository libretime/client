# PatchedLoginAttempt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** |  | [optional] 
**attempts** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_login_attempt import PatchedLoginAttempt

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedLoginAttempt from a JSON string
patched_login_attempt_instance = PatchedLoginAttempt.from_json(json)
# print the JSON string representation of the object
print(PatchedLoginAttempt.to_json())

# convert the object into a dict
patched_login_attempt_dict = patched_login_attempt_instance.to_dict()
# create an instance of PatchedLoginAttempt from a dict
patched_login_attempt_from_dict = PatchedLoginAttempt.from_dict(patched_login_attempt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


