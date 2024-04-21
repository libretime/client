# PatchedSmartBlock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**length** | **str** |  | [optional] 
**kind** | [**PatchedSmartBlockKind**](PatchedSmartBlockKind.md) |  | [optional] 
**owner** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_smart_block import PatchedSmartBlock

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedSmartBlock from a JSON string
patched_smart_block_instance = PatchedSmartBlock.from_json(json)
# print the JSON string representation of the object
print(PatchedSmartBlock.to_json())

# convert the object into a dict
patched_smart_block_dict = patched_smart_block_instance.to_dict()
# create an instance of PatchedSmartBlock from a dict
patched_smart_block_from_dict = PatchedSmartBlock.from_dict(patched_smart_block_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


