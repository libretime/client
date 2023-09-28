# Playlist


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**length** | **str** |  | [optional] 
**owner** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.playlist import Playlist

# TODO update the JSON string below
json = "{}"
# create an instance of Playlist from a JSON string
playlist_instance = Playlist.from_json(json)
# print the JSON string representation of the object
print Playlist.to_json()

# convert the object into a dict
playlist_dict = playlist_instance.to_dict()
# create an instance of Playlist from a dict
playlist_form_dict = playlist.from_dict(playlist_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


