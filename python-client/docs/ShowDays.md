# ShowDays


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**first_show_on** | **date** |  | 
**last_show_on** | **date** |  | [optional] 
**start_time** | **str** |  | 
**timezone** | **str** |  | 
**duration** | **str** |  | 
**record_enabled** | [**RecordEnabledEnum**](RecordEnabledEnum.md) |  | [optional] 
**week_day** | [**WeekDayEnum**](WeekDayEnum.md) |  | [optional] 
**repeat_kind** | [**RepeatKindEnum**](RepeatKindEnum.md) |  | 
**repeat_next_on** | **date** |  | [optional] 
**show** | **int** |  | 

## Example

```python
from libretime_client.models.show_days import ShowDays

# TODO update the JSON string below
json = "{}"
# create an instance of ShowDays from a JSON string
show_days_instance = ShowDays.from_json(json)
# print the JSON string representation of the object
print ShowDays.to_json()

# convert the object into a dict
show_days_dict = show_days_instance.to_dict()
# create an instance of ShowDays from a dict
show_days_form_dict = show_days.from_dict(show_days_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


