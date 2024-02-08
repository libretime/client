# PatchedPodcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**url** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**creator** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**copyright** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**itunes_author** | **str** |  | [optional] 
**itunes_keywords** | **str** |  | [optional] 
**itunes_summary** | **str** |  | [optional] 
**itunes_subtitle** | **str** |  | [optional] 
**itunes_category** | **str** |  | [optional] 
**itunes_explicit** | **str** |  | [optional] 
**owner** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_podcast import PatchedPodcast

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPodcast from a JSON string
patched_podcast_instance = PatchedPodcast.from_json(json)
# print the JSON string representation of the object
print PatchedPodcast.to_json()

# convert the object into a dict
patched_podcast_dict = patched_podcast_instance.to_dict()
# create an instance of PatchedPodcast from a dict
patched_podcast_form_dict = patched_podcast.from_dict(patched_podcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


