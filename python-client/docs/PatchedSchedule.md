# PatchedSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**cue_out** | **str** |  | [optional] [readonly] 
**ends_at** | **datetime** |  | [optional] [readonly] 
**starts_at** | **datetime** |  | [optional] 
**length** | **str** |  | [optional] 
**fade_in** | **str** |  | [optional] 
**fade_out** | **str** |  | [optional] 
**cue_in** | **str** |  | [optional] 
**position** | **int** |  | [optional] 
**position_status** | [**PositionStatusEnum**](PositionStatusEnum.md) |  | [optional] 
**broadcasted** | **int** |  | [optional] 
**played** | **bool** |  | [optional] 
**instance** | **int** |  | [optional] 
**file** | **int** |  | [optional] 
**stream** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_schedule import PatchedSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedSchedule from a JSON string
patched_schedule_instance = PatchedSchedule.from_json(json)
# print the JSON string representation of the object
print(PatchedSchedule.to_json())

# convert the object into a dict
patched_schedule_dict = patched_schedule_instance.to_dict()
# create an instance of PatchedSchedule from a dict
patched_schedule_form_dict = patched_schedule.from_dict(patched_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


