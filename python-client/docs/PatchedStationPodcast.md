# PatchedStationPodcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**podcast** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_station_podcast import PatchedStationPodcast

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedStationPodcast from a JSON string
patched_station_podcast_instance = PatchedStationPodcast.from_json(json)
# print the JSON string representation of the object
print PatchedStationPodcast.to_json()

# convert the object into a dict
patched_station_podcast_dict = patched_station_podcast_instance.to_dict()
# create an instance of PatchedStationPodcast from a dict
patched_station_podcast_form_dict = patched_station_podcast.from_dict(patched_station_podcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


