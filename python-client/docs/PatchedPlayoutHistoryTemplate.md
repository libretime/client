# PatchedPlayoutHistoryTemplate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from libretime_client.models.patched_playout_history_template import PatchedPlayoutHistoryTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPlayoutHistoryTemplate from a JSON string
patched_playout_history_template_instance = PatchedPlayoutHistoryTemplate.from_json(json)
# print the JSON string representation of the object
print PatchedPlayoutHistoryTemplate.to_json()

# convert the object into a dict
patched_playout_history_template_dict = patched_playout_history_template_instance.to_dict()
# create an instance of PatchedPlayoutHistoryTemplate from a dict
patched_playout_history_template_form_dict = patched_playout_history_template.from_dict(patched_playout_history_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


