# PatchedThirdPartyTrackReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**service** | **str** |  | [optional] 
**foreign_id** | **str** |  | [optional] 
**upload_time** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**file** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_third_party_track_reference import PatchedThirdPartyTrackReference

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedThirdPartyTrackReference from a JSON string
patched_third_party_track_reference_instance = PatchedThirdPartyTrackReference.from_json(json)
# print the JSON string representation of the object
print PatchedThirdPartyTrackReference.to_json()

# convert the object into a dict
patched_third_party_track_reference_dict = patched_third_party_track_reference_instance.to_dict()
# create an instance of PatchedThirdPartyTrackReference from a dict
patched_third_party_track_reference_form_dict = patched_third_party_track_reference.from_dict(patched_third_party_track_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


