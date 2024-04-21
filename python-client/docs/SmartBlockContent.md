# SmartBlockContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**position** | **int** |  | [optional] 
**offset** | **float** |  | 
**length** | **str** |  | [optional] 
**cue_in** | **str** |  | [optional] 
**cue_out** | **str** |  | [optional] 
**fade_in** | **str** |  | [optional] 
**fade_out** | **str** |  | [optional] 
**block** | **int** |  | [optional] 
**file** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.smart_block_content import SmartBlockContent

# TODO update the JSON string below
json = "{}"
# create an instance of SmartBlockContent from a JSON string
smart_block_content_instance = SmartBlockContent.from_json(json)
# print the JSON string representation of the object
print(SmartBlockContent.to_json())

# convert the object into a dict
smart_block_content_dict = smart_block_content_instance.to_dict()
# create an instance of SmartBlockContent from a dict
smart_block_content_from_dict = SmartBlockContent.from_dict(smart_block_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


