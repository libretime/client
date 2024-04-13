# ShowRebroadcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**day_offset** | **str** |  | 
**start_time** | **str** |  | 
**show** | **int** |  | 

## Example

```python
from libretime_client.models.show_rebroadcast import ShowRebroadcast

# TODO update the JSON string below
json = "{}"
# create an instance of ShowRebroadcast from a JSON string
show_rebroadcast_instance = ShowRebroadcast.from_json(json)
# print the JSON string representation of the object
print(ShowRebroadcast.to_json())

# convert the object into a dict
show_rebroadcast_dict = show_rebroadcast_instance.to_dict()
# create an instance of ShowRebroadcast from a dict
show_rebroadcast_form_dict = show_rebroadcast.from_dict(show_rebroadcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


