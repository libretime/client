# ImportedPodcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**override_album** | **bool** |  | 
**auto_ingest** | **bool** |  | 
**auto_ingested_at** | **datetime** |  | [optional] 
**podcast** | **int** |  | 

## Example

```python
from libretime_client.models.imported_podcast import ImportedPodcast

# TODO update the JSON string below
json = "{}"
# create an instance of ImportedPodcast from a JSON string
imported_podcast_instance = ImportedPodcast.from_json(json)
# print the JSON string representation of the object
print(ImportedPodcast.to_json())

# convert the object into a dict
imported_podcast_dict = imported_podcast_instance.to_dict()
# create an instance of ImportedPodcast from a dict
imported_podcast_form_dict = imported_podcast.from_dict(imported_podcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


