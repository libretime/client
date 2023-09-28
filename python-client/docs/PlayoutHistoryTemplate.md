# PlayoutHistoryTemplate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from libretime_client.models.playout_history_template import PlayoutHistoryTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of PlayoutHistoryTemplate from a JSON string
playout_history_template_instance = PlayoutHistoryTemplate.from_json(json)
# print the JSON string representation of the object
print PlayoutHistoryTemplate.to_json()

# convert the object into a dict
playout_history_template_dict = playout_history_template_instance.to_dict()
# create an instance of PlayoutHistoryTemplate from a dict
playout_history_template_form_dict = playout_history_template.from_dict(playout_history_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


