# MountName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**mount_name** | **str** |  | 

## Example

```python
from libretime_client.models.mount_name import MountName

# TODO update the JSON string below
json = "{}"
# create an instance of MountName from a JSON string
mount_name_instance = MountName.from_json(json)
# print the JSON string representation of the object
print MountName.to_json()

# convert the object into a dict
mount_name_dict = mount_name_instance.to_dict()
# create an instance of MountName from a dict
mount_name_form_dict = mount_name.from_dict(mount_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


