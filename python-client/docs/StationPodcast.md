# StationPodcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**podcast** | **int** |  | 

## Example

```python
from libretime_client.models.station_podcast import StationPodcast

# TODO update the JSON string below
json = "{}"
# create an instance of StationPodcast from a JSON string
station_podcast_instance = StationPodcast.from_json(json)
# print the JSON string representation of the object
print StationPodcast.to_json()

# convert the object into a dict
station_podcast_dict = station_podcast_instance.to_dict()
# create an instance of StationPodcast from a dict
station_podcast_form_dict = station_podcast.from_dict(station_podcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


