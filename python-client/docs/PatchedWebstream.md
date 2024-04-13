# PatchedWebstream


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**last_played_at** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**length** | **str** |  | [optional] 
**mime** | **str** |  | [optional] 
**owner** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_webstream import PatchedWebstream

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedWebstream from a JSON string
patched_webstream_instance = PatchedWebstream.from_json(json)
# print the JSON string representation of the object
print(PatchedWebstream.to_json())

# convert the object into a dict
patched_webstream_dict = patched_webstream_instance.to_dict()
# create an instance of PatchedWebstream from a dict
patched_webstream_form_dict = patched_webstream.from_dict(patched_webstream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


