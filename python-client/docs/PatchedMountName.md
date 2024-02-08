# PatchedMountName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**mount_name** | **str** |  | [optional] 

## Example

```python
from libretime_client.models.patched_mount_name import PatchedMountName

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedMountName from a JSON string
patched_mount_name_instance = PatchedMountName.from_json(json)
# print the JSON string representation of the object
print PatchedMountName.to_json()

# convert the object into a dict
patched_mount_name_dict = patched_mount_name_instance.to_dict()
# create an instance of PatchedMountName from a dict
patched_mount_name_form_dict = patched_mount_name.from_dict(patched_mount_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


