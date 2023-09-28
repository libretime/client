# PatchedWebstreamMetadata


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**starts_at** | **datetime** |  | [optional] 
**data** | **str** |  | [optional] 
**schedule** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_webstream_metadata import PatchedWebstreamMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedWebstreamMetadata from a JSON string
patched_webstream_metadata_instance = PatchedWebstreamMetadata.from_json(json)
# print the JSON string representation of the object
print PatchedWebstreamMetadata.to_json()

# convert the object into a dict
patched_webstream_metadata_dict = patched_webstream_metadata_instance.to_dict()
# create an instance of PatchedWebstreamMetadata from a dict
patched_webstream_metadata_form_dict = patched_webstream_metadata.from_dict(patched_webstream_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


