# Show


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**genre** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**foreground_color** | **str** |  | [optional] 
**background_color** | **str** |  | [optional] 
**live_enabled** | **bool** |  | [readonly] 
**linked** | **bool** |  | 
**linkable** | **bool** |  | 
**auto_playlist** | **int** |  | [optional] 
**auto_playlist_enabled** | **bool** |  | 
**auto_playlist_repeat** | **bool** |  | 

## Example

```python
from libretime_client.models.show import Show

# TODO update the JSON string below
json = "{}"
# create an instance of Show from a JSON string
show_instance = Show.from_json(json)
# print the JSON string representation of the object
print Show.to_json()

# convert the object into a dict
show_dict = show_instance.to_dict()
# create an instance of Show from a dict
show_form_dict = show.from_dict(show_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


