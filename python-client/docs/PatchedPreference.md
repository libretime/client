# PatchedPreference


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**key** | **str** |  | [optional] 
**value** | **str** |  | [optional] 
**user** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_preference import PatchedPreference

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPreference from a JSON string
patched_preference_instance = PatchedPreference.from_json(json)
# print the JSON string representation of the object
print PatchedPreference.to_json()

# convert the object into a dict
patched_preference_dict = patched_preference_instance.to_dict()
# create an instance of PatchedPreference from a dict
patched_preference_form_dict = patched_preference.from_dict(patched_preference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


