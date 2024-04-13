# PlaylistContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**kind** | [**PlaylistContentKindEnum**](PlaylistContentKindEnum.md) |  | 
**position** | **int** |  | [optional] 
**offset** | **float** |  | 
**length** | **str** |  | [optional] 
**cue_in** | **str** |  | [optional] 
**cue_out** | **str** |  | [optional] 
**fade_in** | **str** |  | [optional] 
**fade_out** | **str** |  | [optional] 
**playlist** | **int** |  | [optional] 
**file** | **int** |  | [optional] 
**stream** | **int** |  | [optional] 
**block** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.playlist_content import PlaylistContent

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistContent from a JSON string
playlist_content_instance = PlaylistContent.from_json(json)
# print the JSON string representation of the object
print(PlaylistContent.to_json())

# convert the object into a dict
playlist_content_dict = playlist_content_instance.to_dict()
# create an instance of PlaylistContent from a dict
playlist_content_form_dict = playlist_content.from_dict(playlist_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


