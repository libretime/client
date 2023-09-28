# LiveLog


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**state** | **str** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** |  | [optional] 

## Example

```python
from libretime_client.models.live_log import LiveLog

# TODO update the JSON string below
json = "{}"
# create an instance of LiveLog from a JSON string
live_log_instance = LiveLog.from_json(json)
# print the JSON string representation of the object
print LiveLog.to_json()

# convert the object into a dict
live_log_dict = live_log_instance.to_dict()
# create an instance of LiveLog from a dict
live_log_form_dict = live_log.from_dict(live_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


