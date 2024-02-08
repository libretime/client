# StreamPreferences


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_fade_transition** | **float** |  | [readonly] 
**message_format** | **int** |  | [readonly] 
**message_offline** | **str** |  | [readonly] 

## Example

```python
from libretime_client.models.stream_preferences import StreamPreferences

# TODO update the JSON string below
json = "{}"
# create an instance of StreamPreferences from a JSON string
stream_preferences_instance = StreamPreferences.from_json(json)
# print the JSON string representation of the object
print StreamPreferences.to_json()

# convert the object into a dict
stream_preferences_dict = stream_preferences_instance.to_dict()
# create an instance of StreamPreferences from a dict
stream_preferences_form_dict = stream_preferences.from_dict(stream_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


