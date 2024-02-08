# PlayoutHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**starts** | **datetime** |  | 
**ends** | **datetime** |  | [optional] 
**file** | **int** |  | [optional] 
**instance** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.playout_history import PlayoutHistory

# TODO update the JSON string below
json = "{}"
# create an instance of PlayoutHistory from a JSON string
playout_history_instance = PlayoutHistory.from_json(json)
# print the JSON string representation of the object
print PlayoutHistory.to_json()

# convert the object into a dict
playout_history_dict = playout_history_instance.to_dict()
# create an instance of PlayoutHistory from a dict
playout_history_form_dict = playout_history.from_dict(playout_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


