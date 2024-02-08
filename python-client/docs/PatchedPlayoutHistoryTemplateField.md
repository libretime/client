# PatchedPlayoutHistoryTemplateField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**is_file_md** | **bool** |  | [optional] 
**position** | **int** |  | [optional] 
**template** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_playout_history_template_field import PatchedPlayoutHistoryTemplateField

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedPlayoutHistoryTemplateField from a JSON string
patched_playout_history_template_field_instance = PatchedPlayoutHistoryTemplateField.from_json(json)
# print the JSON string representation of the object
print PatchedPlayoutHistoryTemplateField.to_json()

# convert the object into a dict
patched_playout_history_template_field_dict = patched_playout_history_template_field_instance.to_dict()
# create an instance of PatchedPlayoutHistoryTemplateField from a dict
patched_playout_history_template_field_form_dict = patched_playout_history_template_field.from_dict(patched_playout_history_template_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


