# PatchedListenerCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**listener_count** | **int** |  | [optional] 
**timestamp** | **int** |  | [optional] 
**mount_name** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_listener_count import PatchedListenerCount

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedListenerCount from a JSON string
patched_listener_count_instance = PatchedListenerCount.from_json(json)
# print the JSON string representation of the object
print(PatchedListenerCount.to_json())

# convert the object into a dict
patched_listener_count_dict = patched_listener_count_instance.to_dict()
# create an instance of PatchedListenerCount from a dict
patched_listener_count_from_dict = PatchedListenerCount.from_dict(patched_listener_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


