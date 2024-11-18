# WriteSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**starts_at** | **datetime** |  | 
**ends_at** | **datetime** |  | 
**length** | **str** |  | [optional] 
**fade_in** | **str** |  | [optional] 
**fade_out** | **str** |  | [optional] 
**cue_in** | **str** |  | 
**cue_out** | **str** |  | 
**position** | **int** |  | 
**position_status** | [**PositionStatusEnum**](PositionStatusEnum.md) |  | [optional] 
**broadcasted** | **int** |  | 
**played** | **bool** |  | [optional] 
**instance** | **int** |  | 
**file** | **int** |  | [optional] 
**stream** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.write_schedule import WriteSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of WriteSchedule from a JSON string
write_schedule_instance = WriteSchedule.from_json(json)
# print the JSON string representation of the object
print(WriteSchedule.to_json())

# convert the object into a dict
write_schedule_dict = write_schedule_instance.to_dict()
# create an instance of WriteSchedule from a dict
write_schedule_from_dict = WriteSchedule.from_dict(write_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


