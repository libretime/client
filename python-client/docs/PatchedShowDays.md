# PatchedShowDays


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**first_show_on** | **date** |  | [optional] 
**last_show_on** | **date** |  | [optional] 
**start_time** | **str** |  | [optional] 
**timezone** | **str** |  | [optional] 
**duration** | **str** |  | [optional] 
**record_enabled** | [**RecordEnabledEnum**](RecordEnabledEnum.md) |  | [optional] 
**week_day** | [**WeekDayEnum**](WeekDayEnum.md) |  | [optional] 
**repeat_kind** | [**RepeatKindEnum**](RepeatKindEnum.md) |  | [optional] 
**repeat_next_on** | **date** |  | [optional] 
**show** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_show_days import PatchedShowDays

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedShowDays from a JSON string
patched_show_days_instance = PatchedShowDays.from_json(json)
# print the JSON string representation of the object
print PatchedShowDays.to_json()

# convert the object into a dict
patched_show_days_dict = patched_show_days_instance.to_dict()
# create an instance of PatchedShowDays from a dict
patched_show_days_form_dict = patched_show_days.from_dict(patched_show_days_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


