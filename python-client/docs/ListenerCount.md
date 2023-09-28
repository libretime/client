# ListenerCount


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**listener_count** | **int** |  | 
**timestamp** | **int** |  | 
**mount_name** | **int** |  | 

## Example

```python
from libretime_client.models.listener_count import ListenerCount

# TODO update the JSON string below
json = "{}"
# create an instance of ListenerCount from a JSON string
listener_count_instance = ListenerCount.from_json(json)
# print the JSON string representation of the object
print ListenerCount.to_json()

# convert the object into a dict
listener_count_dict = listener_count_instance.to_dict()
# create an instance of ListenerCount from a dict
listener_count_form_dict = listener_count.from_dict(listener_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


