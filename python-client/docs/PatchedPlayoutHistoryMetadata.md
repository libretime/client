# PatchedPlayoutHistoryMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**key** | **str** |  | [optional] 
**value** | **str** |  | [optional] 
**history** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_playout_history_metadata import PatchedPlayoutHistoryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPlayoutHistoryMetadata from a JSON string
patched_playout_history_metadata_instance = PatchedPlayoutHistoryMetadata.from_json(json)
# print the JSON string representation of the object
print(PatchedPlayoutHistoryMetadata.to_json())

# convert the object into a dict
patched_playout_history_metadata_dict = patched_playout_history_metadata_instance.to_dict()
# create an instance of PatchedPlayoutHistoryMetadata from a dict
patched_playout_history_metadata_from_dict = PatchedPlayoutHistoryMetadata.from_dict(patched_playout_history_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


