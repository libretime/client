# SmartBlockCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**group** | **int** |  | [optional] 
**criteria** | **str** |  | 
**condition** | **str** |  | 
**value** | **str** |  | 
**extra** | **str** |  | [optional] 
**block** | **int** |  | 

## Example

```python
from libretime_client.models.smart_block_criteria import SmartBlockCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of SmartBlockCriteria from a JSON string
smart_block_criteria_instance = SmartBlockCriteria.from_json(json)
# print the JSON string representation of the object
print(SmartBlockCriteria.to_json())

# convert the object into a dict
smart_block_criteria_dict = smart_block_criteria_instance.to_dict()
# create an instance of SmartBlockCriteria from a dict
smart_block_criteria_form_dict = smart_block_criteria.from_dict(smart_block_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


