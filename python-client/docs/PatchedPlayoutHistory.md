# PatchedPlayoutHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**starts** | **datetime** |  | [optional] 
**ends** | **datetime** |  | [optional] 
**file** | **int** |  | [optional] 
**instance** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_playout_history import PatchedPlayoutHistory

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPlayoutHistory from a JSON string
patched_playout_history_instance = PatchedPlayoutHistory.from_json(json)
# print the JSON string representation of the object
print(PatchedPlayoutHistory.to_json())

# convert the object into a dict
patched_playout_history_dict = patched_playout_history_instance.to_dict()
# create an instance of PatchedPlayoutHistory from a dict
patched_playout_history_from_dict = PatchedPlayoutHistory.from_dict(patched_playout_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


