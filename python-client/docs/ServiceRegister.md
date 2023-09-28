# ServiceRegister


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**ip** | **str** |  | 

## Example

```python
from libretime_client.models.service_register import ServiceRegister

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceRegister from a JSON string
service_register_instance = ServiceRegister.from_json(json)
# print the JSON string representation of the object
print ServiceRegister.to_json()

# convert the object into a dict
service_register_dict = service_register_instance.to_dict()
# create an instance of ServiceRegister from a dict
service_register_form_dict = service_register.from_dict(service_register_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


