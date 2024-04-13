# ShowHost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**show** | **int** |  | 
**user** | **int** |  | 

## Example

```python
from libretime_client.models.show_host import ShowHost

# TODO update the JSON string below
json = "{}"
# create an instance of ShowHost from a JSON string
show_host_instance = ShowHost.from_json(json)
# print the JSON string representation of the object
print(ShowHost.to_json())

# convert the object into a dict
show_host_dict = show_host_instance.to_dict()
# create an instance of ShowHost from a dict
show_host_form_dict = show_host.from_dict(show_host_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


