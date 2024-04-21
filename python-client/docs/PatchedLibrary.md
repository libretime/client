# PatchedLibrary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**analyze_cue_points** | **bool** |  | [optional] 

## Example

```python
from libretime_client.models.patched_library import PatchedLibrary

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedLibrary from a JSON string
patched_library_instance = PatchedLibrary.from_json(json)
# print the JSON string representation of the object
print(PatchedLibrary.to_json())

# convert the object into a dict
patched_library_dict = patched_library_instance.to_dict()
# create an instance of PatchedLibrary from a dict
patched_library_from_dict = PatchedLibrary.from_dict(patched_library_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


