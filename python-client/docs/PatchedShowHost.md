# PatchedShowHost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**show** | **int** |  | [optional] 
**user** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_show_host import PatchedShowHost

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedShowHost from a JSON string
patched_show_host_instance = PatchedShowHost.from_json(json)
# print the JSON string representation of the object
print(PatchedShowHost.to_json())

# convert the object into a dict
patched_show_host_dict = patched_show_host_instance.to_dict()
# create an instance of PatchedShowHost from a dict
patched_show_host_from_dict = PatchedShowHost.from_dict(patched_show_host_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


