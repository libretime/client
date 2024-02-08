# PlayoutHistoryMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**key** | **str** |  | 
**value** | **str** |  | 
**history** | **int** |  | 

## Example

```python
from libretime_client.models.playout_history_metadata import PlayoutHistoryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PlayoutHistoryMetadata from a JSON string
playout_history_metadata_instance = PlayoutHistoryMetadata.from_json(json)
# print the JSON string representation of the object
print PlayoutHistoryMetadata.to_json()

# convert the object into a dict
playout_history_metadata_dict = playout_history_metadata_instance.to_dict()
# create an instance of PlayoutHistoryMetadata from a dict
playout_history_metadata_form_dict = playout_history_metadata.from_dict(playout_history_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


