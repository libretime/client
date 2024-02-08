# PatchedSmartBlockCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**group** | **int** |  | [optional] 
**criteria** | **str** |  | [optional] 
**condition** | **str** |  | [optional] 
**value** | **str** |  | [optional] 
**extra** | **str** |  | [optional] 
**block** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_smart_block_criteria import PatchedSmartBlockCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedSmartBlockCriteria from a JSON string
patched_smart_block_criteria_instance = PatchedSmartBlockCriteria.from_json(json)
# print the JSON string representation of the object
print PatchedSmartBlockCriteria.to_json()

# convert the object into a dict
patched_smart_block_criteria_dict = patched_smart_block_criteria_instance.to_dict()
# create an instance of PatchedSmartBlockCriteria from a dict
patched_smart_block_criteria_form_dict = patched_smart_block_criteria.from_dict(patched_smart_block_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


