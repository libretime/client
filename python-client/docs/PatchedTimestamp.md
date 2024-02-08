# PatchedTimestamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**timestamp** | **datetime** |  | [optional] 

## Example

```python
from libretime_client.models.patched_timestamp import PatchedTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedTimestamp from a JSON string
patched_timestamp_instance = PatchedTimestamp.from_json(json)
# print the JSON string representation of the object
print PatchedTimestamp.to_json()

# convert the object into a dict
patched_timestamp_dict = patched_timestamp_instance.to_dict()
# create an instance of PatchedTimestamp from a dict
patched_timestamp_form_dict = patched_timestamp.from_dict(patched_timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


