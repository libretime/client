# PatchedPlaylist


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**length** | **str** |  | [optional] 
**owner** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_playlist import PatchedPlaylist

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPlaylist from a JSON string
patched_playlist_instance = PatchedPlaylist.from_json(json)
# print the JSON string representation of the object
print(PatchedPlaylist.to_json())

# convert the object into a dict
patched_playlist_dict = patched_playlist_instance.to_dict()
# create an instance of PatchedPlaylist from a dict
patched_playlist_from_dict = PatchedPlaylist.from_dict(patched_playlist_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


