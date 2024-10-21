# PatchedShow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**genre** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**foreground_color** | **str** |  | [optional] 
**background_color** | **str** |  | [optional] 
**live_enabled** | **bool** |  | [optional] [readonly] 
**linked** | **bool** |  | [optional] 
**linkable** | **bool** |  | [optional] 
**auto_playlist** | **int** |  | [optional] 
**auto_playlist_enabled** | **bool** |  | [optional] 
**auto_playlist_repeat** | **bool** |  | [optional] 
**intro_playlist** | **int** |  | [optional] 
**override_intro_playlist** | **bool** |  | [optional] 
**outro_playlist** | **int** |  | [optional] 
**override_outro_playlist** | **bool** |  | [optional] 

## Example

```python
from libretime_client.models.patched_show import PatchedShow

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedShow from a JSON string
patched_show_instance = PatchedShow.from_json(json)
# print the JSON string representation of the object
print(PatchedShow.to_json())

# convert the object into a dict
patched_show_dict = patched_show_instance.to_dict()
# create an instance of PatchedShow from a dict
patched_show_from_dict = PatchedShow.from_dict(patched_show_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


