# Library


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**name** | **str** |  | [optional] 
**code** | **str** |  | 
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**analyze_cue_points** | **bool** |  | [optional] 

## Example

```python
from libretime_client.models.library import Library

# TODO update the JSON string below
json = "{}"
# create an instance of Library from a JSON string
library_instance = Library.from_json(json)
# print the JSON string representation of the object
print Library.to_json()

# convert the object into a dict
library_dict = library_instance.to_dict()
# create an instance of Library from a dict
library_form_dict = library.from_dict(library_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


