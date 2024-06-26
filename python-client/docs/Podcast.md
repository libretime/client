# Podcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**url** | **str** |  | 
**title** | **str** |  | 
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
from libretime_client.models.podcast import Podcast

# TODO update the JSON string below
json = "{}"
# create an instance of Podcast from a JSON string
podcast_instance = Podcast.from_json(json)
# print the JSON string representation of the object
print(Podcast.to_json())

# convert the object into a dict
podcast_dict = podcast_instance.to_dict()
# create an instance of Podcast from a dict
podcast_from_dict = Podcast.from_dict(podcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


