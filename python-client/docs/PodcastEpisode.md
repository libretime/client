# PodcastEpisode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**published_at** | **datetime** |  | 
**download_url** | **str** |  | 
**episode_guid** | **str** |  | 
**episode_title** | **str** |  | 
**episode_description** | **str** |  | 
**podcast** | **int** |  | 
**file** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.podcast_episode import PodcastEpisode

# TODO update the JSON string below
json = "{}"
# create an instance of PodcastEpisode from a JSON string
podcast_episode_instance = PodcastEpisode.from_json(json)
# print the JSON string representation of the object
print(PodcastEpisode.to_json())

# convert the object into a dict
podcast_episode_dict = podcast_episode_instance.to_dict()
# create an instance of PodcastEpisode from a dict
podcast_episode_form_dict = podcast_episode.from_dict(podcast_episode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


