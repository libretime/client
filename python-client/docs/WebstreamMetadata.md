# WebstreamMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**starts_at** | **datetime** |  | 
**data** | **str** |  | 
**schedule** | **int** |  | 

## Example

```python
from libretime_client.models.webstream_metadata import WebstreamMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of WebstreamMetadata from a JSON string
webstream_metadata_instance = WebstreamMetadata.from_json(json)
# print the JSON string representation of the object
print WebstreamMetadata.to_json()

# convert the object into a dict
webstream_metadata_dict = webstream_metadata_instance.to_dict()
# create an instance of WebstreamMetadata from a dict
webstream_metadata_form_dict = webstream_metadata.from_dict(webstream_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


