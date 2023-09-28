# ThirdPartyTrackReference


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**service** | **str** |  | 
**foreign_id** | **str** |  | [optional] 
**upload_time** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**file** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.third_party_track_reference import ThirdPartyTrackReference

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyTrackReference from a JSON string
third_party_track_reference_instance = ThirdPartyTrackReference.from_json(json)
# print the JSON string representation of the object
print ThirdPartyTrackReference.to_json()

# convert the object into a dict
third_party_track_reference_dict = third_party_track_reference_instance.to_dict()
# create an instance of ThirdPartyTrackReference from a dict
third_party_track_reference_form_dict = third_party_track_reference.from_dict(third_party_track_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


