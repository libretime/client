# ReadSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**cue_out** | **str** |  | [readonly] 
**ends_at** | **datetime** |  | [readonly] 
**starts_at** | **datetime** |  | 
**length** | **str** |  | [optional] 
**fade_in** | **str** |  | [optional] 
**fade_out** | **str** |  | [optional] 
**cue_in** | **str** |  | 
**position** | **int** |  | 
**position_status** | [**PositionStatusEnum**](PositionStatusEnum.md) |  | [optional] 
**broadcasted** | **int** |  | 
**played** | **bool** |  | [optional] 
**instance** | **int** |  | 
**file** | **int** |  | [optional] 
**stream** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.read_schedule import ReadSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ReadSchedule from a JSON string
read_schedule_instance = ReadSchedule.from_json(json)
# print the JSON string representation of the object
print(ReadSchedule.to_json())

# convert the object into a dict
read_schedule_dict = read_schedule_instance.to_dict()
# create an instance of ReadSchedule from a dict
read_schedule_from_dict = ReadSchedule.from_dict(read_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


