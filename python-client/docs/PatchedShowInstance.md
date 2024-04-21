# PatchedShowInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] 
**starts_at** | **datetime** |  | [optional] 
**ends_at** | **datetime** |  | [optional] 
**filled_time** | **str** |  | [optional] 
**last_scheduled_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**modified** | **bool** |  | [optional] 
**rebroadcast** | **int** |  | [optional] 
**auto_playlist_built** | **bool** |  | [optional] 
**record_enabled** | [**RecordEnabledEnum**](RecordEnabledEnum.md) |  | [optional] 
**show** | **int** |  | [optional] 
**instance** | **int** |  | [optional] 
**record_file** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_show_instance import PatchedShowInstance

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedShowInstance from a JSON string
patched_show_instance_instance = PatchedShowInstance.from_json(json)
# print the JSON string representation of the object
print(PatchedShowInstance.to_json())

# convert the object into a dict
patched_show_instance_dict = patched_show_instance_instance.to_dict()
# create an instance of PatchedShowInstance from a dict
patched_show_instance_from_dict = PatchedShowInstance.from_dict(patched_show_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


