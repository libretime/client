# PatchedLiveLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**state** | **str** |  | [optional] 
**start_time** | **datetime** |  | [optional] 
**end_time** | **datetime** |  | [optional] 

## Example

```python
from libretime_client.models.patched_live_log import PatchedLiveLog

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedLiveLog from a JSON string
patched_live_log_instance = PatchedLiveLog.from_json(json)
# print the JSON string representation of the object
print PatchedLiveLog.to_json()

# convert the object into a dict
patched_live_log_dict = patched_live_log_instance.to_dict()
# create an instance of PatchedLiveLog from a dict
patched_live_log_form_dict = patched_live_log.from_dict(patched_live_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


