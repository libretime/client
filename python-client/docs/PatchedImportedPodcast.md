# PatchedImportedPodcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**override_album** | **bool** |  | [optional] 
**auto_ingest** | **bool** |  | [optional] 
**auto_ingested_at** | **datetime** |  | [optional] 
**podcast** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_imported_podcast import PatchedImportedPodcast

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedImportedPodcast from a JSON string
patched_imported_podcast_instance = PatchedImportedPodcast.from_json(json)
# print the JSON string representation of the object
print(PatchedImportedPodcast.to_json())

# convert the object into a dict
patched_imported_podcast_dict = patched_imported_podcast_instance.to_dict()
# create an instance of PatchedImportedPodcast from a dict
patched_imported_podcast_form_dict = patched_imported_podcast.from_dict(patched_imported_podcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


