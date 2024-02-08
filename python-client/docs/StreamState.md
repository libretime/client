# StreamState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_main_connected** | **bool** |  | [readonly] 
**input_main_streaming** | **bool** |  | [readonly] 
**input_show_connected** | **bool** |  | [readonly] 
**input_show_streaming** | **bool** |  | [readonly] 
**schedule_streaming** | **bool** |  | [readonly] 

## Example

```python
from libretime_client.models.stream_state import StreamState

# TODO update the JSON string below
json = "{}"
# create an instance of StreamState from a JSON string
stream_state_instance = StreamState.from_json(json)
# print the JSON string representation of the object
print StreamState.to_json()

# convert the object into a dict
stream_state_dict = stream_state_instance.to_dict()
# create an instance of StreamState from a dict
stream_state_form_dict = stream_state.from_dict(stream_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


