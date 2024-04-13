# PatchedServiceRegister


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**ip** | **str** |  | [optional] 

## Example

```python
from libretime_client.models.patched_service_register import PatchedServiceRegister

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedServiceRegister from a JSON string
patched_service_register_instance = PatchedServiceRegister.from_json(json)
# print the JSON string representation of the object
print(PatchedServiceRegister.to_json())

# convert the object into a dict
patched_service_register_dict = patched_service_register_instance.to_dict()
# create an instance of PatchedServiceRegister from a dict
patched_service_register_form_dict = patched_service_register.from_dict(patched_service_register_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


