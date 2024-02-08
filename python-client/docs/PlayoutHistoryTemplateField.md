# PlayoutHistoryTemplateField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**name** | **str** |  | 
**label** | **str** |  | 
**type** | **str** |  | 
**is_file_md** | **bool** |  | 
**position** | **int** |  | 
**template** | **int** |  | 

## Example

```python
from libretime_client.models.playout_history_template_field import PlayoutHistoryTemplateField

# TODO update the JSON string below
json = "{}"
# create an instance of PlayoutHistoryTemplateField from a JSON string
playout_history_template_field_instance = PlayoutHistoryTemplateField.from_json(json)
# print the JSON string representation of the object
print PlayoutHistoryTemplateField.to_json()

# convert the object into a dict
playout_history_template_field_dict = playout_history_template_field_instance.to_dict()
# create an instance of PlayoutHistoryTemplateField from a dict
playout_history_template_field_form_dict = playout_history_template_field.from_dict(playout_history_template_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


