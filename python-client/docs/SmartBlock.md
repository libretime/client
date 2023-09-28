# SmartBlock


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**length** | **str** |  | [optional] 
**kind** | [**PatchedSmartBlockKind**](PatchedSmartBlockKind.md) |  | [optional] 
**owner** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.smart_block import SmartBlock

# TODO update the JSON string below
json = "{}"
# create an instance of SmartBlock from a JSON string
smart_block_instance = SmartBlock.from_json(json)
# print the JSON string representation of the object
print SmartBlock.to_json()

# convert the object into a dict
smart_block_dict = smart_block_instance.to_dict()
# create an instance of SmartBlock from a dict
smart_block_form_dict = smart_block.from_dict(smart_block_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


