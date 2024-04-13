# PatchedShowRebroadcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**day_offset** | **str** |  | [optional] 
**start_time** | **str** |  | [optional] 
**show** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_show_rebroadcast import PatchedShowRebroadcast

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedShowRebroadcast from a JSON string
patched_show_rebroadcast_instance = PatchedShowRebroadcast.from_json(json)
# print the JSON string representation of the object
print(PatchedShowRebroadcast.to_json())

# convert the object into a dict
patched_show_rebroadcast_dict = patched_show_rebroadcast_instance.to_dict()
# create an instance of PatchedShowRebroadcast from a dict
patched_show_rebroadcast_form_dict = patched_show_rebroadcast.from_dict(patched_show_rebroadcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


