# PatchedSmartBlockContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**position** | **int** |  | [optional] 
**offset** | **float** |  | [optional] 
**length** | **str** |  | [optional] 
**cue_in** | **str** |  | [optional] 
**cue_out** | **str** |  | [optional] 
**fade_in** | **str** |  | [optional] 
**fade_out** | **str** |  | [optional] 
**block** | **int** |  | [optional] 
**file** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_smart_block_content import PatchedSmartBlockContent

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedSmartBlockContent from a JSON string
patched_smart_block_content_instance = PatchedSmartBlockContent.from_json(json)
# print the JSON string representation of the object
print(PatchedSmartBlockContent.to_json())

# convert the object into a dict
patched_smart_block_content_dict = patched_smart_block_content_instance.to_dict()
# create an instance of PatchedSmartBlockContent from a dict
patched_smart_block_content_form_dict = patched_smart_block_content.from_dict(patched_smart_block_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


