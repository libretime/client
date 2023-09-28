# ShowInstance


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**created_at** | **datetime** |  | 
**starts_at** | **datetime** |  | 
**ends_at** | **datetime** |  | 
**filled_time** | **str** |  | [optional] 
**last_scheduled_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**modified** | **bool** |  | 
**rebroadcast** | **int** |  | [optional] 
**auto_playlist_built** | **bool** |  | 
**record_enabled** | [**RecordEnabledEnum**](RecordEnabledEnum.md) |  | [optional] 
**show** | **int** |  | 
**instance** | **int** |  | [optional] 
**record_file** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.show_instance import ShowInstance

# TODO update the JSON string below
json = "{}"
# create an instance of ShowInstance from a JSON string
show_instance_instance = ShowInstance.from_json(json)
# print the JSON string representation of the object
print ShowInstance.to_json()

# convert the object into a dict
show_instance_dict = show_instance_instance.to_dict()
# create an instance of ShowInstance from a dict
show_instance_form_dict = show_instance.from_dict(show_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


