# PatchedPodcastEpisode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**published_at** | **datetime** |  | [optional] 
**download_url** | **str** |  | [optional] 
**episode_guid** | **str** |  | [optional] 
**episode_title** | **str** |  | [optional] 
**episode_description** | **str** |  | [optional] 
**podcast** | **int** |  | [optional] 
**file** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_podcast_episode import PatchedPodcastEpisode

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPodcastEpisode from a JSON string
patched_podcast_episode_instance = PatchedPodcastEpisode.from_json(json)
# print the JSON string representation of the object
print PatchedPodcastEpisode.to_json()

# convert the object into a dict
patched_podcast_episode_dict = patched_podcast_episode_instance.to_dict()
# create an instance of PatchedPodcastEpisode from a dict
patched_podcast_episode_form_dict = patched_podcast_episode.from_dict(patched_podcast_episode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


