# PatchedPlaylistContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**kind** | [**PlaylistContentKindEnum**](PlaylistContentKindEnum.md) |  | [optional] 
**position** | **int** |  | [optional] 
**offset** | **float** |  | [optional] 
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
from libretime_client.models.patched_playlist_content import PatchedPlaylistContent

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPlaylistContent from a JSON string
patched_playlist_content_instance = PatchedPlaylistContent.from_json(json)
# print the JSON string representation of the object
print(PatchedPlaylistContent.to_json())

# convert the object into a dict
patched_playlist_content_dict = patched_playlist_content_instance.to_dict()
# create an instance of PatchedPlaylistContent from a dict
patched_playlist_content_from_dict = PatchedPlaylistContent.from_dict(patched_playlist_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


